import type { ImageMetadata } from 'astro';

import bartolomeBay from '../assets/photos/bartolome-bay.jpg';
import bartolomeSummit from '../assets/photos/bartolome-summit.jpg';
import blueFootedBooby from '../assets/photos/blue-footed-booby.jpg';
import chimborazo from '../assets/photos/chimborazo.jpg';
import cotopaxi from '../assets/photos/cotopaxi.jpg';
import cuenca from '../assets/photos/cuenca.jpg';
import cuyabeno from '../assets/photos/cuyabeno.jpg';
import fernandinaSunset from '../assets/photos/fernandina-sunset.jpg';
import galapagosPenguin from '../assets/photos/galapagos-penguin.jpg';
import genovesaNazcaBooby from '../assets/photos/genovesa-nazca-booby.jpg';
import giantTortoise from '../assets/photos/giant-tortoise.jpg';
import isabelaLavaPool from '../assets/photos/isabela-lava-pool.jpg';
import marineIguanas from '../assets/photos/marine-iguanas.jpg';
import mindoHummingbird from '../assets/photos/mindo-hummingbird.jpg';
import montanita from '../assets/photos/montanita.jpg';
import pailonDelDiablo from '../assets/photos/pailon-del-diablo.jpg';
import quilotoa from '../assets/photos/quilotoa.jpg';
import quito from '../assets/photos/quito.jpg';
import sanCristobalPelican from '../assets/photos/san-cristobal-pelican.jpg';
import santaCruzSeabird from '../assets/photos/santa-cruz-seabird.jpg';
import seaLionUnderwater from '../assets/photos/sea-lion-underwater.jpg';
import wavedAlbatross from '../assets/photos/waved-albatross.jpg';

export type Photo = {
  src: ImageMetadata;
  alt: string;
  location: string;
  photographer: string;
  sourceUrl: string;
  licence: 'Unsplash License';
  /** CSS object-position for crops, e.g. "50% 30%" */
  focus?: string;
};

const U = 'Unsplash License' as const;

export const PHOTOS = {
  'bartolome-bay': {
    src: bartolomeBay,
    alt: 'Volcanic slopes and a turquoise bay on Bartolomé Island, with Pinnacle Rock in the distance',
    location: 'Bartolomé Island, Galápagos',
    photographer: 'Nathalie Marquis',
    sourceUrl: 'https://unsplash.com/photos/brown-and-green-mountains-beside-body-of-water-during-daytime-Tw4m2-BEY2A',
    licence: U,
  },
  'bartolome-summit': {
    src: bartolomeSummit,
    alt: 'Visitors climbing the boardwalk stairway to the summit of Bartolomé Island',
    location: 'Bartolomé Island, Galápagos',
    photographer: 'Andre Robles',
    sourceUrl: 'https://unsplash.com/photos/a-group-of-people-standing-on-top-of-a-mountain-ykLT6L_FnfQ',
    licence: U,
  },
  'blue-footed-booby': {
    src: blueFootedBooby,
    alt: 'A blue-footed booby standing on black lava rock at the ocean’s edge',
    location: 'Galápagos Islands',
    photographer: 'Sofia',
    sourceUrl: 'https://unsplash.com/photos/a-blue-footed-booby-stands-near-the-oceans-edge-DKKoTdYuIaU',
    licence: U,
  },
  chimborazo: {
    src: chimborazo,
    alt: 'Snow-capped Chimborazo volcano at dusk above a dark plain',
    location: 'Chimborazo, Ecuador',
    photographer: 'Giovanni Poveda',
    sourceUrl: 'https://unsplash.com/photos/mountain-coated-with-snow-Chlljis8Co8',
    licence: U,
  },
  cotopaxi: {
    src: cotopaxi,
    alt: 'Snow-covered Cotopaxi volcano under a partly cloudy sky',
    location: 'Volcán Cotopaxi, Ecuador',
    photographer: 'Paul Jacome',
    sourceUrl: 'https://unsplash.com/photos/a-mountain-covered-in-snow-under-a-partly-cloudy-sky-GvLG8Q-KQ6A',
    licence: U,
    focus: '50% 60%',
  },
  cuenca: {
    src: cuenca,
    alt: 'The blue domes of Cuenca’s New Cathedral rising above a square in the old centre',
    location: 'Cuenca, Ecuador',
    photographer: 'Andrei Zhaboklitskii',
    sourceUrl: 'https://unsplash.com/photos/two-police-officers-standing-in-a-square-with-blue-domed-buildings-OUxkpZbMfB8',
    licence: U,
    focus: '50% 20%',
  },
  cuyabeno: {
    src: cuyabeno,
    alt: 'A tree silhouetted in a flooded lagoon at sunset',
    location: 'Cuyabeno Wildlife Reserve, Ecuador',
    photographer: 'Simone Dinoia',
    sourceUrl: 'https://unsplash.com/photos/a-body-of-water-with-a-tree-in-the-middle-of-it-WAPHXy2irlo',
    licence: U,
  },
  'fernandina-sunset': {
    src: fernandinaSunset,
    alt: 'Last light behind the silhouette of Fernandina Island across a dark sea',
    location: 'Fernandina Island, Galápagos',
    photographer: 'Dylan Shaw',
    sourceUrl: 'https://unsplash.com/photos/a-sunset-over-the-ocean-with-a-small-island-in-the-distance-LaG7GYAKBVY',
    licence: U,
  },
  'galapagos-penguin': {
    src: galapagosPenguin,
    alt: 'A wet Galápagos penguin standing on dark volcanic rock',
    location: 'Las Tintoreras, Isabela, Galápagos',
    photographer: 'Darius Wiles',
    sourceUrl: 'https://unsplash.com/photos/a-penguin-stands-on-a-rocky-surface-T1kI3pUw5YY',
    licence: U,
    focus: '50% 35%',
  },
  'genovesa-nazca-booby': {
    src: genovesaNazcaBooby,
    alt: 'Close-up of a Nazca booby’s head, with its orange beak and yellow eye',
    location: 'Genovesa Island, Galápagos',
    photographer: 'Malcolm Thornton',
    sourceUrl: 'https://unsplash.com/photos/6cO7II4mNWg',
    licence: U,
  },
  'giant-tortoise': {
    src: giantTortoise,
    alt: 'A Galápagos giant tortoise walking across green grass in the highlands',
    location: 'Santa Rosa, Santa Cruz highlands, Galápagos',
    photographer: 'Bjarn Bronsveld',
    sourceUrl: 'https://unsplash.com/photos/a-large-tortoise-walking-across-a-lush-green-field-w3oxYPBk_ZE',
    licence: U,
    focus: '50% 60%',
  },
  'isabela-lava-pool': {
    src: isabelaLavaPool,
    alt: 'A clear pool of water ringed by black lava rock and dry scrub',
    location: 'Isabela Island, Galápagos',
    photographer: 'Bjarn Bronsveld',
    sourceUrl: 'https://unsplash.com/photos/a-body-of-water-surrounded-by-rocks-and-trees-Fw5wzlt1sjo',
    licence: U,
  },
  'marine-iguanas': {
    src: marineIguanas,
    alt: 'Marine iguanas basking together on a rock',
    location: 'Galápagos Islands',
    photographer: 'Caterina Pace',
    sourceUrl: 'https://unsplash.com/photos/close-up-photography-of-three-iguanas-on-rock-1bQZDvKscCc',
    licence: U,
  },
  'mindo-hummingbird': {
    src: mindoHummingbird,
    alt: 'A small hummingbird perched on a lichen-covered branch',
    location: 'Mindo, Ecuador',
    photographer: 'Oskar Jabłoński',
    sourceUrl: 'https://unsplash.com/photos/a-small-hummingbird-perched-on-a-lichen-covered-branch-1VuqcOEhS2I',
    licence: U,
  },
  montanita: {
    src: montanita,
    alt: 'A wide, empty beach with a wooded headland in the distance',
    location: 'Montañita, Ecuador',
    photographer: 'Adrien Delforge',
    sourceUrl: 'https://unsplash.com/photos/a-beach-with-a-hill-in-the-distance-A0Km3IHFfMQ',
    licence: U,
    focus: '50% 70%',
  },
  'pailon-del-diablo': {
    src: pailonDelDiablo,
    alt: 'The Pailón del Diablo waterfall dropping through a green gorge',
    location: 'Pailón del Diablo, Baños, Ecuador',
    photographer: 'Robinson Recalde',
    sourceUrl: 'https://unsplash.com/photos/0xigtqmaiB4',
    licence: U,
    focus: '50% 45%',
  },
  quilotoa: {
    src: quilotoa,
    alt: 'The green crater lake of Quilotoa ringed by steep, sandy slopes',
    location: 'Quilotoa, Ecuador',
    photographer: 'Omri D. Cohen',
    sourceUrl: 'https://unsplash.com/photos/MzeSloMrFTY',
    licence: U,
  },
  quito: {
    src: quito,
    alt: 'Historic Quito spread across the valley below green mountains',
    location: 'Quito, Ecuador',
    photographer: 'Alejandro Alfaro M',
    sourceUrl: 'https://unsplash.com/photos/aerial-view-of-city-during-daytime-IUwpdJVM4Fc',
    licence: U,
  },
  'san-cristobal-pelican': {
    src: sanCristobalPelican,
    alt: 'A pelican perched on a rock above a turquoise harbour with boats at anchor',
    location: 'San Cristóbal, Galápagos',
    photographer: 'Carolina Aranda',
    sourceUrl: 'https://unsplash.com/photos/a-bird-is-sitting-on-a-rock-near-the-water-qBVzgobeA08',
    licence: U,
    focus: '50% 70%',
  },
  'santa-cruz-seabird': {
    src: santaCruzSeabird,
    alt: 'A seabird flying low over turquoise water off Santa Cruz Island',
    location: 'Santa Cruz, Galápagos',
    photographer: 'Eli Prater',
    sourceUrl: 'https://unsplash.com/photos/zzzS45Cjhdw',
    licence: U,
  },
  'sea-lion-underwater': {
    src: seaLionUnderwater,
    alt: 'A Galápagos sea lion swimming just below the surface',
    location: 'Galápagos Islands',
    photographer: 'Rod Long',
    sourceUrl: 'https://unsplash.com/photos/sea-lion-underwater-Vlmb5uzGADs',
    licence: U,
    focus: '50% 70%',
  },
  'waved-albatross': {
    src: wavedAlbatross,
    alt: 'A waved albatross feeding its chick on a nest of dry grass',
    location: 'Española Island, Galápagos',
    photographer: 'AussieActive',
    sourceUrl: 'https://unsplash.com/photos/selective-focus-photo-of-brown-and-white-bird-on-brown-grass-39RHo7PCWK0',
    licence: U,
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS;
export const PHOTO_KEYS = Object.keys(PHOTOS) as [PhotoKey, ...PhotoKey[]];
