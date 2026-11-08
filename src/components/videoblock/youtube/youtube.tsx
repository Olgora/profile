import React from "react";
import styles from "./youtube.module.css";

interface YouTubePlayerProps {
  videoId: string; // ID видео из YouTube
  autoPlay?: boolean;
  controls?: boolean;
  mute?: boolean;
}

export const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
  autoPlay = false,
  controls = true,
  mute = false,
}) => {
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=${
    autoPlay ? 1 : 0
  }&controls=${controls ? 1 : 0}&mute=${mute ? 1 : 0}`;

  return (
    <div className={styles.youtubeWrapper}>
      <iframe
        className={styles.youtubeIframe}
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};