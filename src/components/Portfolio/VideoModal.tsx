import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import type { VideoData } from "../../types/youtube";
import { backdropVariants, modalVariants } from "../../styles/animations";
import {
  ModalBackdrop,
  ModalContent,
  VideoFrame,
  ModalMeta,
  ModalTitle,
  ModalDescription,
  CloseBtn,
} from "./Portfolio.styles";

interface VideoModalProps {
  video: VideoData | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    if (video) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [video]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      {video && (
        <ModalBackdrop
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}>
          <ModalContent
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative" }}>
            <CloseBtn onClick={onClose} aria-label="Cerrar">
              <FaTimes />
            </CloseBtn>
            <VideoFrame>
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                title={video.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </VideoFrame>
            <ModalMeta>
              <ModalTitle>{video.title}</ModalTitle>
              {video.description && (
                <ModalDescription>{video.description}</ModalDescription>
              )}
            </ModalMeta>
          </ModalContent>
        </ModalBackdrop>
      )}
    </AnimatePresence>,
    document.body,
  );
}
