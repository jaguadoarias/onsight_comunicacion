import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl}
    ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.bg} 0%,
    rgba(15, 10, 3, 0.98) 100%
  );

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl}
      ${({ theme }) => theme.spacing.md};
  }
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const SectionLabel = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, ${({ theme }) => theme.fontSize["3xl"]});
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const SectionSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const ContactGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl}; 

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const InfoCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.radius.lg};
  corner-shape: squircle;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
`;

export const InfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const InfoIcon = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.1rem;
  margin-top: 2px;
  flex-shrink: 0;
`;

export const InfoDetail = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-left: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.radius.md};
  corner-shape: squircle;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.1rem;
  transition: all ${({ theme }) => theme.transition.normal};
  text-decoration: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.glassPrimary};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const FormCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.radius.lg};
  corner-shape: squircle;
  padding: ${({ theme }) => theme.spacing.md};
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.03em;
`;

export const Input = styled.input<{ $error?: boolean }>`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid
    ${({ $error, theme }) =>
      $error ? theme.colors.primaryBright : theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.radius.md};
  corner-shape: squircle;
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.base};
  transition:
    border-color ${({ theme }) => theme.transition.fast},
    box-shadow ${({ theme }) => theme.transition.fast};
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textDim};
  }

  &:focus {
    border-color: ${({ $error, theme }) =>
      $error ? theme.colors.primaryBright : theme.colors.secondary};
    box-shadow: 0 0 0 2px
      ${({ $error }) =>
        $error ? "rgba(229, 34, 0, 0.2)" : "rgba(201, 168, 76, 0.2)"};
  }
`;

export const Textarea = styled.textarea<{ $error?: boolean }>`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid
    ${({ $error, theme }) =>
      $error ? theme.colors.primaryBright : theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.radius.md};
  corner-shape: squircle;
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.base};
  transition:
    border-color ${({ theme }) => theme.transition.fast},
    box-shadow ${({ theme }) => theme.transition.fast};
  outline: none;
  width: 100%;
  resize: none;
  min-height: 180px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textDim};
  }

  &:focus {
    border-color: ${({ $error, theme }) =>
      $error ? theme.colors.primaryBright : theme.colors.secondary};
    box-shadow: 0 0 0 2px
      ${({ $error }) =>
        $error ? "rgba(229, 34, 0, 0.2)" : "rgba(201, 168, 76, 0.2)"};
  }
`;

export const ErrorMsg = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: #e52200;
`;

export const SubmitBtn = styled.button<{ $loading?: boolean }>`
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ $loading, theme }) =>
    $loading ? "rgba(219, 45, 45, 0.5)" : theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  corner-shape: squircle;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 0.05em;
  transition: all ${({ theme }) => theme.transition.normal};
  cursor: ${({ $loading }) => ($loading ? "not-allowed" : "pointer")};
  margin-top: auto;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primaryBright};
    box-shadow: 0 0 30px rgba(219, 45, 45, 0.4);
  }
`;

export const SuccessPanel = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl}
    ${({ theme }) => theme.spacing.xl};

  .check {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;
