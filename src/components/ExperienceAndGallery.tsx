import React from 'react';
import { motion } from 'motion/react';
import { Eye, Instagram, Calendar, Phone, Check } from 'lucide-react';
import {
  IMAGES,
  BUSINESS_INFO,
  GALLERY_ITEMS,
  GalleryItem,
} from '../data/restaurantData';
import { ResilientImage } from './ResilientImage';

interface ExperienceAndGalleryProps {
  onOpenReservationModal: () => void;
  onSelectGalleryItem: (item: GalleryItem) => void;
}

export const ExperienceAndGallery: React.FC<ExperienceAndGalleryProps> = ({
  onOpenReservationModal,
  onSelectGalleryItem,
}) => {
  const experiencePoints = [
    {
      index: '01.',
      title: 'Cocina',
      description:
        'Una carta que integra cocina peruana, cevichería, mariscos y sushi.',
    },
    {
      index: '02.',
      title: 'Servicio',
      description:
        'Atención en mesa, reservaciones y opción para llevar según tu preferencia.',
    },
    {
      index: '03.',
      title: 'Ambiente',
      description:
        'Espacio interior acogedor y mesas al aire libre en El Bosque Boulevard.',
    },
  ];

  return (
    <>
      {/* 16. RESTAURANT EXPERIENCE SECTION */}
      <section
        id="experiencia"
        className="py-16 sm:py-24 lg:py-28 bg-[#FAF8F5] border-t border-[#E6E0D6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-10 sm:mb-12">
            <div className="flex items-center gap-3 text-xs font-medium tracking-wider text-[#C85A32]">
              <span className="w-6 h-[1.5px] bg-[#C85A32]" aria-hidden="true" />
              <span>EL ESPACIO</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181615]">
              Más que una comida, una experiencia.
            </h2>
            <p className="text-base text-[#5C5650]">
              Ubicados en Calle 15 de Calacoto, El Bosque Boulevard, ofrecemos un
              entorno cálido para almuerzos, cenas y encuentros en La Paz.
            </p>
          </div>

          {/* Large Interior Photography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden border border-[#E6E0D6] bg-[#EAE3DA] aspect-16/9 mb-10 shadow-[0_18px_45px_rgba(24,22,21,0.07)]"
          >
            <ResilientImage
              src={IMAGES.interior}
              alt="Ambiente interior del restaurante Sach’a Yuntas con iluminación cálida y mesas elegantes"
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
            />
          </motion.div>

          {/* Three Small Points: Cocina, Servicio, Ambiente */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pb-12 border-b border-[#E6E0D6]">
            {experiencePoints.map((point) => (
              <div
                key={point.title}
                className="bg-white rounded-xl border border-[#E6E0D6] p-6 space-y-2"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-medium text-[#C85A32] tabular-nums">
                    {point.index}
                  </span>
                  <h3 className="font-editorial text-2xl font-semibold text-[#181615]">
                    {point.title}
                  </h3>
                </div>
                <p className="text-sm text-[#5C5650] leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Publicly Listed Restaurant Services & Features */}
          <div className="pt-10">
            <h3 className="text-xs font-medium tracking-wider text-[#5C5650] uppercase mb-5">
              Servicios y facilidades disponibles en Sach’a Yuntas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-3 gap-x-6">
              {BUSINESS_INFO.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2.5 text-sm text-[#181615]"
                >
                  <Check className="w-4 h-4 text-[#C85A32] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 17. SPECIAL PROMOTION SECTION (Non-Price Editorial Banner) */}
      <section className="py-12 sm:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden bg-[#262B25] text-white border border-[#3A4138] grid grid-cols-1 lg:grid-cols-12 shadow-[0_20px_50px_rgba(24,22,21,0.12)]">
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-3 text-xs font-medium tracking-wider text-[#E88D67]">
                <span className="w-6 h-[1.5px] bg-[#E88D67]" aria-hidden="true" />
                <span>SACH’A YUNTAS · CALACOTO</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1]">
                Descubre nuestra propuesta gastronómica.
              </h2>

              <p className="text-base sm:text-lg text-[#E2DDD5] leading-relaxed max-w-xl">
                Reserva tu mesa y disfruta de una experiencia peruana en La Paz.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenReservationModal}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-medium text-white bg-[#C85A32] hover:bg-[#B04B25] rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reservar mesa</span>
                </button>

                <a
                  href={BUSINESS_INFO.phone.tel}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-white/90 hover:text-white border border-white/20 hover:border-white/40 rounded-lg transition-colors whitespace-nowrap tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#E88D67]" />
                  <span>{BUSINESS_INFO.phone.display}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] bg-[#181615]">
              <ResilientImage
                src={IMAGES.lomoEmpanadas}
                alt="Especialidades gastronómicas de Sach’a Yuntas en La Paz"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 21. GALLERY SECTION */}
      <section
        id="galeria"
        className="py-16 sm:py-24 lg:py-28 bg-white border-t border-[#E6E0D6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-medium tracking-wider text-[#C85A32]">
                <span className="w-6 h-[1.5px] bg-[#C85A32]" aria-hidden="true" />
                <span>GALERÍA VISUAL</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181615]">
                Una mirada a Sach’a Yuntas.
              </h2>
              <p className="text-base text-[#5C5650]">
                Platos, bebidas y el ambiente que te espera en El Bosque
                Boulevard.
              </p>
            </div>
          </div>

          {/* Editorial Masonry / Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[240px] sm:auto-rows-[250px] gap-4 sm:gap-5">
            {GALLERY_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectGalleryItem(item)}
                className={`group relative rounded-xl overflow-hidden border border-[#E6E0D6] bg-[#F3EFEA] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32] ${item.spanClass}`}
              >
                <ResilientImage
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  containerClassName="w-full h-full"
                />

                {/* Dark translucent hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-5">
                  <div className="self-end w-9 h-9 rounded-lg bg-white/95 text-[#181615] flex items-center justify-center shadow-sm">
                    <Eye className="w-4 h-4 text-[#C85A32]" />
                  </div>

                  <div className="text-white space-y-1">
                    <div className="text-xs font-medium text-[#F4D3C4]">
                      {item.category} · Ver
                    </div>
                    <h3 className="font-editorial text-xl font-semibold leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 22. INSTAGRAM / SOCIAL SECTION */}
      <section
        id="redes"
        className="py-14 sm:py-16 bg-[#F3EFEA] border-t border-[#E6E0D6]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-xl bg-white border border-[#E6E0D6] flex items-center justify-center mx-auto text-[#C85A32] shadow-xs">
            <Instagram className="w-5 h-5" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#181615]">
            Síguenos.
          </h2>
          <p className="text-base text-[#5C5650] max-w-md mx-auto">
            Descubre nuestros platos y momentos en redes.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#4A4540]">
            <span>Sach’a Yuntas · El Bosque Boulevard, Calacoto</span>
            <span aria-hidden="true">·</span>
            <span>La Paz, Bolivia</span>
          </div>
        </div>
      </section>
    </>
  );
};
