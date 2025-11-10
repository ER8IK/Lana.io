import React, { useState, useRef } from "react";
import { Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Research = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const videos = [
    {
      id: "BskkuxW9j-Y",
      title:
        "Quantum Cryptography | The New Technology That Will Change The World Forever",
      description:
        "Обзор последних достижений в области технологий и их влияние на будущее",
      duration: "11:16",
      category: "Technology",
    },
    {
      id: "P7_SfxRrXTE",
      title:
        "Here's What Will Happen When We Combine Quantum Computing With AI!",
      description:
        "We will look, how Quantum Cryptography works and how it uses the interesting ideas of quantum mechanics to achieve levels of security that were once thought to be impossible",
      duration: "11:49",
      category: "AI",
    },
    {
      id: "B3U1NDUiwSA",
      title: "Quantum Computers Explained: How Quantum Computing Works",
      description:
        "Quantum computers use the principles of quantum mechanics to process information in ways that classical computers cant",
      duration: "5:40",
      category: "Development",
    },
    {
      id: "ZzNhoFRauMk",
      title: "Designing for Harsh Environments & Quantum Cryptography",
      description:
        "In this episode of Embedded Insiders, Rich and Jeff Baldwin, Director of Engineering at Sealevel Systems, discuss the process of designing systems for harsh environments and how Sealevel's expertise helps customers get started with safe and reliable solutions.",
      duration: "33:30",
      category: "Design",
    },
    {
      id: "_C5dkUiiQnw",
      title: "Post-quantum cryptography: Security after Shor's algorithm",
      description:
        "Quantum Security protects data using principles of quantum mechanics. It ensures information remains secure even against future computing threats.",
      duration: "7:17",
      category: "Security",
    },
    {
      id: "gJFQ0k8a9ZY",
      title: "What Is The Quantum Blockchain?",
      description:
        'Are you an enthusiast in the ever-evolving world of blockchain? Do you wish to stay updated with the latest developments, like quantum blockchains? Our expansive video, "What Is The Quantum Blockchain?" ',
      duration: "5:36",
      category: "Blockchain",
    },
  ];

  const openVideo = (videoId: string) => setActiveVideo(videoId);
  const closeVideo = () => setActiveVideo(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.querySelector<HTMLDivElement>("div"); // первая карточка
      if (!card) return;

      const cardWidth = card.offsetWidth;
      const gap = window.innerWidth < 768 ? 16 : 24; // gap из tailwind
      const scrollAmount = cardWidth + gap;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const card = container.querySelector<HTMLDivElement>("div");
      if (!card) return;

      const cardWidth = card.offsetWidth;
      const gap = window.innerWidth < 768 ? 16 : 24;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(index, videos.length - 1));
    }
  };

  return (
    <div
      id="research"
      className="min-h-screen bg-gradient-to-br p-4 md:p-8 pt-20 md:pt-34"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-orbitron mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
          >
            Research
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-gray-300 px-4"
          >
            Exploring cutting-edge technologies in quantum cryptography, AI,
            <br /> and blockchain that are shaping the future of secure digital innovation.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-400/90 hover:bg-blue-400 font-semibold text-white p-3 rounded-full shadow-2xl backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-400/90 hover:bg-blue-400 font-semibold text-white p-3 rounded-full shadow-2xl backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 md:gap-6 overflow-x-auto overflow-visible scrollbar-hide scroll-smooth pb-4 px-2 pt-8 md:pt-12 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex-shrink-0 w-72 md:w-80 group/card snap-center"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 md:hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 h-full">
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-80 group-hover/card:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/20 transition-colors duration-300" />

                    {/* Play Button */}
                    <button
                      onClick={() => openVideo(video.id)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 md:p-6 group-hover/card:scale-110 transition-transform duration-300 shadow-2xl">
                        <Play className="w-6 h-6 md:w-8 md:h-8 text-purple-300 fill-purple-300" />
                      </div>
                    </button>

                    {/* Duration */}
                    <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3 bg-black/80 backdrop-blur-sm px-2 md:px-3 py-1 rounded-lg">
                      <span className="text-white text-xs md:text-sm font-medium">
                        {video.duration}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="absolute top-2 md:top-3 left-2 md:left-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full">
                      <span className="text-white text-xs font-semibold">
                        {video.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-5">
                    <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover/card:text-purple-300 transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-purple-200 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                      {video.description}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => openVideo(video.id)}
                        className="flex-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 hover:from-blue-500 hover:via-indigo-400 hover:to-blue-300 active:from-blue-700 active:via-indigo-600 active:to-blue-500 text-white px-3 md:px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 text-xs md:text-sm"
                      >
                        <Play className="w-3 h-3 md:w-4 md:h-4" />
                        Watch
                      </button>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 active:bg-white/30 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                      >
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          {/* Scroll Indicator */}
          <div className="flex justify-center gap-1.5 mt-4 md:hidden">
            {videos.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-purple-400 scale-125"
                    : "bg-purple-400/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4"
            onClick={closeVideo}
          >
            <div
              className="relative w-full max-w-5xl aspect-video bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideo}
                className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm md:text-base font-medium transition-colors duration-200"
              >
                Close
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Research;
