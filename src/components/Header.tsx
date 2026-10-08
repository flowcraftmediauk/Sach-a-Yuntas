import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface HeaderProps {
  onOpenReservationModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Menú', href: '#menu' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Top Information Bar (scrolls away cleanly so sticky header stays minimal) */}
      <div className="hidden lg:block bg-[#181615] text-[#EAE3DA] text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={BUSINESS_INFO.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>
                {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}
              </span>
            </a>
            <span aria-hidden="true" className="text-white/25">
              ·
            </span>
            <div className="flex items-center gap-1.5 text-[#D5CEC4] tabular-nums">
              <Clock className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>
                Lun–Sáb 12:00–16:00 y 18:30–22:30 · Dom 12:00–16:00
              </span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={BUSINESS_INFO.phone.tel}
              className="flex items-center gap-1.5 hover:text-white transition-colors tabular-nums font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>{BUSINESS_INFO.phone.display}</span>
            </a>
            <span aria-hidden="true" className="text-white/25">
              ·
            </span>
            <a
              href="#redes"
              aria-label="Síguenos en Instagram y redes"
              className="flex items-center gap-1.5 hover:text-[#C85A32] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Redes</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header: Strict 3-Zone Contract */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(24,22,21,0.06)] py-3 border-b border-[#E6E0D6]'
            : 'bg-[#FAF8F5]/95 backdrop-blur-sm py-4 border-b border-[#E6E0D6]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#inicio"
            className="font-editorial text-2xl sm:text-[28px] font-semibold tracking-tight text-[#181615] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C85A32]"
          >
            {BUSINESS_INFO.name}
          </a>

          {/* Zone 2: Clean navigation links */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#4A4540]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#181615] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C85A32] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C85A32]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenReservationModal}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#C85A32] hover:bg-[#B04B25] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32]"
            >
              Reservar mesa
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#181615] hover:bg-[#EAE3DA]/60 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C85A32]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#E6E0D6] px-4 pt-3 pb-6 shadow-lg">
            <nav aria-label="Menú móvil" className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-3 py-3 text-base font-medium text-[#181615] hover:bg-[#FAF8F5] hover:text-[#C85A32] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-[#E6E0D6] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservationModal();
                }}
                className="w-full py-3 px-4 text-center text-sm font-medium text-white bg-[#C85A32] hover:bg-[#B04B25] rounded-lg transition-colors cursor-pointer"
              >
                Reservar mesa
              </button>

              <div className="pt-2 flex flex-col gap-2 text-xs text-[#5C5650]">
                <a
                  href={BUSINESS_INFO.phone.tel}
                  className="flex items-center gap-2 py-1 text-[#181615] font-medium tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#C85A32]" />
                  <span>{BUSINESS_INFO.phone.display}</span>
                </a>
                <a
                  href={BUSINESS_INFO.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-1"
                >
                  <MapPin className="w-4 h-4 text-[#C85A32] shrink-0" />
                  <span>{BUSINESS_INFO.address.full}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
