import { useScroll, useTransform, motion } from "framer-motion";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import { fadeUpVariants } from "../../styles/animations";
import {
  HeroSection,
  VideoBackground,
  HeroContent,
  HeroLabel,
  HeroTitle,
  HeroTagline,
  HeroCTA,
  ScrollIndicator,
} from "./Hero.styles";

const HERO_VIDEO_ID = "Ku7dAXrmxsA";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -180]);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroSection id="inicio">
      <VideoBackground>
        <iframe
          src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`}
          title="Hero background"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </VideoBackground>
      <motion.div
        style={{ y, width: "100%", display: "flex", justifyContent: "center" }}>
        <HeroContent>
          <HeroLabel
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            Producción Audiovisual · Madrid
          </HeroLabel>

          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            Tu visión, nuestra producción.
          </HeroTitle>

          <HeroTagline
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 } as never}>
            Branded Content · Videomarketing · Corporativos · Streaming
          </HeroTagline>

          <HeroCTA
            href="#contacto"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.1 } as never}>
            Hablemos de tu proyecto
            <FaArrowRight size={15} />
          </HeroCTA>
        </HeroContent>
      </motion.div>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        onClick={() => scrollToSection("#servicios")}>
        <span>Scroll</span>
        <FaChevronDown size={16} />
      </ScrollIndicator>
    </HeroSection>
  );
}
