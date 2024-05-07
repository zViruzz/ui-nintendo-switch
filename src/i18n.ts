import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const getLang = () => {
  if (localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', 'es')
    return 'es'
  }

  const lang = localStorage.getItem('lang')
  if (lang !== null) return lang
}

i18n.use(initReactI18next).init({
  lng: getLang(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: {
        'home.menu.news': 'News',
        'home.menu.eshop': 'Nintendo eShop',
        'home.menu.album': 'Album',
        'home.menu.controllers': 'Controllers',
        'home.menu.settings': 'System Settings',
        'home.menu.sleep-mode': 'Sleep Mode'
      }
    },
    es: {
      translation: {
        'home.menu.news': 'Noticias',
        'home.menu.eshop': 'Nintendo eShop',
        'home.menu.album': 'Album',
        'home.menu.controllers': 'Controles',
        'home.menu.settings': 'Configuracion de la consola',
        'home.menu.sleep-mode': 'Modo de espera'
      }
    }
  }
})
