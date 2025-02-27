"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { getRandomVideo } from "@/data/videos";
import { Video } from "@/types";

export default function VideoBackground() {
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Add initial delay to show video after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Initial video load
  useEffect(() => {
    const loadInitialVideo = async () => {
      try {
        const video = await getRandomVideo();
        console.log("Initial video loaded:", video);
        setCurrentVideo(video);
      } catch (error) {
        console.error("Error loading initial video:", error);
      }
    };

    loadInitialVideo();
  }, []);

  // Handle video ended event
  const handleVideoEnded = useCallback(async () => {
    console.log("Video ended, transitioning to next video");
    if (currentVideo && !isTransitioning) {
      setIsTransitioning(true);

      try {
        // Get next video that's different from current
        const nextVideo = await getRandomVideo(currentVideo.id);
        console.log("Next video selected:", nextVideo);

        // After fade out, switch videos
        setTimeout(() => {
          setCurrentVideo(nextVideo);
          setIsLoaded(false);
          setIsTransitioning(false);
        }, 1000);
      } catch (error) {
        console.error("Error getting next video:", error);
        setIsTransitioning(false);
      }
    }
  }, [currentVideo, isTransitioning]);

  // Handle video loaded event
  const handleVideoLoaded = useCallback(() => {
    console.log("Video loaded:", currentVideo?.id);
    setIsLoaded(true);

    // Make sure video plays
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Error playing video:", err);
      });
    }
  }, [currentVideo]);

  // Monitor video time to trigger transition before end
  useEffect(() => {
    if (!videoRef.current || !currentVideo) return;

    // Capture the current value of the ref
    const videoElement = videoRef.current;

    const handleTimeUpdate = () => {
      if (!videoElement) return;

      const timeLeft = videoElement.duration - videoElement.currentTime;
      // Start transition 1 second before video ends
      if (timeLeft < 1.0 && !isTransitioning) {
        console.log("Video almost ended, starting transition");
        handleVideoEnded();
      }
    };

    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [videoRef, currentVideo, isTransitioning, handleVideoEnded]);

  if (!currentVideo) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden bg-black">
      <div
        className={`absolute inset-0 transition-opacity ${
          isTransitioning ? "duration-1000" : "duration-1000"
        }`}
        style={{
          opacity: isTransitioning ? 0 : showVideo ? 1 : 0,
        }}
      >
        <video
          key={currentVideo.id}
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          onLoadedData={handleVideoLoaded}
          className={`absolute top-0 left-0 w-full h-full object-cover filter md:blur-[6px] blur-[4px] transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={currentVideo.src} type={currentVideo.type} />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}
