export const backgroundVideos = [
  {
    id: "video1",
    src: "/bg_video_1.mp4",
    type: "video/mp4",
  },
  {
    id: "video9",
    src: "/bg_video_9.mp4",
    type: "video/mp4",
  },
];

export const getRandomVideo = () => {
  const randomIndex = Math.floor(Math.random() * backgroundVideos.length);
  return backgroundVideos[randomIndex];
};
