import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Phone, Info } from 'lucide-react';
import {
  POPULAR_DISHES,
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuCategory,
  DishItem,
  BUSINESS_INFO,
} from '../data/restaurantData';
import { ResilientImage } from './ResilientImage';

interface PopularAndMenuSectionProps {
  onSelectDish: (dish: DishItem) => void;
}

export const PopularAndMenuSection: React.FC<PopularAndMenuSectionProps> = ({
  onSelectDish,
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'Todos'>(
    'Ceviches'
  );

  const filteredMenu =
    activeCategory === 'Todos'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* 9. POPULAR DISHES SECTION */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-medium tracking-wider text-[#C85A32]">
                <span className="w-6 h-[1.5px] bg-[#C85A32]" aria-hidden="true" />
                <span>DE NUESTRA COCINA</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181615]">
                Favoritos de la casa
              </h2>
              <p className="text-base text-[#5C5650]">
                Descubre algunos de los sabores que definen nuestra propuesta.
              </p>
            </div>

            <a
              href="#menu"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#C85A32] hover:text-[#181615] transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <span>Ver carta por categorías</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* 4-Column Popular Dish Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {POPULAR_DISHES.map((dish, index) => (
              <motion.article
                key={dish.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => onSelectDish(dish)}
                className="group bg-white rounded-xl border border-[#E6E0D6] overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(24,22,21,0.08)] cursor-pointer"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-[#F3EFEA]">
                  <ResilientImage
                    src={dish.image}
                    alt={dish.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Clean unboxed category label */}
                    <div className="text-xs font-medium text-[#C85A32] tracking-wide">
                      {dish.categoryLabel}
                    </div>
                    <h3 className="font-editorial text-2xl font-semibold text-[#181615] group-hover:text-[#C85A32] transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-[#5C5650] leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E6E0D6]/80 flex items-center justify-between">
                    <span className="text-xs font-medium text-[#4A4540]">
                      Consultar menú
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectDish(dish);
                      }}
                      aria-label={`Ver detalles de ${dish.name}`}
                      className="w-9 h-9 rounded-lg bg-[#FAF8F5] group-hover:bg-[#C85A32] text-[#181615] group-hover:text-white border border-[#E6E0D6] group-hover:border-[#C85A32] flex items-center justify-center transition-all duration-150 cursor-pointer"
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INTERACTIVE MENU SECTION */}
      <section
        id="menu"
        className="py-16 sm:py-24 lg:py-28 bg-white border-t border-[#E6E0D6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 text-xs font-medium tracking-wider text-[#C85A32]">
              <span className="w-5 h-[1.5px] bg-[#C85A32]" aria-hidden="true" />
              <span>NUESTRA PROPUESTA</span>
              <span className="w-5 h-[1.5px] bg-[#C85A32]" aria-hidden="true" />
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181615]">
              Explora nuestro menú
            </h2>
            <p className="text-base text-[#5C5650]">
              Una selección inspirada en la cocina peruana, cevichería, mariscos,
              sushi y coctelería en La Paz.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div
            role="tablist"
            aria-label="Categorías del menú"
            className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-3 mb-10 border-b border-[#E6E0D6] no-scrollbar"
          >
            {MENU_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C85A32] ${
                    isActive
                      ? 'bg-[#C85A32] text-white shadow-xs'
                      : 'text-[#4A4540] hover:text-[#181615] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
            <button
              role="tab"
              aria-selected={activeCategory === 'Todos'}
              type="button"
              onClick={() => setActiveCategory('Todos')}
              className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C85A32] ${
                activeCategory === 'Todos'
                  ? 'bg-[#181615] text-white shadow-xs'
                  : 'text-[#4A4540] hover:text-[#181615] hover:bg-[#FAF8F5]'
              }`}
            >
              Ver todos
            </button>
          </div>

          {/* Editorial Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredMenu.map((item) => (
              <article
                key={item.id}
                onClick={() => onSelectDish(item)}
                className="group bg-[#FAF8F5] hover:bg-white rounded-xl border border-[#E6E0D6] p-4 sm:p-5 flex flex-col sm:flex-row gap-5 items-start sm:items-center transition-all duration-200 hover:shadow-[0_10px_28px_rgba(24,22,21,0.06)] cursor-pointer"
              >
                <div className="w-full sm:w-36 md:w-40 aspect-4/3 rounded-lg overflow-hidden bg-[#EAE3DA] shrink-0 border border-[#E6E0D6]">
                  <ResilientImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                </div>

                <div className="flex-1 min-w-0 space-y-2 w-full">
                  <div className="flex items-center justify-between gap-2 text-xs text-[#5C5650]">
                    <span>{item.categoryLabel}</span>
                  </div>

                  <h3 className="font-editorial text-2xl font-semibold text-[#181615] group-hover:text-[#C85A32] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-sm text-[#5C5650] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-[#E6E0D6]/80">
                    <span className="text-xs font-semibold text-[#C85A32] tracking-wide">
                      Consultar menú
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[#181615] group-hover:translate-x-0.5 transition-transform">
                      <span>Detalles</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C85A32]" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Truthful Menu Availability Note & Direct Inquiry */}
          <div className="mt-10 pt-6 border-t border-[#E6E0D6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#5C5650]">
            <div className="flex items-start sm:items-center gap-2.5">
              <Info className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5 sm:mt-0" />
              <p>
                La disponibilidad de los platos puede variar según el día. Además
                contamos con opciones vegetarianas, veganas y servicio para
                llevar.
              </p>
            </div>
            <a
              href={BUSINESS_INFO.phone.tel}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#181615] hover:text-[#C85A32] transition-colors whitespace-nowrap shrink-0 tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#C85A32]" />
              <span>Consultar carta: {BUSINESS_INFO.phone.display}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
