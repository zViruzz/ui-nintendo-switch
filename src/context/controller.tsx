import { createContext, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { type To, useNavigate } from 'react-router-dom'

export interface ControllerButtonParams {
	text: string
	route?: To | number
	action?: () => void
}


interface Props {
	children: JSX.Element | JSX.Element[]
}

interface ContextProps {
	controllerButtonA: (params: ControllerButtonParams) => void
	controllerButtonB: (params: ControllerButtonParams) => void
	buttonA: {
		text: string
		onClick: () => void
	}
	buttonB: {
		text: string
		onClick: () => void
	}
}

export const ControllerContext = createContext<ContextProps>({
	controllerButtonA: () => {},
	controllerButtonB: () => {},
	buttonA: {
		text: '',
		onClick: () => {},
	},
	buttonB: {
		text: '',
		onClick: () => {},
	},
})

export const ControllerProvider: React.FC<Props> = ({ children }) => {
	const navigate = useNavigate()
	const { t } = useTranslation()

	const [buttonA, setButtonA] = useState({
		text: '',
		onClick: () => {},
	})

	const [buttonB, setButtonB] = useState({
		text: '',
		onClick: () => {},
	})

	const controllerButtonA = ({ text, action, route }: ControllerButtonParams) => {
		setButtonA({
			text: t(text),
			onClick: () => {
				if (route !== undefined) {
					if (typeof route === 'string') {
						navigate(route) // Navegar a una ruta específica
					} else if (typeof route === 'number') {
						navigate(route) // Navegar en el historial
					}
				}
				if (action !== undefined) action()
			},
		})
	}

	const controllerButtonB = ({ text, action, route }: ControllerButtonParams) => {
		setButtonB({
			text: t(text),
			onClick: () => {
				if (route !== undefined) {
					if (typeof route === 'string') {
						navigate(route) // Navegar a una ruta específica
					} else if (typeof route === 'number') {
						navigate(route) // Navegar en el historial
					}
				}
				if (action !== undefined) action()
			},
		})
	}

	return (
		<ControllerContext.Provider
			value={{
				controllerButtonA,
				controllerButtonB,
				buttonA,
				buttonB,
			}}
		>
			{children}
		</ControllerContext.Provider>
	)
}

export const useControllerContext = (): ContextProps => useContext(ControllerContext)
