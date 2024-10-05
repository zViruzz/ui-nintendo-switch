import type { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

function System() {
	const { i18n, t } = useTranslation()

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const lang = e.target.value
		i18n.changeLanguage(lang)
		localStorage.setItem('lang', lang)
	}

	return (
		<div>
			<select defaultValue={i18n.language} onChange={handleChange}>
				<option value='en'>EN</option>
				<option value='es'>ES</option>
			</select>

			<div>ejem: {t('home.menu.news')}</div>
		</div>
	)
}

export default System
