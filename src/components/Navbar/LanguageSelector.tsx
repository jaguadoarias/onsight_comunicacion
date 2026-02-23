import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  font-family: ${({ theme }) => theme.font.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: 0.08em;
`

const LangBtn = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0.4rem;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.white : theme.colors.textMuted};
  text-transform: uppercase;
  transition: color ${({ theme }) => theme.transition.fast};
  line-height: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`

const Divider = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  user-select: none;
  opacity: 0.5;
`

export default function LanguageSelector() {
  const { i18n } = useTranslation()
  const current = i18n.language

  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  return (
    <Wrapper>
      <LangBtn $active={current === 'es'} onClick={() => switchLang('es')}>
        ES
      </LangBtn>
      <Divider>|</Divider>
      <LangBtn $active={current === 'en'} onClick={() => switchLang('en')}>
        EN
      </LangBtn>
    </Wrapper>
  )
}
