import { Trans, useTranslation } from "react-i18next";
import {
  slideInLeftVariants,
  slideInRightVariants,
} from "../../styles/animations";
import {
  AboutSection,
  AboutContainer,
  ImageStack,
  MainImage,
  SecondaryImage,
  TextContent,
  SectionLabel,
  AboutTitle,
  AboutText,
  ValuePills,
  Pill,
} from "./About.styles";

export default function About() {
  const { t } = useTranslation();

  return (
    <AboutSection id="nosotros">
      <AboutContainer>
        <ImageStack
          variants={slideInLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          <MainImage>
            <img src="/images/onsight_corporativos.webp" alt={t("about.imgMainAlt")} />
          </MainImage>
          <SecondaryImage>
            <img src="/images/onsight_making-of.webp" alt={t("about.imgSecondaryAlt")} />
          </SecondaryImage>
        </ImageStack>

        <TextContent
          variants={slideInRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          <SectionLabel>{t("about.label")}</SectionLabel>
          <AboutTitle>{t("about.title")}</AboutTitle>
          <AboutText>
            <Trans i18nKey="about.p1" components={[<strong />]} />
          </AboutText>
          <AboutText>{t("about.p2")}</AboutText>

          <ValuePills>
            <Pill>{t("about.creativity")}</Pill>
            <Pill>{t("about.quality")}</Pill>
            <Pill>{t("about.commitment")}</Pill>
          </ValuePills>
        </TextContent>
      </AboutContainer>
    </AboutSection>
  );
}
