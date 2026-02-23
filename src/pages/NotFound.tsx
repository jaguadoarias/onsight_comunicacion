import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const PageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10rem ${({ theme }) => theme.spacing.xl} 6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 8rem ${({ theme }) => theme.spacing.md} 4rem;
  }
`

const ErrorCode = styled(motion.span)`
  display: block;
  font-size: clamp(6rem, 20vw, 12rem);
  font-weight: ${({ theme }) => theme.fontWeight.black};
  line-height: 1;
  color: transparent;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.primaryBright} 50%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: -0.04em;
`

const Label = styled(motion.span)`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const Title = styled(motion.h1)`
  font-size: clamp(1.5rem, 4vw, ${({ theme }) => theme.fontSize['2xl']});
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 480px;
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const Actions = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
`

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radius.md};
  corner-shape: squircle;
  transition: background ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryBright};
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.radius.md};
  corner-shape: squircle;
  transition:
    color ${({ theme }) => theme.transition.fast},
    border-color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.white};
  }
`;

export default function NotFound() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageWrapper>
      <Navbar />
      <Content>
        <ErrorCode
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </ErrorCode>
        <Label
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {t('notFound.label')}
        </Label>
        <Title
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          {t('notFound.title')}
        </Title>
        <Description
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          {t('notFound.description')}
        </Description>
        <Actions
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
        >
          <PrimaryButton to="/">{t('notFound.backHome')}</PrimaryButton>
          <SecondaryButton to="/trabajos">{t('notFound.viewProjects')}</SecondaryButton>
        </Actions>
      </Content>
      <Footer />
    </PageWrapper>
  )
}
