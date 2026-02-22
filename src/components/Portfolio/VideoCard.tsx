import { FaPlay } from "react-icons/fa";
import type { VideoData } from "../../types/youtube";
import { cardVariants } from "../../styles/animations";
import {
  VideoCardWrapper,
  Thumbnail,
  ThumbImg,
  ThumbOverlay,
  PlayBtn,
  CardMeta,
  VideoTitle,
} from "./Portfolio.styles";

interface VideoCardProps {
  video: VideoData;
  onClick: (video: VideoData) => void;
}

export default function VideoCard({ video, onClick }: VideoCardProps) {
  return (
    <VideoCardWrapper
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      onClick={() => onClick(video)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}>
      <Thumbnail>
        <ThumbImg
          className="thumb-img"
          src={video.thumbnailUrl}
          alt={video.title}
          loading="lazy"
        />
        <ThumbOverlay />
        <PlayBtn className="play-btn">
          <FaPlay />
        </PlayBtn>
      </Thumbnail>
      <CardMeta>
        <VideoTitle>{video.title}</VideoTitle>
      </CardMeta>
    </VideoCardWrapper>
  );
}
