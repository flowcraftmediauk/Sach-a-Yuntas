import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Fish, Wine, Sparkles, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/restaurantData';
import { ResilientImage } from './ResilientImage';

export const AboutAndFeatures: React.FC = () => {
  const aboutPillars = [
    {
      index: '01.',
      title: 'Ingredientes',
      description: 'Una propuesta centrada en sabores y productos.',
    },
    {
      index: '02.',
      title: 'Experiencia',
      description: 'Un espacio pensado para disfrutar con calma.',
    },
    {
      index: '03.',
      title: 'Sabor peruano',
      description: 'Una cocina inspirada en la tradición peruana.',
    },
  ];

  const benefitFeatures = [
    {
      icon: Utensils,
      title: 'Cocina Peruana',
      description: 'Sabores inspirados en la gastronomía del Perú.',
    },
    {
      icon: Fish,
      title: 'Mariscos',
      description:
        'Una selección donde los productos del mar tienen protagonismo.',
    },
    {
      icon: Sparkles,
      title: 'Sushi',
      description:
        'Una propuesta que también incorpora sabores y preparaciones de sushi.',
    },
    {
      icon: Wine,
      title: 'Bar',
      description: 'Bebidas y cócteles para acompañar la experiencia.',
    },
  ];

  return (
    <>
      {/* 7. INTRODUCTION / ABOUT SECTION */}
      <section
        id="nosotros"
        className="py-16 sm:py-24 lg:py-28 bg-white border-t border-[#E6E0D6]/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Large Rounded Restaurant Interior Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#E6E0D6] bg-[#F3EFEA] aspect-16/10 sm:aspect-4/3 shadow-[0_16px_40px_rgba(24,22,21,0.06)]">
                <ResilientImage
                  src={IMAGES.interior}
                  alt="Interior del restaurante Sach’a Yuntas en El Bosque Boulevard, La Paz"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-[#5C5650] px-1">
                <span>Sach’a Yuntas · El Bosque Boulevard</span>
                <span>Calle 15 de Calacoto, La Paz</span>
              </div>
            </motion.div>

            {/* Right: Editorial About Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="flex items-center gap-3 text-xs font-medium tracking-wider text-[#C85A32]">
                <span className="w-6 h-[1.5px] bg-[#C85A32]" aria-hidden="true" />
                <span>BIENVENIDOS A SACH’A YUNTAS</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181615] leading-[1.12]">
                Cocina peruana, mar y creatividad.
              </h2>

              <p className="text-base sm:text-lg text-[#4A4540] leading-relaxed">
                Descubre una propuesta gastronómica inspirada en los sabores del
                Perú, con una selección que reúne mariscos, cocina latina y
                sushi en un ambiente pensado para disfrutar.
              </p>

              {/* Three Small Feature Points */}
              <div className="pt-2 divide-y divide-[#E6E0D6] border-y border-[#E6E0D6]">
                {aboutPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
                  >
                    <div className="flex items-baseline gap-2 min-w-[160px]">
                      <span className="text-xs font-medium text-[#C85A32] tabular-nums">
                        {pillar.index}
                      </span>
                      <h3 className="font-editorial text-xl font-semibold text-[#181615]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#5C5650]">{pillar.description}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#experiencia"
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium text-white bg-[#181615] hover:bg-[#C85A32] rounded-lg transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32]"
                >
                  <span>Conócenos</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. FEATURE BENEFITS SECTION */}
      <section
        aria-label="Pilares gastronómicos"
        className="py-14 sm:py-20 bg-[#F3EFEA] border-y border-[#E6E0D6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {benefitFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col items-start space-y-3 border-l border-[#D6CFC5] pl-5"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E6E0D6] flex items-center justify-center text-[#C85A32]">
                    <IconComponent className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-editorial text-2xl font-semibold text-[#181615]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#5C5650] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
