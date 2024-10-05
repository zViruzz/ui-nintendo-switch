import i18n from 'i18next'
import i18nBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

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
			escapeValue: false,
		},
		backend: {
			loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
		},
	})

export default i18n
