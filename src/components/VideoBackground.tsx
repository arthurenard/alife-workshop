"use client";

import { useState, useEffect, useCallback } from "react";
import { backgroundVideos, getRandomVideo } from "@/data/videos";
import { useInactivity } from "@/hooks/useInactivity";

export default function VideoBackground() {
  const [currentVideo, setCurrentVideo] = useState(backgroundVideos[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const isInactive = useInactivity();
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll handler to update video opacity and scroll state
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);

      // Calculate opacity based on scroll position
      // From 0 at top to 1 at viewport height
      const opacity = Math.min(scrollPosition / viewportHeight, 1);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const startTransition = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);

      // Get next video that's different from current
      const newVideo = getRandomVideo(currentVideo.id);

      // After fade out, switch videos
      setTimeout(() => {
        setCurrentVideo(newVideo);
        setIsTransitioning(false);
      }, 1000);
    }
  }, [currentVideo, isTransitioning]);

  useEffect(() => {
    const videoElement = document.querySelector("video");

    if (videoElement) {
      const handleTimeUpdate = () => {
        const timeLeft = videoElement.duration - videoElement.currentTime;
        // Start transition 1 second before video ends
        if (timeLeft < 1.0 && !isTransitioning) {
          startTransition();
        }
      };

      videoElement.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [isTransitioning, startTransition]);

  if (!currentVideo) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden bg-black">
      <div
        className={`absolute inset-0 ${
          isScrolled
            ? "transition-opacity duration-100"
            : "transition-opacity duration-1000"
        }`}
        style={{
          opacity: isTransitioning
            ? 0
            : isScrolled
            ? scrollOpacity
            : isInactive
            ? 1
            : 0,
        }}
      >
        <video
          key={currentVideo.id}
          autoPlay
          muted
          loop={false}
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover filter md:blur-[6px] blur-[4px]"
        >
          <source src={currentVideo.src} type={currentVideo.type} />
        </video>
      </div>
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}
