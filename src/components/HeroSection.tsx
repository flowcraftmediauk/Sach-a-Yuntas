import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { IMAGES, BUSINESS_INFO } from '../data/restaurantData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onOpenReservationModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReservationModal,
}) => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28 bg-[#FAF8F5]"
    >
      {/* Subtle architectural background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F3EFEA]/80 to-transparent hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 text-xs sm:text-sm font-medium tracking-wider text-[#C85A32]"
            >
              <span className="w-8 h-[1.5px] bg-[#C85A32]" aria-hidden="true" />
              <span>COCINA PERUANA · LA PAZ</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-4xl sm:text-5xl lg:text-[64px] font-semibold text-[#181615] leading-[1.06] tracking-tight"
            >
              Sabores que cuentan una historia.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#4A4540] leading-relaxed max-w-xl"
            >
              Una experiencia gastronómica peruana donde el mar, los ingredientes
              y la creatividad se encuentran.
            </motion.p>

            {/* CTA Hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-medium text-white bg-[#C85A32] hover:bg-[#B04B25] rounded-lg transition-all duration-150 shadow-sm whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32]"
              >
                <span>Explorar menú</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenReservationModal}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-medium text-[#181615] bg-white hover:bg-[#F3EFEA] border border-[#D6CFC5] rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32]"
              >
                <Calendar className="w-4 h-4 text-[#C85A32]" />
                <span>Reservar mesa</span>
              </button>
            </motion.div>

            {/* Clean Unboxed Metadata Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pt-4 border-t border-[#E6E0D6] flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-[#5C5650]"
            >
              <span className="font-medium text-[#181615]">
                {BUSINESS_INFO.concept}
              </span>
              <span aria-hidden="true">·</span>
              <span>Mariscos, Cocina Latina y Sushi</span>
              <span aria-hidden="true">·</span>
              <span>El Bosque Boulevard, Calacoto</span>
            </motion.div>
          </div>

          {/* Right Column: Hero Food Photography & Editorial Caption */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#EAE3DA] border border-[#E6E0D6] shadow-[0_20px_50px_rgba(24,22,21,0.1)] aspect-4/3">
              <ResilientImage
                src={IMAGES.hero}
                alt="Plato de ceviche peruano y mariscos frescos sobre cerámica artesanal en Sach’a Yuntas"
                loading="eager"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"
              />
            </div>

            {/* Subtle Floating Badge: "Cocina Peruana" */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:left-6 bg-white/95 backdrop-blur-md border border-[#E6E0D6] rounded-xl px-5 py-3.5 shadow-[0_12px_30px_rgba(24,22,21,0.08)] max-w-xs"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="w-2 h-2 rounded-full bg-[#C85A32] shrink-0"
                  aria-hidden="true"
                />
                <span className="font-editorial text-lg font-semibold text-[#181615] leading-none">
                  Cocina Peruana
                </span>
              </div>
              <p className="text-xs text-[#5C5650] mt-1">
                Almuerzo, cena y bebidas en Calle 15 de Calacoto
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
