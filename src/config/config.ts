// NOTES:
// Asset mappings are seperately stored in the assetMaps folder to reduce initial load time.
// Available languages are stored in the i18n folder.
// Be aware that when you're hosting through GitHub Pages, the env variables should be stored as Repository secrets.
// Some files cannot use the config file, and thus should be changed manually. Some examples are:
// - /.github/workflows/main.yml
// - /public/CNAME
// - /public/robots.txt
// - /public/site.webmanifest
// - /public/sitemap.xml

import { Theme } from '../types/theme';

// - /index.html
const config = {
  app: {
    baseUrl: 'https://ambervenema.nl',
    githubUrl: 'https://github.com/AmberVenema98',
    domain: 'ambervenema.nl',
  },
  owner: {
    firstName: 'Amber',
    lastName: 'Venema',
    fullName: 'Amber Venema',
    additionalName: 'AV',
    locationUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=4.520702362060548%2C52.333241186520006%2C4.747295379638673%2C52.43550196931334&amp;layer=mapnik', // URL from https://www.openstreetmap.org, you can select a location, and export it as a link
    gender: 'Female', // According to https://schema.org/GenderType
    knowsLanguage: ['English', 'Dutch'], // According to https://schema.org/Language
    nationality: 'Dutch', // According to https://schema.org/Country
    addressLocality: 'Haarlem', // According to the 'addressLocality' field of https://schema.org/PostalAddress
    addressCountry: 'NL', // According to the 'addressCountry' field of https://schema.org/PostalAddress
    knowsAbout: [
      'HTML',
      'CSS',
      'Javascript',
      'Figma',
      'GitHub',
      'Photoshop',
      'InDesign',
      'Illustrator',
      'Adobe XD',
      'Wordpress',
      'Blender',
      'Unity',
      'Miro',
      'Designing for Emerging Technology',
      'Webdesign',
      'Webdeveloping',
      'Usability Testing',
      'Prototyping',
      'Interaction Design',
    ], // According to the 'knowsAbout' field of https://schema.org/Person
  },
  email: {
    address: 'hello@ambervenema.nl',
    rateLimit: {
      maxRequests: 5,
      timeWindow: 86400000, // 24 hours
      throttle: 300000, // 5 minutes
    },
  },
  contactForm: {
    maxLengths: {
      name: 100,
      email: 100,
      message: 1000,
    },
  },
  externalLinks: {
    github: 'https://github.com/AmberVenema98',
    linkedin: 'https://www.linkedin.com/in/amber-venema-ba954b182/',
    get email() {
      return `mailto:${config.email.address}`;
    },
    location: 'https://maps.app.goo.gl/AEWwr2iiCeWyovD28',
  },
  ui: {
    theme: {
      default: 'dark' as Theme,
      respectSystemPreference: false,
      suggestDarkMode: true,
    },
    scroll: {
      behaviour: 'instant' as ScrollBehavior, // 'auto' | 'instant' | 'smooth'
    },
    toasts: {
      defaultDuration: 5000,
      errorDuration: 10000,
      loadingDuration: 30000,
    },
  },
};

export default config;
