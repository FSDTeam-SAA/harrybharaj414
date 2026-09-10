"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Play, Pause, Volume2, VolumeX, Settings, Maximize2, Star, ArrowRight, ChevronDown, ChevronUp
} from "lucide-react";

// ─── Testimonial Data ─────────────────────────────────────────────────────────
const testimonials = [
    {
        id: 1,
        quote: "My name is Kanwaljeet Kaur from Punjab, India. I would like to thank Destiny Abroad and especially Mr. Harry for helping me throughout my Poland work visa journey. My process took around 5 months, and during this time the team guided me professionally at every step. Mr. Harry personally helped me with my documentation, visa interview preparation, and all the requirements needed for my application. Whenever I had questions or concerns, the team was always available to support me. Thanks to their expertise and guidance, I successfully obtained my Polish work visa and now working in Poland. The entire process was transparent, smooth, and well managed. I highly recommend Destiny Abroad to anyone looking for genuine assistance with overseas work opportunities. Thank you, Destiny Abroad, for making my journey successful.",
        name: "Kanwaljeet Kaur",
        tag: "Poland Work Visa – From Punjab, India",
        videoUrl: "/video/video5.webm",
        thumbnailUrl: "/images/hero-thumbnail.png",
    },
];

// ─── Short preview length (characters) ───────────────────────────────────────
const PREVIEW_CHARS = 250;

// ─── Read More / Collapse Quote Component ────────────────────────────────────
const ExpandableQuote = ({ quote }: { quote: string }) => {
    const [expanded, setExpanded] = useState(false);
    const isLong = quote.length > PREVIEW_CHARS;

    const preview = isLong ? quote.slice(0, PREVIEW_CHARS).trimEnd() + "…" : quote;

    return (
        <div className="mb-6">
            <AnimatePresence mode="wait">
                <motion.div
                    key={expanded ? "expanded" : "collapsed"}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-gray-700 italic font-medium leading-relaxed">
                        {expanded ? quote : preview}
                    </p>
                </motion.div>
            </AnimatePresence>

            {isLong && (
                <button
                    onClick={() => setExpanded((prev) => !prev)}
                    className="mt-2 inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold text-xs sm:text-sm transition-colors duration-200 cursor-pointer group"
                >
                    {expanded ? (
                        <>
                            <span>Show less</span>
                            <ChevronUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                        </>
                    ) : (
                        <>
                            <span>Read more</span>
                            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                        </>
                    )}
                </button>
            )}
        </div>
    );
};

// ─── Mouse Click Indicator ────────────────────────────────────────────────────
const MouseClickIndicator = () => (
    <div className="absolute -right-1.5 -bottom-3 sm:-right-3 sm:-bottom-5 z-40 scale-75 sm:scale-100 pointer-events-none select-none flex items-center justify-center">
        <div className="absolute w-8 h-8 rounded-full border border-amber-500/80 animate-ping opacity-75" style={{ animationDuration: "1.2s" }} />
        <div className="absolute w-12 h-12 rounded-full border border-amber-500/40 animate-ping opacity-50" style={{ animationDuration: "1.8s" }} />
        <svg
            className="w-8 h-8 text-neutral-900 fill-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transform rotate-[-15deg] translate-x-1.5 translate-y-1.5"
            viewBox="0 0 24 24"
        >
            <path
                d="M5.5 2v15.5l4.5-4.5 4 8 3.5-1.5-4-8 6.5-.5L5.5 2z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="miter"
            />
        </svg>
    </div>
);

// ─── Custom Video Player ──────────────────────────────────────────────────────
interface VideoPlayerProps {
    videoUrl: string;
    thumbnailUrl: string;
}

const TestimonialVideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, thumbnailUrl }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState("0:00");
    const [duration, setDuration] = useState("0:00");
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) { videoRef.current.pause(); } else { videoRef.current.play(); }
    };

    const formatTime = (t: number) => {
        if (isNaN(t)) return "0:00";
        const m = Math.floor(t / 60), s = Math.floor(t % 60);
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };

    const handleTimeUpdate = () => {
        if (!videoRef.current) return;
        const cur = videoRef.current.currentTime, dur = videoRef.current.duration || 0;
        setProgress(dur > 0 ? (cur / dur) * 100 : 0);
        setCurrentTime(formatTime(cur));
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!videoRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        videoRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * videoRef.current.duration;
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const toggleFullscreen = () => {
        if (!containerRef.current) return;
        document.fullscreenElement ? document.exitFullscreen() : containerRef.current.requestFullscreen();
    };

    const handleMouseMove = () => {
        setShowControls(true);
        if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        if (isPlaying) {
            controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 2500);
        }
    };

    useEffect(() => () => { if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current); }, [isPlaying]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden bg-black group shadow-md"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => isPlaying && setShowControls(false)}
        >
            <video
                ref={videoRef}
                src={videoUrl}
                poster={thumbnailUrl}
                className="w-full h-full object-cover cursor-pointer"
                playsInline
                onClick={togglePlay}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={() => videoRef.current && setDuration(formatTime(videoRef.current.duration))}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            {/* Trusted Badge */}
            <div className="absolute top-1 right-1 z-20 bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-[14px] px-3.5 py-2 flex items-center gap-2 select-none">
                <Star className="w-4 h-4 text-blue-600 fill-blue-600 shrink-0" />
                <div className="flex flex-col text-left">
                    <span className="text-[10px] sm:text-xs font-bold text-gray-900 leading-tight">
                        Trusted by <span className="text-blue-600 font-extrabold">3400+</span>
                    </span>
                    <span className="text-[8px] sm:text-[10px] text-gray-500 font-semibold leading-tight">Happy Clients</span>
                </div>
            </div>

            {/* Play Overlay */}
            <AnimatePresence>
                {!isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/25 transition-all duration-300 cursor-pointer"
                        onClick={togglePlay}
                    >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,82,255,0.4)] hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 fill-white translate-x-0.5" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Controls */}
            <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col gap-2 transition-opacity duration-300 z-20 ${showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div className="relative w-full h-1.5 bg-white/20 rounded-full cursor-pointer hover:h-2 transition-all duration-150" onClick={handleProgressClick}>
                    <div className="absolute top-0 left-0 h-full bg-blue-600 rounded-full" style={{ width: `${progress}%` }} />
                    <div className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-blue-500 border-2 border-white rounded-full" style={{ left: `calc(${progress}% - 7px)` }} />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button onClick={togglePlay} className="text-white hover:text-blue-400 transition-colors p-1 cursor-pointer">
                            {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                        </button>
                        <span className="text-white text-[11px] sm:text-xs font-semibold select-none tracking-wide">{currentTime} / {duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={toggleMute} className="text-white hover:text-blue-400 transition-colors p-1 cursor-pointer">
                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <button className="text-white hover:text-blue-400 transition-colors p-1 cursor-pointer"><Settings className="w-4 h-4" /></button>
                        <button onClick={toggleFullscreen} className="text-white hover:text-blue-400 transition-colors p-1 cursor-pointer"><Maximize2 className="w-4 h-4" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ReviewSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setCurrentIndex((p) => (p + 1) % testimonials.length), 9000);
        return () => clearInterval(timer);
    }, []);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="container mx-auto py-16 md:py-2 md:mb-12 relative overflow-visible md:my-8">
            <div className="container mx-auto px-4 md:px-6 relative">

                {/* Main Card */}
                <div className="relative bg-[#F1F6FA] border border-slate-100 rounded-3xl p-6 sm:p-8 md:p-12 shadow-[0_15px_60px_-15px_rgba(0,82,255,0.07)] flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                    {/* Left Column */}
                    <div className="flex-1 flex flex-col justify-between h-full min-h-[300px]">
                        <div className="flex flex-col">
                            {/* Quote Icon */}
                            <div className="text-7xl -mb-6 font-serif font-bold text-blue-600 select-none pointer-events-none"> &ldquo;</div>
                            {/* Animated slide transition wrapper */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                    className="mt-2"
                                >
                                    {/* Expandable Quote — key forces remount on slide change, resetting expanded state */}
                                    <ExpandableQuote
                                        key={currentIndex}
                                        quote={currentTestimonial.quote}
                                    />

                                    {/* Author */}
                                    <div className="mt-2">
                                        <h4 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                                            {currentTestimonial.name}
                                        </h4>
                                        <p className="text-sm font-semibold text-blue-600 mt-1">
                                            {currentTestimonial.tag}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Slider Dots */}
                        <div className="flex gap-2.5 mt-8 items-center flex-wrap">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex ? "bg-blue-600 scale-110 w-5" : "bg-[#B0CFFF] hover:bg-blue-300"}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Video */}
                    <div className="w-full lg:w-[55%] shrink-0">
                        <TestimonialVideoPlayer
                            key={currentTestimonial.id}
                            videoUrl={currentTestimonial.videoUrl}
                            thumbnailUrl={currentTestimonial.thumbnailUrl}
                        />
                    </div>
                </div>

                {/* Golden CTA Button — overlapping bottom edge */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 w-[90%] sm:w-auto flex justify-center">
                    <div className="relative group w-full flex justify-center">
                        <Link
                            // href="https://topmate.io/harry_singh12/1974489"
                            href="https://buy.stripe.com/eVq28sb0fbv297dgs26Na05"
                            target="_blank"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-gradient-to-r from-[#F5C036] via-[#FFE79A] to-[#E5A91D] hover:scale-[1.02] active:scale-[0.98] text-black font-extrabold tracking-wide py-3 sm:py-4 px-6 sm:px-10 rounded-xl shadow-[0_8px_25px_rgba(229,169,29,0.35)] hover:shadow-[0_12px_35px_rgba(229,169,29,0.65)] transition-all duration-300 cursor-pointer text-[11px] sm:text-sm md:text-base whitespace-nowrap relative overflow-hidden uppercase border border-[#E5A91D]/80"
                        >
                            {/* Shimmer */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12"
                                initial={{ x: "-100%" }}
                                animate={{ x: "200%" }}
                                transition={{ repeat: Infinity, repeatType: "loop", duration: 2.2, ease: "linear" }}
                            />
                            <span className="relative z-10 leading-tight text-center">
                                REGISTER NOW
                            </span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10 shrink-0" />
                        </Link>
                        <MouseClickIndicator />
                    </div>
                </div>

            </div>
        </section>
    );
}
