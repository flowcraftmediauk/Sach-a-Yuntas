export const IMAGES = {
  hero: '/src/assets/images/hero_seafood_platter_1791485050240.jpg',
  ceviche: '/src/assets/images/ceviche_peruano_fresco_1791485064299.jpg',
  seafood: '/src/assets/images/mariscos_trucha_conchas_1791485075111.jpg',
  causa: '/src/assets/images/causa_peruana_gourmet_1791485085787.jpg',
  jalea: '/src/assets/images/jalea_mariscos_crujiente_1791485095451.jpg',
  parihuela: '/src/assets/images/parihuela_sopa_mariscos_1791485105455.jpg',
  sushi: '/src/assets/images/sushi_nikkei_seleccion_1791485115449.jpg',
  piscoSour: '/src/assets/images/pisco_sour_clasico_1791485127057.jpg',
  chichaMorada: '/src/assets/images/chicha_morada_artesanal_1791485136931.jpg',
  interior: '/src/assets/images/restaurante_interior_calido_1791485148697.jpg',
  dessert: '/src/assets/images/postre_peruano_artesanal_1791485158745.jpg',
  lomoEmpanadas: '/src/assets/images/lomo_empanadas_mariscos_1791485171500.jpg',
} as const;

export const BUSINESS_INFO = {
  name: 'Sach’a Yuntas',
  concept: 'Cevichería / Bar',
  cuisines: ['Cocina Peruana', 'Latina', 'Mariscos', 'Sushi'],
  mealTypes: ['Almuerzo', 'Cena', 'Bebidas'],
  address: {
    street: 'Calle 15 de Calacoto, El Bosque Boulevard',
    city: 'La Paz, Bolivia',
    full: 'Calle 15 de Calacoto, El Bosque Boulevard, La Paz, Bolivia',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Sach%27a+Yuntas+Calle+15+de+Calacoto+El+Bosque+Boulevard+La+Paz+Bolivia',
  },
  phone: {
    display: '+591 77748201',
    tel: 'tel:+59177748201',
    whatsapp:
      'https://wa.me/59177748201?text=Hola%20Sach%E2%80%99a%20Yuntas%2C%20quisiera%20consultar%20sobre%20una%20reserva%20de%20mesa.',
  },
  features: [
    'Reservaciones',
    'Servicio de mesa',
    'Para llevar',
    'Bar completo',
    'Tarjetas de crédito',
    'Opciones vegetarianas',
    'Opciones veganas',
    'Accesibilidad para sillas de ruedas',
    'Mesas al aire libre',
    'Estacionamiento',
  ],
} as const;

export interface OpeningHourDay {
  day: string;
  lunch: string;
  dinner: string | null;
}

export const OPENING_HOURS: OpeningHourDay[] = [
  {
    day: 'Domingo',
    lunch: '12:00 – 16:00',
    dinner: null,
  },
  {
    day: 'Lunes',
    lunch: '12:00 – 16:00',
    dinner: '18:30 – 22:30',
  },
  {
    day: 'Martes',
    lunch: '12:00 – 16:00',
    dinner: '18:30 – 22:30',
  },
  {
    day: 'Miércoles',
    lunch: '12:00 – 16:00',
    dinner: '18:30 – 22:30',
  },
  {
    day: 'Jueves',
    lunch: '12:00 – 16:00',
    dinner: '18:30 – 22:30',
  },
  {
    day: 'Viernes',
    lunch: '12:00 – 16:00',
    dinner: '18:30 – 22:30',
  },
  {
    day: 'Sábado',
    lunch: '12:00 – 16:00',
    dinner: '18:30 – 22:30',
  },
];

export type MenuCategory =
  | 'Ceviches'
  | 'Mariscos'
  | 'Cocina Peruana'
  | 'Sushi'
  | 'Platos Principales'
  | 'Postres'
  | 'Bebidas';

export const MENU_CATEGORIES: MenuCategory[] = [
  'Ceviches',
  'Mariscos',
  'Cocina Peruana',
  'Sushi',
  'Platos Principales',
  'Postres',
  'Bebidas',
];

export interface DishItem {
  id: string;
  name: string;
  category: MenuCategory;
  categoryLabel: string;
  description: string;
  details: string;
  image: string;
  alt: string;
  isPopular?: boolean;
}

export const POPULAR_DISHES: DishItem[] = [
  {
    id: 'pop-ceviche',
    name: 'Ceviche',
    category: 'Ceviches',
    categoryLabel: 'Cevichería Peruana',
    description:
      'Cortes de pescado fresco marinados al momento en cítricos, acompañados de cebolla morada, cilantro y guarniciones peruanas.',
    details:
      'Una de las preparaciones insignia de nuestra propuesta de cevichería en El Bosque Boulevard. Consultar variedades del día en sala.',
    image: IMAGES.ceviche,
    alt: 'Plato de ceviche peruano fresco con pescado, cebolla morada, camote y choclo en cerámica blanca',
    isPopular: true,
  },
  {
    id: 'pop-causa',
    name: 'Causa',
    category: 'Cocina Peruana',
    categoryLabel: 'Clásico Peruano',
    description:
      'Suave terrina de papa amarilla sazonada con ají y limón, servida en capas con palta y selección de mariscos.',
    details:
      'Entrada fría tradicional de la gastronomía peruana presentada con un enfoque contemporáneo. Consultar opciones disponibles en carta.',
    image: IMAGES.causa,
    alt: 'Causa peruana gourmet servida con capas de papa amarilla, palta y mariscos en plato blanco',
    isPopular: true,
  },
  {
    id: 'pop-jalea',
    name: 'Jalea',
    category: 'Mariscos',
    categoryLabel: 'Del Mar',
    description:
      'Selección de mariscos y pescado en textura crujiente sobre yuca dorada, coronada con salsa criolla fresca y limón.',
    details:
      'Ideal para compartir en mesa o disfrutar como plato fuerte de mariscos. Disponibilidad sujeta a la carta del día.',
    image: IMAGES.jalea,
    alt: 'Jalea de mariscos crujiente con calamares, langostinos, yuca dorada y salsa criolla',
    isPopular: true,
  },
  {
    id: 'pop-parihuela',
    name: 'Parihuela',
    category: 'Mariscos',
    categoryLabel: 'Sopa de Mariscos',
    description:
      'Concentrado y aromático caldo peruano de mariscos y pescado, preparado con especias tradicionales y hierbas frescas.',
    details:
      'Sopa marina reconfortante y profunda en sabor, inspirada en la tradición costera del Perú.',
    image: IMAGES.parihuela,
    alt: 'Parihuela peruana sopa de mariscos con langostinos y mejillones en tazón artesanal',
    isPopular: true,
  },
];

export const MENU_ITEMS: DishItem[] = [
  // Ceviches
  {
    id: 'menu-ceviche-clasico',
    name: 'Ceviche de Pescado',
    category: 'Ceviches',
    categoryLabel: 'Ceviches · Almuerzo y Cena',
    description:
      'Cubos de pescado fresco marinados en jugo de limón, ají, cebolla morada en pluma y cilantro fresco.',
    details:
      'Preparado al momento respetando el equilibrio de acidez y frescura propio de la cevichería peruana. Consultar variantes en el restaurante.',
    image: IMAGES.ceviche,
    alt: 'Ceviche peruano de pescado en plato hondo de cerámica blanca',
  },
  {
    id: 'menu-ceviche-mariscos',
    name: 'Ceviche de la Casa & Mariscos',
    category: 'Ceviches',
    categoryLabel: 'Ceviches · Especialidad',
    description:
      'Combinación marina con leche de tigre, maíz tostado, camote glaseado y toques cítricos.',
    details:
      'Propuesta de cevichería con productos del mar seleccionados. Consultar disponibilidad diaria en sala.',
    image: IMAGES.hero,
    alt: 'Ceviche de autor servido con leche de tigre y maíz cancha en plato artesanal',
  },

  // Mariscos
  {
    id: 'menu-conchas-trucha',
    name: 'Conchas de Abanico & Trucha',
    category: 'Mariscos',
    categoryLabel: 'Mariscos y Pescados',
    description:
      'Preparaciones de conchas (scallops) y trucha con mantequilla cítrica, hierbas aromáticas y guarniciones.',
    details:
      'Platos donde los productos del mar y de agua dulce tienen protagonismo. Consultar preparaciones disponibles del día.',
    image: IMAGES.seafood,
    alt: 'Conchas de abanico selladas y filete de trucha con hierbas y limón asado',
  },
  {
    id: 'menu-jalea-mariscos',
    name: 'Jalea de Mariscos',
    category: 'Mariscos',
    categoryLabel: 'Mariscos · Para Compartir o Individual',
    description:
      'Chicharrón crujiente de pescado y mariscos acompañado de bastones de yuca dorada y zarza criolla.',
    details:
      'Texturas doradas y frescura cítrica en cada bocado. Consultar porciones y acompañamientos en el menú.',
    image: IMAGES.jalea,
    alt: 'Jalea de mariscos servida con yuca frita y salsa criolla peruana',
  },
  {
    id: 'menu-parihuela-mariscos',
    name: 'Parihuela / Sopa de Mariscos',
    category: 'Mariscos',
    categoryLabel: 'Sopas Marinas',
    description:
      'Sopa concentrada de mariscos y pescado en reducción de ajíes peruanos, hierbas y toque de limón.',
    details:
      'Una especialidad cálida y reconfortante dentro de nuestra carta marina.',
    image: IMAGES.parihuela,
    alt: 'Sopa parihuela peruana con mariscos en tazón de cerámica',
  },
  {
    id: 'menu-empanadas-mariscos',
    name: 'Empanadas de Mariscos',
    category: 'Mariscos',
    categoryLabel: 'Entradas del Mar',
    description:
      'Empanadas artesanales rellenas de una jugosa preparación de mariscos, acompañadas de salsa de la casa y limón.',
    details:
      'Ideales para abrir el apetito o acompañar con un cóctel de nuestro bar.',
    image: IMAGES.lomoEmpanadas,
    alt: 'Empanadas de mariscos doradas servidas junto a lomo saltado en mesa de madera',
  },

  // Cocina Peruana
  {
    id: 'menu-causa',
    name: 'Causa Peruana',
    category: 'Cocina Peruana',
    categoryLabel: 'Entradas Tradicionales',
    description:
      'Masa suave de papa amarilla condimentada con limón y ají amarillo, rellena con palta y mariscos.',
    details:
      'Un ícono de la gastronomía peruana frío y delicado. Consultar variedades disponibles.',
    image: IMAGES.causa,
    alt: 'Causa limeña gourmet con mariscos y palta',
  },
  {
    id: 'menu-lomo',
    name: 'Lomo Peruano',
    category: 'Cocina Peruana',
    categoryLabel: 'Clásicos de Fondo',
    description:
      'Cortes de lomo salteados al wok a fuego vivo con cebolla morada, tomate, cilantro y guarniciones clásicas.',
    details:
      'Tradición peruana de sabores intensos y jugosos. Consultar opciones en carta.',
    image: IMAGES.lomoEmpanadas,
    alt: 'Plato de lomo saltado peruano con tomates, cebolla morada y cilantro',
  },

  // Sushi
  {
    id: 'menu-sushi-seleccion',
    name: 'Selección de Sushi & Rolls',
    category: 'Sushi',
    categoryLabel: 'Sushi · Propuesta Nikkei',
    description:
      'Piezas de sushi, rolls y selección del chef que integran técnica japonesa y acentos de sabor peruano.',
    details:
      'Disponemos de alternativas de sushi, rolls y selección del chef para almuerzo y cena. Consultar variedades en sala.',
    image: IMAGES.sushi,
    alt: 'Selección de sushi y rolls con acentos peruanos servidos sobre piedra natural',
  },

  // Platos Principales
  {
    id: 'menu-trucha',
    name: 'Especialidades en Trucha y Pescados',
    category: 'Platos Principales',
    categoryLabel: 'Platos Principales · Mar y Tierra',
    description:
      'Filetes de trucha y pescados preparados a la plancha o con salsas de nuestra cocina, acompañados de guarnición.',
    details:
      'Además de mariscos y trucha, nuestra carta contempla alternativas de lomo, lasaña y opciones vegetarianas y veganas.',
    image: IMAGES.seafood,
    alt: 'Filete de trucha dorada con conchas de abanico y guarnición',
  },
  {
    id: 'menu-lomo-lasagna',
    name: 'Lomo, Lasaña & Opciones de Cocina',
    category: 'Platos Principales',
    categoryLabel: 'Platos Principales · Variedad',
    description:
      'Propuestas calientes que incluyen preparaciones de lomo, lasaña y alternativas vegetarianas o veganas.',
    details:
      'Una carta pensada para que cada comensal encuentre su plato ideal en almuerzo o cena.',
    image: IMAGES.lomoEmpanadas,
    alt: 'Platos principales de lomo y especialidades de la casa en Sach’a Yuntas',
  },

  // Postres
  {
    id: 'menu-postres',
    name: 'Postres de la Casa',
    category: 'Postres',
    categoryLabel: 'Dulce Final',
    description:
      'Selección de postres de inspiración peruana y contemporánea para cerrar la experiencia con dulzura.',
    details:
      'Consultar con nuestro equipo las opciones de postres disponibles del día.',
    image: IMAGES.dessert,
    alt: 'Postre peruano artesanal con merengue tostado y frutos andinos en plato de cerámica',
  },

  // Bebidas
  {
    id: 'menu-pisco-sour',
    name: 'Pisco Sour & Cócteles de Bar',
    category: 'Bebidas',
    categoryLabel: 'Bar Completo · Coctelería',
    description:
      'Clásico Pisco Sour peruano preparado con pisco, jugo de limón fresco, jarabe, espuma sedosa y amargo de angostura.',
    details:
      'Contamos con bar completo y una selección de bebidas y cócteles para acompañar el almuerzo o la cena.',
    image: IMAGES.piscoSour,
    alt: 'Copa de Pisco Sour peruano con espuma blanca y gotas de amargo en la barra',
  },
  {
    id: 'menu-chicha-morada',
    name: 'Chicha Morada & Bebidas Sin Alcohol',
    category: 'Bebidas',
    categoryLabel: 'Bebidas Tradicionales',
    description:
      'Refrescante chicha morada tradicional elaborada con maíz morado, especias aromáticas y toque cítrico de limón.',
    details:
      'Ideal para acompañar ceviches, mariscos y platos principales.',
    image: IMAGES.chichaMorada,
    alt: 'Vaso alto de chicha morada peruana con hielo, rodaja de limón, canela y menta',
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  image: string;
  alt: string;
  spanClass: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Ambiente en El Bosque Boulevard',
    category: 'Interior',
    caption: 'Un espacio cálido y contemporáneo pensado para disfrutar con calma en Calacoto.',
    image: IMAGES.interior,
    alt: 'Interior del restaurante Sach’a Yuntas con mesas de madera, plantas e iluminación cálida',
    spanClass: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'gal-2',
    title: 'Ceviche Peruano',
    category: 'Cevichería',
    caption: 'El sabor del mar con ingredientes frescos, cítricos y cebolla morada.',
    image: IMAGES.ceviche,
    alt: 'Ceviche peruano fresco servido en plato hondo artesanal',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-3',
    title: 'Pisco Sour en Barra',
    category: 'Bar Completo',
    caption: 'Coctelería peruana y bebidas para brindar en buena compañía.',
    image: IMAGES.piscoSour,
    alt: 'Pisco Sour clásico servido en copa de cristal en la barra del restaurante',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-4',
    title: 'Propuesta de Sushi',
    category: 'Sushi',
    caption: 'Sabores y preparaciones de sushi y rolls dentro de nuestra carta.',
    image: IMAGES.sushi,
    alt: 'Selección de sushi y rolls en plato de piedra',
    spanClass: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 'gal-5',
    title: 'Causa de Mariscos',
    category: 'Cocina Peruana',
    caption: 'Tradición peruana presentada con estética contemporánea.',
    image: IMAGES.causa,
    alt: 'Causa peruana con mariscos y palta',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-6',
    title: 'Trucha & Conchas de Abanico',
    category: 'Mariscos',
    caption: 'Del mar a la mesa: pescados, conchas y mariscos.',
    image: IMAGES.seafood,
    alt: 'Conchas de abanico y filete de trucha con hierbas',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-7',
    title: 'Parihuela Marina',
    category: 'Especialidades',
    caption: 'Caldo concentrado de mariscos lleno de aroma y carácter peruano.',
    image: IMAGES.parihuela,
    alt: 'Sopa parihuela de mariscos humeante en mesa de restaurante',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-8',
    title: 'Postres & Chicha Morada',
    category: 'Dulces y Bebidas',
    caption: 'Postres artesanales para culminar tu visita a Sach’a Yuntas.',
    image: IMAGES.dessert,
    alt: 'Postre peruano con merengue y bayas frescas',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
];
