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
    title: "Poland Work Permit Visa",
    videoUrl: "lII03D-7L-w",
    description: "Everything you need to know about the Poland Work Permit Visa."
  },
  {
    id: 2,
    title: "Luxembourg Work Permit Visa",
    videoUrl: "8BNcftSlt8g",
    description: "Luxembourg Work Permit Visa explained, with tips and guidelines."
  },
  {
    id: 3,
    title: "Albania Work Permit Visa 99% Success",
    videoUrl: "xJXGT2SkFn8",
    description: "How to get an Albania Work Permit Visa with a 99% success rate."
  },
  {
    id: 4,
    title: "Europe Work Permit Visa",
    videoUrl: "o_muYt6nh08",
    description: "Get your Europe Work Permit Visa in a few simple steps."
  },
  {
    id: 5,
    title: "Italy Work Permit Visa",
    videoUrl: "etlzKQTg6io",
    description: "A complete guide to applying for an Italy Work Permit Visa."
  },
  {
    id: 6,
    title: "Latvia Work Permit Visa",
    videoUrl: "Gvle35g7pno",
    description: "Steps to get a Latvia Work Permit Visa easily."
  },
  {
    id: 7,
    title: "Denmark Work Permit Visa",
    videoUrl: "qC15QSVwQQw",
    description: "Why Denmark is one of the best countries for your career abroad."
  },
  {
    id: 8,
    title: "Poland Work Permit Visa",
    videoUrl: "vqGNFNLt6xg",
    description: "Find out how to work and live in Poland with this guide."
  },
  {
    id: 9,
    title: "Poland Study & Work Permit Visa",
    videoUrl: "0UAQ6vUZh_o",
    description: "A guide to studying and working in Poland at the same time."
  },
  {
    id: 10,
    title: "Australia Skill Shortage Subclass 482",
    videoUrl: "PRu19h6uHGQ",
    description: "Everything you need to know about the Australia Skill Shortage Subclass 482 Visa."
  },
  {
    id: 11,
    title: "VFS Free Work Permit Visa Application",
    videoUrl: "6YgUewcjiCU",
    description: "Why you should avoid VFS and apply directly for your work permit in certain countries."
  },
  {
    id: 12,
    title: "Poland Work Visa Explained",
    videoUrl: "vHcvjzMyjaA",
    description: "See how I helped someone get a free work permit for Poland, including tips and hacks."
  },
  {
    id: 13,
    title: "Germany Work Permit Visa",
    videoUrl: "Cc34Zpnm_3M",
    description: "How to get a Germany Work Permit Visa and live and work in Germany."
  },
  {
    id: 14,
    title: "How I Came to Europe – Job & Work Permit",
    videoUrl: "7EtM8dzydec",
    description: "My personal journey to Europe and how you can come here too!"
  },
  {
    id: 15,
    title: "Poland Work Permit Visa Process",
    videoUrl: "PMB5P4fCm5M",
    description: "A step-by-step guide to successfully applying for the Poland Work Permit Visa."
  },
  {
    id: 16,
    title: "Spain Work Permit Visa",
    videoUrl: "PFC1edcu-TA",
    description: "Learn all about the Spain Work Permit Visa process and how to apply."
  },
  {
    id: 17,
    title: "Luxembourg Work Permit Visa for Subscribers",
    videoUrl: "AnHaTWq_ee8",
    description: "Lucky subscribers get a chance for a free work visa process for Luxembourg."
  },
  {
    id: 18,
    title: "Latvia Work Permit Visa",
    videoUrl: "trawHdWWIPY",
    description: "The ultimate guide to obtaining a Latvia Work Permit Visa and finding a job."
  }
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
      }, 5000); // Change slide every 5 seconds
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
    <section className="py-8 sm:py-16 bg-gray-50">
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
