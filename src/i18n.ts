import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar todos los archivos JSON de traducción
import enHeader from '@/locales/en/header.json';
import esHeader from '@/locales/es/header.json';

// Configurar los recursos de idioma
// @ts-ignore
const resources = {
  en: {
    translation: {
      ...enHeader, // Expande el objeto de landing
    },
  },
  es: {
    translation: {
      ...esHeader, // Expande el objeto de landing
    },
  },
};

// Inicializar i18n
i18n
  .use(initReactI18next) // Integración con react-i18next
  .init({
    resources,
    lng: localStorage.getItem('lang') || 'en', // Idioma predeterminado basado en localStorage
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
  });

export default i18n;
