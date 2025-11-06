"use client";

import React, { useState, useEffect, useRef } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const VideoResources = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [anyVideoPlaying, setAnyVideoPlaying] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const perPage = 6;
  const videos = [
    {
      id: 1,
      title: "Poland",
      videoUrl: "UTcPAXvw3pk",
      description: "Poland is a beautiful country; explore for your future.",
    },
    {
      id: 2,
      title: "Poland",
      videoUrl: "cnTMmma70p8",
      description: "Discover work and study options in Poland.",
    },
    {
      id: 3,
      title: "Poland",
      videoUrl: "ZBTJlYEAgZA",
      description: "Why Poland is a top destination for students.",
    },
    {
      id: 4,
      title: "Poland",
      videoUrl: "mCU6QuHFbtk",
      description: "The process to apply for Poland visas explained.",
    },
    {
      id: 5,
      title: "Poland",
      videoUrl: "ZBTJlYEAgZA",
      description: "Tips to settle successfully in Poland.",
    },
    {
      id: 6,
      title: "Poland",
      videoUrl: "AuZX4KR21OE",
      description: "Explore Poland's work culture and opportunities.",
    },
    {
      id: 7,
      title: "Poland",
      videoUrl: "pWXoeKdy5-c",
      description: "Life in Poland for international students.",
    },
    {
      id: 8,
      title: "Poland",
      videoUrl: "pWXoeKdy5-c",
      description: "A guide to studying in Poland.",
    },
    {
      id: 9,
      title: "Poland",
      videoUrl: "pfnfFB3lAoo",
      description: "Find out how to work and live in Poland.",
    },
    {
      id: 10,
      title: "Denmark",
      videoUrl: "gKvOzHFeXyM",
      description: "Why Denmark is great for your career abroad.",
    },
  ];

  const totalPages = Math.ceil(videos.length / perPage);
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const displayVideos = videos.slice(firstIndex, lastIndex);

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying && !anyVideoPlaying && totalPages > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentPage((prev) => (prev >= totalPages ? 1 : prev + 1));
      }, 2000); // Change slide every 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, anyVideoPlaying, totalPages]);

  // Detect when YouTube videos start playing
  useEffect(() => {
    const handleVideoPlay = () => {
      setAnyVideoPlaying(true);
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };

    const handleVideoPause = () => {
      setAnyVideoPlaying(false);
    };

    // Listen for YouTube iframe events
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      iframe.addEventListener("load", () => {
        // YouTube iframe API events are complex to handle without API
        // We'll use a simpler approach with mutation observer
      });
    });

    // Alternative approach: check for video playing every second
    const checkVideoPlaying = setInterval(() => {
      const videoContainers = document.querySelectorAll(".yt-lite");
      let playing = false;

      videoContainers.forEach((container) => {
        const iframe = container.querySelector("iframe");
        if (iframe) {
          // Check if iframe is visible and likely playing
          const rect = iframe.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            // This is a basic check - for more accurate detection you'd need YouTube API
            playing = true;
          }
        }
      });

      setAnyVideoPlaying(playing);
    }, 1000);

    return () => {
      clearInterval(checkVideoPlaying);
    };
  }, []);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      resetAutoPlay();
    } else {
      setCurrentPage(1); // Loop back to first page
      resetAutoPlay();
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      resetAutoPlay();
    } else {
      setCurrentPage(totalPages); // Loop to last page
      resetAutoPlay();
    }
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    if (isAutoPlaying && !anyVideoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentPage((prev) => (prev >= totalPages ? 1 : prev + 1));
      }, 5000);
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying && !anyVideoPlaying) {
      // If turning on auto-play and no video is playing
      resetAutoPlay();
    } else if (isAutoPlaying && autoPlayRef.current) {
      // If turning off auto-play
      clearInterval(autoPlayRef.current);
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    resetAutoPlay();
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Video Resources
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Watch & Learn from Our Experts
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Explore our latest videos for tips, guidance, and insights on work,
            study, and immigration opportunities abroad.
          </p>
        </header>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video">
                <LiteYouTubeEmbed
                  id={video.videoUrl}
                  title={video.title}
                  // Add poster for better loading
                  poster="hqdefault"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center space-y-4">
            {/* Auto-play toggle and page indicators */}
            <div className="flex items-center space-x-6">
              {/* <button
                onClick={toggleAutoPlay}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium ${
                  isAutoPlaying 
                    ? "bg-green-600 text-white hover:bg-green-700" 
                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                }`}
              >
                {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span>{isAutoPlaying ? "Pause Auto" : "Play Auto"}</span>
              </button> */}

              <div className="flex items-center space-x-4">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <ChevronLeft className="text-2xl text-gray-700" />
                </button>

                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          currentPage === page ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      />
                    )
                  )}
                </div>

                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <ChevronRight className="text-2xl text-gray-700" />
                </button>
              </div>

              <span className="text-gray-700 font-medium">
                {currentPage} / {totalPages}
              </span>
            </div>

            {/* Video playing status indicator */}
            {/* {anyVideoPlaying && (
              <div className="text-sm text-orange-600 flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                <span>Auto-slide paused while video is playing</span>
              </div>
            )} */}
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoResources;
