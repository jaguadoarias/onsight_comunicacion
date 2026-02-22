import { useEffect } from 'react'
import { Link } from 'react-router-dom'
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

const PageHero = styled.div`
  padding: 10rem ${({ theme }) => theme.spacing.xl} 4rem;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 8rem ${({ theme }) => theme.spacing.md} 3rem;
  }
`

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`

const PageLabel = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const PageTitle = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, ${({ theme }) => theme.fontSize['3xl']});
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const UpdatedDate = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textDim};
`

const ContentWrapper = styled.main`
  flex: 1;
  max-width: 860px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.white};
    margin: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.sm};
    padding-top: ${({ theme }) => theme.spacing.md};
    border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};

    &:first-child {
      margin-top: 0;
      border-top: none;
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.white};
    margin: ${({ theme }) => theme.spacing.md} 0 ${({ theme }) => theme.spacing.xs};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.8;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  ul {
    padding-left: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.sm};

    li {
      font-size: ${({ theme }) => theme.fontSize.base};
      color: ${({ theme }) => theme.colors.textMuted};
      line-height: 1.8;
      margin-bottom: 0.4rem;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
`

interface LegalPageProps {
  label: string
  title: string
  updatedDate: string
  children: React.ReactNode
}

export default function LegalPage({ label, title, updatedDate, children }: LegalPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageWrapper>
      <Navbar />
      <PageHero>
        <BackLink to="/">← Volver al inicio</BackLink>
        <div>
          <PageLabel>{label}</PageLabel>
        </div>
        <PageTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </PageTitle>
        <UpdatedDate>Última actualización: {updatedDate}</UpdatedDate>
      </PageHero>
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </PageWrapper>
  )
}
