import React, { useState, useRef } from "react";
import styles from "./imagegaleryvert.module.css";
import { motion, AnimatePresence } from "framer-motion";
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

interface ImageGalleryProps {
  images: string[];
  imagesmodal: string[];
  height?: number | string;
}

export const ImageGalleryVert: React.FC<ImageGalleryProps> = ({
  images,
  imagesmodal,
  height = "100%",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const startX = useRef(0);
  const offsetX = useRef(0);
  const [direction, setDirection] = useState(0);

  const openModal = (clickedImage: string) => {
    const indexg = imagesmodal.findIndex((img) => img === clickedImage);
    setCurrentIndex(indexg);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const prevSlide = () => {
    setDirection(1);
    setCurrentIndex(
      (prev) => (prev - 1 + imagesmodal.length) % imagesmodal.length,
    );
  };

  const nextSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev + 1) % imagesmodal.length);
  };

  // drag / swipe
  const handleStart = (clientX: number) => {
    startX.current = clientX;
  };
  const handleMove = (clientX: number) => {
    offsetX.current = clientX - startX.current;
  };
  const handleEnd = () => {
    if (offsetX.current > 50) prevSlide();
    else if (offsetX.current < -50) nextSlide();
    offsetX.current = 0;
  };

  return (
    <div className={styles.main}>
      <div className={styles.gallery}>
        {images.map((src, i) => (
          <div key={i} onClick={() => openModal(src)}>
            <img
              src={src}
              alt={`ImageAlex ${i}`}
              className={styles.image}
              style={{ width: height }}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
           
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                src={imagesmodal[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className={styles.modalImage}
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
            <div className={styles.buttons}>
              <button className={styles.prevBtn} onClick={prevSlide}>
                ‹
              </button>
              <button className={styles.nextBtn} onClick={nextSlide}>
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
/*<button className={styles.closeBtn} onClick={closeModal}>
              ✕
            </button>*/
