"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    ChevronDown,
    ChevronUp,
    Maximize2,
    Pause,
    Play,
    Settings,
    Star,
    Volume2,
    VolumeX,
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

// ─── Quote Preview ─────────────────────────────────────────────────────────────

const PREVIEW_CHARS = 250;

interface ExpandableQuoteProps {
    quote: string;
}

const ExpandableQuote = ({ quote }: ExpandableQuoteProps) => {
    const [expanded, setExpanded] = useState(false);

    const isLong = quote.length > PREVIEW_CHARS;
    const preview = isLong
        ? `${quote.slice(0, PREVIEW_CHARS).trimEnd()}…`
        : quote;

    return (
        <div className="mb-6">
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={expanded ? "expanded" : "collapsed"}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                >
                    <p className="text-sm font-medium italic leading-relaxed text-gray-700 sm:text-base md:text-lg lg:text-[20px]">
                        {expanded ? quote : preview}
                    </p>
                </motion.div>
            </AnimatePresence>

            {isLong && (
                <button
                    type="button"
                    onClick={() => setExpanded((previous) => !previous)}
                    className="group mt-2 inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-800 sm:text-sm"
                    aria-expanded={expanded}
                >
                    {expanded ? (
                        <>
                            <span>Show less</span>
                            <ChevronUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                        </>
                    ) : (
                        <>
                            <span>Read more</span>
                            <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                        </>
                    )}
                </button>
            )}
        </div>
    );
};

// ─── Mouse Click Indicator ────────────────────────────────────────────────────

const MouseClickIndicator = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-40 flex translate-x-[35%] translate-y-[40%] scale-75 select-none items-center justify-center sm:scale-100"
    >
        <div
            className="absolute h-8 w-8 animate-ping rounded-full border border-amber-500/80 opacity-75"
            style={{ animationDuration: "1.2s" }}
        />

        <div
            className="absolute h-12 w-12 animate-ping rounded-full border border-amber-500/40 opacity-50"
            style={{ animationDuration: "1.8s" }}
        />

        <svg
            className="h-8 w-8 -rotate-[15deg] fill-white text-neutral-900 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
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

const TestimonialVideoPlayer = ({
    videoUrl,
    thumbnailUrl,
}: VideoPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
        null,
    );

    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState("0:00");
    const [duration, setDuration] = useState("0:00");
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(false);

    const clearControlsTimeout = () => {
        if (!controlsTimeoutRef.current) {
            return;
        }

        clearTimeout(controlsTimeoutRef.current);
        controlsTimeoutRef.current = null;
    };

    const togglePlay = async () => {
        const video = videoRef.current;

        if (!video) {
            return;
        }

        if (video.paused) {
            try {
                await video.play();
            } catch {
                setIsPlaying(false);
            }

            return;
        }

        video.pause();
    };

    const formatTime = (time: number) => {
        if (!Number.isFinite(time)) {
            return "0:00";
        }

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;

        if (!video) {
            return;
        }

        const videoDuration = video.duration || 0;
        const videoCurrentTime = video.currentTime;

        setProgress(
            videoDuration > 0
                ? Math.min((videoCurrentTime / videoDuration) * 100, 100)
                : 0,
        );
        setCurrentTime(formatTime(videoCurrentTime));
    };

    const handleLoadedMetadata = () => {
        const video = videoRef.current;

        if (!video) {
            return;
        }

        setDuration(formatTime(video.duration));
    };

    const handleProgressClick = (
        event: React.MouseEvent<HTMLDivElement>,
    ) => {
        const video = videoRef.current;

        if (!video || !Number.isFinite(video.duration)) {
            return;
        }

        const rect = event.currentTarget.getBoundingClientRect();
        const clickPosition = Math.min(
            Math.max((event.clientX - rect.left) / rect.width, 0),
            1,
        );

        video.currentTime = clickPosition * video.duration;
    };

    const toggleMute = () => {
        const video = videoRef.current;

        if (!video) {
            return;
        }

        const nextMutedState = !video.muted;

        video.muted = nextMutedState;
        setIsMuted(nextMutedState);
    };

    const toggleFullscreen = async () => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        try {
            if (document.fullscreenElement) {
                await document.exitFullscreen();
                return;
            }

            await container.requestFullscreen();
        } catch {
            // Fullscreen may be blocked by the browser or device.
        }
    };

    const handleMouseMove = () => {
        setShowControls(true);
        clearControlsTimeout();

        if (isPlaying) {
            controlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false);
            }, 2500);
        }
    };

    useEffect(() => {
        return clearControlsTimeout;
    }, []);

    useEffect(() => {
        if (!isPlaying) {
            clearControlsTimeout();
            setShowControls(true);
        }
    }, [isPlaying]);

    return (
        <div
            ref={containerRef}
            className="group relative aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-black shadow-md"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                if (isPlaying) {
                    setShowControls(false);
                }
            }}
        >
            <video
                ref={videoRef}
                src={videoUrl}
                poster={thumbnailUrl}
                className="h-full w-full cursor-pointer object-cover"
                playsInline
                preload="metadata"
                onClick={togglePlay}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => {
                    setIsPlaying(false);
                    setProgress(100);
                }}
            />

            {/* Trusted Badge */}
            <div className="absolute right-1 top-1 z-20 flex select-none items-center gap-2 rounded-[14px] border border-slate-100 bg-white px-3.5 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <Star className="h-4 w-4 shrink-0 fill-blue-600 text-blue-600" />

                <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold leading-tight text-gray-900 sm:text-xs">
                        Trusted by{" "}
                        <span className="font-extrabold text-blue-600">
                            3217+
                        </span>
                    </span>

                    <span className="text-[8px] font-semibold leading-tight text-gray-500 sm:text-[10px]">
                        Happy Clients
                    </span>
                </div>
            </div>

            {/* Play Overlay */}
            <AnimatePresence>
                {!isPlaying && (
                    <motion.button
                        type="button"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        onClick={togglePlay}
                        className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/15 transition-all duration-300 group-hover:bg-black/25"
                        aria-label="Play testimonial video"
                    >
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 shadow-[0_4px_20px_rgba(0,82,255,0.4)] transition-transform duration-300 hover:scale-110 sm:h-20 sm:w-20">
                            <Play className="h-8 w-8 translate-x-0.5 fill-white text-white" />
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Video Controls */}
            <div
                className={`absolute bottom-0 left-0 right-0 z-20 flex flex-col gap-2 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 transition-opacity duration-300 ${showControls || !isPlaying
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                    }`}
            >
                <div
                    className="relative h-1.5 w-full cursor-pointer rounded-full bg-white/20 transition-all duration-150 hover:h-2"
                    onClick={handleProgressClick}
                    role="slider"
                    aria-label="Video progress"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(progress)}
                    tabIndex={0}
                >
                    <div
                        className="absolute left-0 top-0 h-full rounded-full bg-blue-600"
                        style={{ width: `${progress}%` }}
                    />

                    <div
                        className="absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-white bg-blue-500"
                        style={{
                            left: `clamp(0px, calc(${progress}% - 7px), calc(100% - 14px))`,
                        }}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={togglePlay}
                            className="cursor-pointer p-1 text-white transition-colors hover:text-blue-400"
                            aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                            {isPlaying ? (
                                <Pause className="h-4 w-4 fill-white" />
                            ) : (
                                <Play className="h-4 w-4 fill-white" />
                            )}
                        </button>

                        <span className="select-none text-[11px] font-semibold tracking-wide text-white sm:text-xs">
                            {currentTime} / {duration}
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={toggleMute}
                            className="cursor-pointer p-1 text-white transition-colors hover:text-blue-400"
                            aria-label={isMuted ? "Unmute video" : "Mute video"}
                        >
                            {isMuted ? (
                                <VolumeX className="h-4 w-4" />
                            ) : (
                                <Volume2 className="h-4 w-4" />
                            )}
                        </button>

                        <button
                            type="button"
                            className="cursor-pointer p-1 text-white transition-colors hover:text-blue-400"
                            aria-label="Video settings"
                        >
                            <Settings className="h-4 w-4" />
                        </button>

                        <button
                            type="button"
                            onClick={toggleFullscreen}
                            className="cursor-pointer p-1 text-white transition-colors hover:text-blue-400"
                            aria-label="Enter fullscreen"
                        >
                            <Maximize2 className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ReviewSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showPaymentNote, setShowPaymentNote] = useState(false);

    useEffect(() => {
        if (testimonials.length <= 1) {
            return;
        }

        const timer = window.setInterval(() => {
            setCurrentIndex(
                (previous) => (previous + 1) % testimonials.length,
            );
        }, 9000);

        return () => window.clearInterval(timer);
    }, []);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="container relative mx-auto overflow-visible py-16 md:my-8 md:mb-12 md:py-2">
            <div className="container relative mx-auto px-4 md:px-6">
                {/* Main Card */}
                <div className="relative flex flex-col items-start gap-8 rounded-3xl border border-slate-100 bg-[#F1F6FA] p-6 shadow-[0_15px_60px_-15px_rgba(0,82,255,0.07)] sm:p-8 md:p-12 lg:flex-row lg:gap-12">
                    {/* Left Column */}
                    <div className="flex h-full min-h-[300px] flex-1 flex-col justify-between">
                        <div className="flex flex-col">
                            {/* Quote Icon */}
                            <div
                                aria-hidden="true"
                                className="-mb-6 select-none font-serif text-7xl font-bold text-blue-600"
                            >
                                &ldquo;
                            </div>

                            {/* Testimonial Transition */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{
                                        duration: 0.35,
                                        ease: "easeInOut",
                                    }}
                                    className="mt-2"
                                >
                                    <ExpandableQuote
                                        key={currentIndex}
                                        quote={currentTestimonial.quote}
                                    />

                                    {/* Author */}
                                    <div className="mt-2">
                                        <h4 className="text-base font-bold leading-snug text-gray-900 sm:text-lg">
                                            {currentTestimonial.name}
                                        </h4>

                                        <p className="mt-1 text-sm font-semibold text-blue-600">
                                            {currentTestimonial.tag}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Slider Dots */}
                        {testimonials.length > 1 && (
                            <div className="mt-8 flex flex-wrap items-center gap-2.5">
                                {testimonials.map((testimonial, index) => (
                                    <button
                                        key={testimonial.id}
                                        type="button"
                                        onClick={() => setCurrentIndex(index)}
                                        className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? "w-5 scale-110 bg-blue-600"
                                            : "w-2.5 bg-[#B0CFFF] hover:bg-blue-300"
                                            }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                        aria-current={
                                            index === currentIndex
                                                ? "true"
                                                : undefined
                                        }
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Column */}
                    <div className="w-full shrink-0 lg:w-[55%]">
                        <TestimonialVideoPlayer
                            key={currentTestimonial.id}
                            videoUrl={currentTestimonial.videoUrl}
                            thumbnailUrl={currentTestimonial.thumbnailUrl}
                        />
                    </div>
                </div>

                {/* CTA Button and Payment Note */}
                <div className="relative z-30 mx-auto flex w-[90%] flex-col items-center gap-4  sm:w-auto">
                    <div className="flex w-full justify-center">
                        {/*
                            This wrapper matches the exact button width.

                            MouseClickIndicator is positioned relative to this
                            element instead of the full-width outer container.
                        */}
                        <div className="group relative inline-flex max-w-full">
                            <Link
                                href="https://buy.stripe.com/eVq28sb0fbv297dgs26Na05"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setShowPaymentNote(true)}
                                className="relative inline-flex w-full items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-xl border border-[#E5A91D]/80 bg-gradient-to-r from-[#F5C036] via-[#FFE79A] to-[#E5A91D] px-6 py-3 text-[11px] font-extrabold uppercase tracking-wide text-black shadow-[0_8px_25px_rgba(229,169,29,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(229,169,29,0.65)] active:scale-[0.98] sm:w-auto sm:gap-2.5 sm:px-10 sm:py-4 sm:text-sm md:text-base"
                            >
                                {/* Shimmer */}
                                <motion.span
                                    aria-hidden="true"
                                    className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "200%" }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 2.2,
                                        ease: "linear",
                                    }}
                                />

                                <span className="relative z-10 text-center leading-tight">
                                    REGISTER NOW
                                </span>

                                <ArrowRight className="relative z-10 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
                            </Link>

                            <MouseClickIndicator />
                        </div>
                    </div>

                    {/* Payment Note */}
                    <AnimatePresence>
                        {showPaymentNote && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    height: 0,
                                    y: -10,
                                }}
                                animate={{
                                    opacity: 1,
                                    height: "auto",
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    height: 0,
                                    y: -10,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                                className="w-full max-w-sm overflow-hidden rounded-xl border border-blue-200/80 bg-blue-50/95 p-3 text-center shadow-md backdrop-blur-xs sm:max-w-md md:max-w-lg"
                            >
                                <p className="text-[10px] font-semibold leading-relaxed text-blue-900 sm:text-[11px] md:text-xs">
                                    Having trouble completing your payment
                                    through Stripe?{" "}
                                    <span className="block sm:inline">
                                        Please email us at{" "}
                                        <a
                                            href="mailto:harrysingh@destinyabroad.ae"
                                            className="cursor-pointer font-bold text-blue-600 underline transition-colors hover:text-blue-700"
                                        >
                                            harrysingh@destinyabroad.ae
                                        </a>
                                        , and our team will assist you with an
                                        alternative payment option.
                                    </span>
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}