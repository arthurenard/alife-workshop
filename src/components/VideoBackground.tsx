"use client";

import { useState, useEffect, useCallback } from "react";
import { backgroundVideos, getRandomVideo } from "@/data/videos";

export default function VideoBackground() {
  const [currentVideo, setCurrentVideo] = useState(backgroundVideos[0]);
  const [nextVideo, setNextVideo] = useState(getRandomVideo());
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);

      // Get next video that's different from current
      const newVideo = getRandomVideo(currentVideo.id);
      setNextVideo(newVideo);

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
    <div className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <video
          key={currentVideo.id}
          autoPlay
          muted
          loop={false}
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover filter blur-[6px]"
        >
          <source src={currentVideo.src} type={currentVideo.type} />
        </video>
      </div>
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}
