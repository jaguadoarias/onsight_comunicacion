import styled from 'styled-components'

export const FooterEl = styled.footer`
  background: #000;
  border-top: 1px solid ${({ theme }) => theme.colors.glassPrimary};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg}
      ${({ theme }) => theme.spacing.md};
  }
`;

export const FooterTop = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};
`

export const FooterLogo = styled.div`
  img {
    height: 30px;
    width: auto;
  }
`

export const FooterSocials = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`

export const FooterSocial = styled.a`
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

export const FooterBottom = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding-top: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textDim};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`

export const LegalLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  a {
    color: ${({ theme }) => theme.colors.textDim};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transition.fast};

    &:hover { color: ${({ theme }) => theme.colors.primary}; }
  }
`
