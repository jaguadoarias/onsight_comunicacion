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

  return (
    <AboutSection id="nosotros">
      <AboutContainer>
        <ImageStack
          variants={slideInLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          <MainImage>
            <img src="/images/onsight_corporativos.jpg" alt="OnSight equipo" />
          </MainImage>
          <SecondaryImage>
            <img src="/images/onsight_making-of.jpg" alt="Making of" />
          </SecondaryImage>
        </ImageStack>

        <TextContent
          variants={slideInRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          <SectionLabel>Quiénes somos</SectionLabel>
          <AboutTitle>Hacemos que tu visión cobre vida</AboutTitle>
          <AboutText>
            En OnSight Comunicación somos un equipo apasionado de profesionales
            del audiovisual con sede en Madrid. Nos especializamos en
            transformar ideas en experiencias visuales memorables que conectan
            marcas con personas.
          </AboutText>
          <AboutText>
            Desde nuestra fundación, hemos colaborado con empresas de todos los
            sectores, aportando creatividad, técnica y compromiso en cada
            proyecto. Creemos que cada historia merece ser contada de forma
            única y poderosa.
          </AboutText>

          <ValuePills>
            <Pill>Creatividad</Pill>
            <Pill>Calidad</Pill>
            <Pill>Compromiso</Pill>
            <Pill>Innovación</Pill>
          </ValuePills>
        </TextContent>
      </AboutContainer>
    </AboutSection>
  );
}
