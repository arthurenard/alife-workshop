export const backgroundVideos = [
  // {
  //   id: "video1",
  //   src: "/bg_video_1.mp4",
  //   type: "video/mp4",
  // },
  // {
  //   id: "video9",
  //   src: "/bg_video_9.mp4",
  //   type: "video/mp4",
  // },
  {
    id: "cmprs_v1",
    src: "videos/cmprs_bg_1.webm",
    type: "video/webm",
  },
  {
    id: "cmprs_v9",
    src: "videos/cmprs_bg_9.webm",
    type: "video/webm",
  },
];

export const getRandomVideo = (excludeId?: string) => {
  const availableVideos = excludeId
    ? backgroundVideos.filter((video) => video.id !== excludeId)
    : backgroundVideos;

  const randomIndex = Math.floor(Math.random() * availableVideos.length);
  return availableVideos[randomIndex];
};
