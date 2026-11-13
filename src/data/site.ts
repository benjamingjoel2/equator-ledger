export const SITE = {
  name: 'Equator Ledger',
  url: 'https://equatorledger.tourground.com',
  tagline: 'Travel stories and practical guides for Ecuador and the Galápagos',
  description:
    'Story-led, practical travel writing for planning a trip to Ecuador and the Galápagos: the Andes, the Amazon, the coast and the islands. Published by Tourground.',
  email: 'equatorledger@tourground.com',
  locale: 'en_GB',
  publisher: {
    name: 'Tourground',
    url: 'https://tourground.com',
  },
  directoryUrl: 'https://tourground.com',
  launched: '2026-11-13',
} as const;

export type CategoryKey =
  | 'destinations'
  | 'galapagos'
  | 'wildlife'
  | 'itineraries'
  | 'food-culture'
  | 'travel-tips';

export const CATEGORIES: Record<CategoryKey, { name: string; blurb: string }> = {
  destinations: {
    name: 'Destinations',
    blurb: 'Quito, the Andes and volcanoes, Cuenca, the Amazon, the coast and the Galápagos, place by place.',
  },
  galapagos: {
    name: 'Galápagos',
    blurb: 'Cruises, land trips, seasons, park rules and the islands themselves.',
  },
  wildlife: {
    name: 'Wildlife',
    blurb: 'Where and how to see Ecuador’s animals well, and how to behave around them.',
  },
  itineraries: {
    name: 'Itineraries',
    blurb: 'Day-by-day routes that fit the mainland and the islands into one trip.',
  },
  'food-culture': {
    name: 'Food & Culture',
    blurb: 'Markets, kitchens, crafts and the cities that hold them.',
  },
  'travel-tips': {
    name: 'Travel Tips',
    blurb: 'Entry rules, health, fees, money and getting around, with official sources.',
  },
};

export type DestinationKey = 'quito' | 'andes' | 'cuenca' | 'amazon' | 'coast' | 'galapagos';

export const DESTINATIONS: Record<DestinationKey, { name: string; blurb: string }> = {
  quito: {
    name: 'Quito',
    blurb: 'The high capital, its colonial centre and the day trips around it.',
  },
  andes: {
    name: 'The Andes & volcanoes',
    blurb: 'The Avenue of the Volcanoes, Cotopaxi, Quilotoa, Baños and the highland towns.',
  },
  cuenca: {
    name: 'Cuenca',
    blurb: 'The southern Andes: Cuenca’s old centre, Cajas and the valleys around it.',
  },
  amazon: {
    name: 'The Amazon',
    blurb: 'Lodges, rivers and rainforest in Ecuador’s Oriente.',
  },
  coast: {
    name: 'The coast',
    blurb: 'Guayaquil, the Pacific beaches and the dry forest of the west.',
  },
  galapagos: {
    name: 'The Galápagos',
    blurb: 'The islands 1,000 km offshore, by boat or from a land base.',
  },
};

export const AUTHORS = {
  desk: {
    id: 'desk',
    name: 'Equator Ledger editors',
    role: 'Editorial desk, Tourground',
    bio: 'The Equator Ledger editors write and update every story on this site. We build each post from official sources (national park authorities, government travel advice and public health agencies) and from the knowledge of local operators in the Tourground directory, and we list those sources at the end of the post.',
  },
} as const;

export type AuthorKey = keyof typeof AUTHORS;

export const OPERATORS = {
  encantadas: {
    name: 'Encantadas Expeditions',
    url: 'https://encantadasexpeditions.tourground.com/',
    summary:
      'A local operator listed in the Tourground directory, planning Galápagos cruises and land-based trips together with the Andes, the cloud forest and the Amazon.',
  },
} as const;

export type OperatorKey = keyof typeof OPERATORS;
