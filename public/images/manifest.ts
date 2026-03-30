// Image manifest for Seattle Dojo — generated from IMG-01 curation
// Usage: import { IMAGES } from '@/public/images/manifest'
// All images served via Next.js Image component from public/images/

export const IMAGES = {
  hero: {
    src: '/images/dojo-interior-3.jpg',
    alt: 'Interior of Seattle Dojo showing the tatami mat training area',
    width: 2000,
    height: 1200,
  },
  historySection: {
    src: '/images/dojo-interior-upstairs.jpg',
    alt: 'Upstairs view of Seattle Dojo interior',
    width: 2000,
    height: 1200,
  },
  exterior: {
    src: '/images/dojo-exterior-1.jpg',
    alt: 'Exterior of Seattle Dojo building',
    width: 1500,
    height: 1001,
  },
  exteriorSign: {
    src: '/images/dojo-exterior-sign.jpg',
    alt: 'Seattle Dojo exterior sign',
    width: 1500,
    height: 1001,
  },
  exteriorEvening: {
    src: '/images/dojo-exterior-evening.jpg',
    alt: 'Seattle Dojo exterior at evening',
    width: 2000,
    height: 1241,
  },
  kidsActivities: {
    src: '/images/kids-activities.jpg',
    alt: 'Children practicing judo at Seattle Dojo',
    width: 2000,
    height: 1200,
  },
  studentsAction1: {
    src: '/images/students-action-1.jpg',
    alt: 'Seattle Dojo students practicing throwing techniques',
    width: 1500,
    height: 1000,
  },
  studentsAction2: {
    src: '/images/students-action-2.jpg',
    alt: 'Seattle Dojo students in randori practice',
    width: 1500,
    height: 1000,
  },
  alanYamada: {
    src: '/images/alan-yamada.jpg',
    alt: 'Alan Yamada, Head Instructor at Seattle Dojo',
    width: 1500,
    height: 1000,
  },
  plaque: {
    src: '/images/plaque.png',
    alt: 'Seattle Dojo commemorative plaque',
    width: 250,
    height: 250,
  },
  interior1: {
    src: '/images/dojo-interior-1.jpg',
    alt: 'Seattle Dojo training area',
    width: 960,
    height: 720,
  },
  interior2: {
    src: '/images/dojo-interior-2.jpg',
    alt: 'Seattle Dojo dojo floor',
    width: 638,
    height: 960,
  },
} as const;

export type ImageKey = keyof typeof IMAGES;
