import React, { useState } from "react";
import styles from "./videocardauto.module.css";

interface VideoCardHoverNoButtonProps {
  videoId: string;
  title?: string;
  autoplayOnLoad?: boolean;
  autoplayOnHover?: boolean;
}

export const VideoCardHoverNoButton: React.FC<VideoCardHoverNoButtonProps> = ({
  videoId,
  title,
  autoplayOnLoad = true,
  autoplayOnHover = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const shouldPlay = autoplayOnLoad || (autoplayOnHover && hovered);

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <div
        className={styles.videoCardWrapper}
        onClick={openModal}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={thumbnailUrl}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = fallbackUrl;
          }}
          alt={title || "YouTube Video"}
          className={styles.videoThumbnail}
        />

        {shouldPlay && (
          <iframe
            className={styles.videoOverlayIframe}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1&loop=1&playlist=${videoId}`}
            title={title || "YouTube Video"}
            allow="autoplay; encrypted-media; clipboard-write; gyroscope; picture-in-picture"
          />
        )}
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              ✕
            </button>
            <div className={styles.modalIframe}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
                title={title || "YouTube Video"}
                allow="autoplay; encrypted-media; clipboard-write; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
