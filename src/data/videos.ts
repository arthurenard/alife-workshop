import { Video } from "@/types";

// Get a random video excluding the one with the given ID
export const getRandomVideo = async (
  excludeId?: string
): Promise<Video | null> => {
  console.log("Getting random video, excluding:", excludeId);

  try {
    // Fetch videos from API
    const response = await fetch("/api/videos");
    if (!response.ok) {
      throw new Error(`Failed to fetch videos: ${response.status}`);
    }

    const videos: Video[] = await response.json();
    console.log("Videos fetched successfully:", videos);

    // Filter out the excluded video
    const availableVideos = excludeId
      ? videos.filter((video) => video.id !== excludeId)
      : videos;

    if (availableVideos.length === 0) {
      console.log("No available videos");
      return null;
    }

    // Select a random video
    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const selectedVideo = availableVideos[randomIndex];
    console.log("Selected video:", selectedVideo);
    return selectedVideo;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return null;
  }
};
