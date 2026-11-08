import React, { useState, useRef } from "react";
import styles from "./videocardnew.module.css";

interface VideoCardProps {
  videoId: string;
  title?: string;
}

export const VideoCardNew: React.FC<VideoCardProps> = ({ videoId, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const preconnectedRef = useRef(false);

  const thumbnailMax = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const thumbnailFallback = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  // ⚡ preload соединения при hover
  const handleMouseEnter = () => {
    if (preconnectedRef.current) return;
    preconnectedRef.current = true;

    const domains = [
      "https://www.youtube.com",
      "https://www.google.com",
      "https://i.ytimg.com",
    ];

    domains.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = href;
      link.crossOrigin = "";
      document.head.appendChild(link);
    });
  };

  const handleClick = () => {
    setIsLoaded(true);
  };

  return (
    <div className={styles.wrapper}>
      {!isLoaded ? (
        <div
          className={styles.preview}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
        >
          <img
            src={thumbnailMax}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = thumbnailFallback;
            }}
            alt={title || "YouTube Video"}
            className={styles.thumbnail}
            loading="lazy"
          />

          <div className={styles.playButton}>▶</div>
        </div>
      ) : (
        <div className={styles.iframeWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title || "YouTube Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="eager"
            className={styles.iframe}
          />
        </div>
      )}
    </div>
  );
};