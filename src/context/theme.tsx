import { createContext, type ReactNode, useContext, useState } from 'react'

interface Props {
	children: ReactNode | ReactNode[]
}

interface ContextThemeProps {
	theme: string
	setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ContextThemeProps>({
	theme: localStorage.theme || 'dark',
	setTheme: () => {},
})

export const ThemeProvider: React.FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState(localStorage.theme || 'dark')

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export const useThemeContext = (): ContextThemeProps => useContext(ThemeContext)
