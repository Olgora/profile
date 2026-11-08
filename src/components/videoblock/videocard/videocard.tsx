import React, { useState } from "react";
import styles from "./videocard.module.css";

interface VideoCardProps {
  videoId: string;
  title?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ videoId, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

 
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div className={styles.videoCardWrapper} onClick={openModal}>
        <img
          src={thumbnailUrl}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = fallbackUrl;
          }}
          alt={title || "YouTube Video"}
          className={styles.videoThumbnail}
        />
        <div className={styles.playButton}>▶</div>
      </div>

      {isOpen && (
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
