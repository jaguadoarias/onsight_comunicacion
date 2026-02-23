import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import {
  Nav,
  ProgressLine,
  Logo,
  NavLinks,
  NavLink,
  ContactBtn,
  HamburgerBtn,
  HamburgerLine,
  MobileMenu,
  MobileNavLink,
} from "./Navbar.styles";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proyectos", href: "#portfolio" },
];

const mobileMenuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const mobileItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const { progress, scrolled } = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const el = document.documentElement;
    if (menuOpen) {
      el.style.overflow = "hidden";
    } else {
      el.style.overflow = "";
    }
    return () => {
      el.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (isHome) {
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <>
      <Nav $scrolled={scrolled} $menuOpen={menuOpen}>
        <Logo
          href="#inicio"
          $menuOpen={menuOpen}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#inicio");
          }}>
          <img src="/images/logo.svg" alt="Logotipo Onsight Comunicación" />
        </Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}>
              {item.label}
            </NavLink>
          ))}
          <ContactBtn
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contacto");
            }}>
            <FaPaperPlane size={13} />
            Contacto
          </ContactBtn>
        </NavLinks>

        <HamburgerBtn
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu">
          <HamburgerLine $open={menuOpen} $index={0} />
          <HamburgerLine $open={menuOpen} $index={1} />
          <HamburgerLine $open={menuOpen} $index={2} />
        </HamburgerBtn>

        <ProgressLine $progress={progress} $menuOpen={menuOpen} />
      </Nav>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <motion.div
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
              initial="hidden"
              animate="visible"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
              }}>
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.href}
                  href={item.href}
                  variants={mobileItemVariants}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}>
                  {item.label}
                </MobileNavLink>
              ))}
              <MobileNavLink
                href="#contacto"
                variants={mobileItemVariants}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contacto");
                }}
                style={{
                  color: "var(--primary, #DB2D2D)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                <FaPaperPlane size={24} />
                Contacto
              </MobileNavLink>
            </motion.div>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}
