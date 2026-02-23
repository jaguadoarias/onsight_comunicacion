import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const LANGUAGES = [
  { value: 'es', label: 'ES' },
  { value: 'en', label: 'EN' },
]

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.55rem 0.3rem 0.45rem;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.glass};
  transition: border-color ${({ theme }) => theme.transition.fast},
              background ${({ theme }) => theme.transition.fast};

  &:hover,
  &:focus-within {
    border-color: rgba(255, 255, 255, 0.22);
    background: ${({ theme }) => theme.colors.bgCard};
  }
`

const GlobeIcon = styled.svg`
  width: 0.9rem;
  height: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  flex-shrink: 0;
  pointer-events: none;
`

const Trigger = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1;
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
    border-radius: 2px;
  }
`

const ChevronIcon = styled.svg<{ $open: boolean }>`
  width: 0.6rem;
  height: 0.6rem;
  flex-shrink: 0;
  transition: transform ${({ theme }) => theme.transition.fast};
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
`

const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + 0.35rem);
  right: 0;
  min-width: 100%;
  margin: 0;
  padding: 0.25rem 0;
  list-style: none;
  background: ${({ theme }) => theme.colors.bgDarker};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  z-index: 100;
`

const Option = styled.li<{ $selected: boolean }>`
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ $selected, theme }) =>
    $selected ? theme.colors.primary : theme.colors.white};
  background: ${({ $selected }) =>
    $selected ? 'rgba(255, 255, 255, 0.06)' : 'transparent'};
  transition: background ${({ theme }) => theme.transition.fast},
              color ${({ theme }) => theme.transition.fast};

  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`

export default function LanguageSelector() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const current = i18n.language

  const currentLabel =
    LANGUAGES.find((l) => l.value === current)?.label ?? current.toUpperCase()

  const handleSelect = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
    setOpen(false)
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false)
      return
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      if (!open) {
        setOpen(true)
        return
      }
      const idx = LANGUAGES.findIndex((l) => l.value === current)
      const next =
        e.key === 'ArrowDown'
          ? (idx + 1) % LANGUAGES.length
          : (idx - 1 + LANGUAGES.length) % LANGUAGES.length
      handleSelect(LANGUAGES[next].value)
    }
  }

  return (
    <Wrapper ref={wrapperRef} onKeyDown={handleKeyDown}>
      <GlobeIcon
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </GlobeIcon>

      <Trigger
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Idioma seleccionado: ${currentLabel}`}
        onClick={() => setOpen((o) => !o)}
      >
        {currentLabel}
        <ChevronIcon
          $open={open}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </ChevronIcon>
      </Trigger>

      {open && (
        <Dropdown role="listbox" aria-label="Selector de idioma">
          {LANGUAGES.map((lang) => (
            <Option
              key={lang.value}
              role="option"
              aria-selected={lang.value === current}
              $selected={lang.value === current}
              tabIndex={0}
              onClick={() => handleSelect(lang.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleSelect(lang.value)
                }
              }}
            >
              {lang.label}
            </Option>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  )
}
