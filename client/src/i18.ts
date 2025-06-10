import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import langENG from './lang/en.json';
import langUZ from './lang/uz.json';
import langRU from './lang/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: langENG },
    uz: { translation: langUZ },
    ru: { translation: langRU },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
