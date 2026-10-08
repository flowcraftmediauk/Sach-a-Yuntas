import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/restaurantData';
import { ResilientImage } from './ResilientImage';

export const CulinaryShowcases: React.FC = () => {
  const seafoodFeatures = [
    {
      index: '01.',
      title: 'Mariscos',
      text: 'Preparaciones como conchas de abanico, jalea, empanadas de mariscos y parihuela.',
    },
    {
      index: '02.',
      title: 'Pescados',
      text: 'Especialidades en trucha y filetes preparados con técnica y equilibrio de sabor.',
    },
    {
      index: '03.',
      title: 'Ceviches',
      text: 'Cortes marinados al momento con cítricos, cebolla morada, ají y hierbas frescas.',
    },
  ];

  const peruvianDishes = [
    {
      name: 'Causa',
      category: 'Entrada Peruana',
      description: 'Suave papa amarilla sazonada con ají y limón, servida en capas con palta y mariscos.',
      image: IMAGES.causa,
      alt: 'Plato de causa peruana con palta y mariscos',
    },
    {
      name: 'Lomo & Empanadas de Mariscos',
      category: 'Tradición y Sabor',
      description: 'Cortes de lomo salteados al wok y empanadas doradas rellenas de mariscos.',
      image: IMAGES.lomoEmpanadas,
      alt: 'Lomo saltado peruano acompañado de empanadas de mariscos',
    },
    {
      name: 'Jalea',
      category: 'Especialidad Marina',
      description: 'Texturas crujientes de pescado y mariscos sobre yuca dorada con salsa criolla.',
      image: IMAGES.jalea,
      alt: 'Jalea peruana de mariscos con yuca y salsa criolla',
    },
    {
      name: 'Parihuela',
      category: 'Sopa de Mariscos',
      description: 'Caldo concentrado de mariscos con el carácter aromático de la costa peruana.',
      image: IMAGES.parihuela,
      alt: 'Parihuela sopa peruana de mariscos',
    },
  ];

  const sushiCategories = [
    {
      index: '01.',
      title: 'Sushi',
      description:
        'Piezas elaboradas con cuidado por el corte y el balance de cada ingrediente.',
    },
    {
      index: '02.',
      title: 'Rolls',
      description:
        'Combinaciones frescas y contemporáneas para disfrutar en el almuerzo o la cena.',
    },
    {
      index: '03.',
      title: 'Selección del chef',
      description:
        'Opciones pensadas para compartir en mesa y descubrir diferentes texturas.',
    },
  ];

  return (
    <>
      {/* 11. CEVICHE FEATURE SECTION */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#F3EFEA] border-t border-[#E6E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 sm:mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-3 text-xs font-medium tracking-wider text-[#C85A32]">
                <span className="w-6 h-[1.5px] bg-[#C85A32]" aria-hidden="true" />
                <span>CEVICHERÍA EN LA PAZ</span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#181615] leading-[1.08]">
                El sabor del mar.
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <p className="text-base sm:text-lg text-[#4A4540] leading-relaxed">
                Una experiencia fresca, vibrante y profundamente inspirada en la
                cocina peruana.
              </p>
              <div>
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium text-white bg-[#C85A32] hover:bg-[#B04B25] rounded-lg transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32]"
                >
                  <span>Ver menú</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl overflow-hidden border border-[#DFD7CC] bg-white aspect-16/9 shadow-[0_20px_50px_rgba(24,22,21,0.08)]"
          >
            <ResilientImage
              src={IMAGES.ceviche}
              alt="Ceviche peruano fresco con pescado, cebolla morada, cilantro, camote y maíz en cerámica blanca"
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6 sm:p-10">
              <div className="max-w-xl text-white space-y-1.5">
                <div className="text-xs font-medium tracking-wider text-[#F4D3C4]">
                  CEVICHE · CÍTRICOS · FRESCURA
                </div>
                <p className="font-editorial text-2xl sm:text-3xl font-medium">
                  Pescado fresco, cítricos, cebolla morada y hierbas en su punto
                  exacto.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 12. SEAFOOD SECTION */}
      <section className="py-16 sm:py-24 lg:py-28 bg-white border-t border-[#E6E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6 order-2 lg:order-1"
            >
              <div className="flex items-center gap-3 text-xs font-medium tracking-wider text-[#C85A32]">
                <span className="w-6 h-[1.5px] bg-[#C85A32]" aria-hidden="true" />
                <span>ESPECIALIDADES MARINAS</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181615] leading-[1.1]">
                Del mar a la mesa.
              </h2>

              <p className="text-base text-[#4A4540] leading-relaxed">
                Nuestra propuesta reúne una cuidada selección de platos marinos y
                pescados, desde conchas de abanico y trucha hasta jalea y sopas
                concentradas como la parihuela.
              </p>

              <div className="pt-2 divide-y divide-[#E6E0D6] border-y border-[#E6E0D6]">
                {seafoodFeatures.map((item) => (
                  <div key={item.title} className="py-4 space-y-1">
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-xs font-medium text-[#C85A32] tabular-nums">
                        {item.index}
                      </span>
                      <h3 className="font-editorial text-xl font-semibold text-[#181615]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#5C5650] pl-6">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <div className="rounded-2xl overflow-hidden border border-[#E6E0D6] bg-[#F3EFEA] aspect-4/3 shadow-[0_16px_40px_rgba(24,22,21,0.07)]">
                <ResilientImage
                  src={IMAGES.seafood}
                  alt="Plato de mariscos con conchas de abanico y filete de trucha dorada en Sach’a Yuntas"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 13. PERUVIAN CUISINE SECTION */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#FAF8F5] border-t border-[#E6E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-12 sm:mb-14">
            <div className="flex items-center gap-3 text-xs font-medium tracking-wider text-[#C85A32]">
              <span className="w-6 h-[1.5px] bg-[#C85A32]" aria-hidden="true" />
              <span>IDENTIDAD CULINARIA</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181615]">
              Perú en cada plato.
            </h2>
            <p className="text-base sm:text-lg text-[#4A4540] leading-relaxed">
              Una propuesta que celebra sabores peruanos y los presenta en una
              experiencia contemporánea.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
            {peruvianDishes.map((dish, idx) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-white rounded-xl border border-[#E6E0D6] overflow-hidden flex flex-col"
              >
                <div className="aspect-16/10 overflow-hidden bg-[#F3EFEA]">
                  <ResilientImage
                    src={dish.image}
                    alt={dish.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <div className="text-xs font-medium text-[#C85A32]">
                    {dish.category}
                  </div>
                  <h3 className="font-editorial text-2xl font-semibold text-[#181615]">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-[#5C5650] leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. SUSHI SECTION */}
      <section className="py-16 sm:py-24 lg:py-28 bg-white border-t border-[#E6E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="rounded-2xl overflow-hidden border border-[#E6E0D6] bg-[#181615] aspect-16/9 shadow-[0_16px_40px_rgba(24,22,21,0.08)]">
                <ResilientImage
                  src={IMAGES.sushi}
                  alt="Selección de sushi y rolls en Sach’a Yuntas servidos sobre piedra natural"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="flex items-center gap-3 text-xs font-medium tracking-wider text-[#C85A32]">
                <span className="w-6 h-[1.5px] bg-[#C85A32]" aria-hidden="true" />
                <span>PROPUESTA DE SUSHI</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181615] leading-[1.1]">
                También nos gusta el sushi.
              </h2>

              <p className="text-base text-[#4A4540] leading-relaxed">
                Además de nuestra cocina peruana y cevichería, en Sach’a Yuntas
                incorporamos preparaciones de sushi para quienes buscan variedad
                y frescura en su mesa.
              </p>

              <div className="pt-2 divide-y divide-[#E6E0D6] border-y border-[#E6E0D6]">
                {sushiCategories.map((cat) => (
                  <div key={cat.title} className="py-4 space-y-1">
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-xs font-medium text-[#C85A32] tabular-nums">
                        {cat.index}
                      </span>
                      <h3 className="font-editorial text-xl font-semibold text-[#181615]">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#5C5650] pl-6">
                      {cat.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 15. DRINKS / BAR SECTION */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#181615] text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-medium tracking-wider text-[#E07A53]">
                <span className="w-6 h-[1.5px] bg-[#E07A53]" aria-hidden="true" />
                <span>BAR COMPLETO & BEBIDAS</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
                Brinda con nosotros.
              </h2>
              <p className="text-base text-[#D5CEC4] tracking-wide">
                Desde un clásico Pisco Sour o una refrescante Chicha Morada
                hasta cócteles y bebidas para acompañar tu almuerzo o cena.
              </p>
            </div>

            <a
              href="#menu"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#E07A53] hover:text-white transition-colors whitespace-nowrap"
            >
              <span>Explorar bebidas en el menú</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Pisco Sour Showcase */}
            <div className="lg:col-span-6 bg-[#221F1D] rounded-2xl border border-white/10 overflow-hidden flex flex-col">
              <div className="aspect-4/3 overflow-hidden bg-[#181615]">
                <ResilientImage
                  src={IMAGES.piscoSour}
                  alt="Copa de Pisco Sour clásico en la barra de Sach’a Yuntas"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  containerClassName="w-full h-full"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-2.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-medium text-[#E07A53] tracking-wider">
                    COCTELERÍA & BAR COMPLETO
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-white">
                    Pisco Sour & Cócteles
                  </h3>
                  <p className="text-sm sm:text-base text-[#D5CEC4] leading-relaxed">
                    El emblemático Pisco Sour peruano y una propuesta de bar
                    completo pensada para iniciar la velada o acompañar cada
                    plato.
                  </p>
                </div>
              </div>
            </div>

            {/* Chicha Morada Showcase */}
            <div className="lg:col-span-6 bg-[#221F1D] rounded-2xl border border-white/10 overflow-hidden flex flex-col">
              <div className="aspect-4/3 overflow-hidden bg-[#181615]">
                <ResilientImage
                  src={IMAGES.chichaMorada}
                  alt="Vaso de Chicha Morada tradicional peruana con limón y canela"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  containerClassName="w-full h-full"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-2.5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-medium text-[#E07A53] tracking-wider">
                    TRADICIÓN PERUANA
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-white">
                    Chicha Morada & Bebidas
                  </h3>
                  <p className="text-sm sm:text-base text-[#D5CEC4] leading-relaxed">
                    El sabor tradicional del maíz morado con notas cítricas y
                    aromáticas, ideal para disfrutar junto a nuestros ceviches y
                    mariscos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
