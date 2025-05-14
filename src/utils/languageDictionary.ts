export const getLanguageName = (code: string): string => {
	return (
		{
			English: 'en',
			Spanish: 'es',
		}[code] || code
	)
}

export const getLanguageCode = (code: string): string => {
	return (
		{
			en: 'English',
			es: 'Spanish',
		}[code] || code
	)
}
