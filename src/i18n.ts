import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import i18nBackend from 'i18next-http-backend'

const getLang = () => {
  if (localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', 'es')
    return 'es'
  }

  const lang = localStorage.getItem('lang')
  if (lang !== null) return lang
}

const getCurrentHost =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:5173'
    : import.meta.env.VITE_HOST_URL

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    lng: getLang(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: `${getCurrentHost}/i18n/{{lng}}.json`
    }
    // resources: {
    //   en: {
    //     translation: {
    //       'home.menu.news': 'News',
    //       'home.menu.eshop': 'Nintendo eShop',
    //       'home.menu.album': 'Album',
    //       'home.menu.controllers': 'Controllers',
    //       'home.menu.settings': 'System Settings',
    //       'home.menu.sleep-mode': 'Sleep Mode',

    //       'controller.buttonA.ok': 'Ok',
    //       'controller.buttonB.back': 'Back'
    //     }
    //   },
    //   es: {
    //     translation: {
    //       'home.menu.news': 'Noticias',
    //       'home.menu.eshop': 'Nintendo eShop',
    //       'home.menu.album': 'Album',
    //       'home.menu.controllers': 'Controles',
    //       'home.menu.settings': 'Configuracion de la consola',
    //       'home.menu.sleep-mode': 'Modo de espera',

    //       'controller.buttonA.ok': 'Aceptar',
    //       'controller.buttonB.back': 'Atrás'
    //     }
    //   }
    // }
  })

export default i18n
