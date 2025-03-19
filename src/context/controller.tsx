import { type ReactNode, createContext, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { type To, useNavigate } from 'react-router-dom'

export type ControllerButtonParams =
	| {
			text: string
			route?: To | number
			action?: () => void
	  }
	| undefined

type buttonAction = {
	text: string
	onClick: () => void
}

interface Props {
	children: ReactNode | ReactNode[]
}

interface ContextProps {
	controllerButtonA: (params: ControllerButtonParams) => void
	controllerButtonB: (params: ControllerButtonParams) => void
	controllerButtonX: (params: ControllerButtonParams) => void
	controllerButtonY: (params: ControllerButtonParams) => void
	buttonA: buttonAction
	buttonB: buttonAction
	buttonX: buttonAction
	buttonY: buttonAction
}

export const ControllerContext = createContext<ContextProps>({
	controllerButtonA: () => {},
	controllerButtonB: () => {},
	controllerButtonX: () => {},
	controllerButtonY: () => {},
	buttonA: {
		text: '',
		onClick: () => {},
	},
	buttonB: {
		text: '',
		onClick: () => {},
	},
	buttonX: {
		text: '',
		onClick: () => {},
	},
	buttonY: {
		text: '',
		onClick: () => {},
	},
})

export const ControllerProvider: React.FC<Props> = ({ children }) => {
	const navigate = useNavigate()
	const { t } = useTranslation()

	const [buttonA, setButtonA] = useState<buttonAction>({
		text: '',
		onClick: () => {},
	})

	const [buttonB, setButtonB] = useState<buttonAction>({
		text: '',
		onClick: () => {},
	})

	const [buttonX, setButtonX] = useState<buttonAction>({
		text: '',
		onClick: () => {},
	})

	const [buttonY, setButtonY] = useState<buttonAction>({
		text: '',
		onClick: () => {},
	})

	const controllerButtonA = (setting: ControllerButtonParams) => {
		if (!setting) {
			setButtonA({
				text: '',
				onClick: () => {},
			})
			return
		}
		const { text, action, route } = setting

		setButtonA({
			text: t(text),
			onClick: () => {
				if (route !== undefined) {
					if (typeof route === 'string') {
						navigate(route)
					} else if (typeof route === 'number') {
						navigate(route)
					}
				}
				if (action !== undefined) action()
			},
		})
	}

	const controllerButtonB = (setting: ControllerButtonParams) => {
		if (!setting) {
			setButtonB({
				text: '',
				onClick: () => {},
			})
			return
		}
		const { text, action, route } = setting

		setButtonB({
			text: t(text),
			onClick: () => {
				if (route !== undefined) {
					if (typeof route === 'string') {
						navigate(route)
					} else if (typeof route === 'number') {
						navigate(route)
					}
				}
				if (action !== undefined) action()
			},
		})
	}

	const controllerButtonX = (setting: ControllerButtonParams) => {
		if (!setting) {
			setButtonX({
				text: '',
				onClick: () => {},
			})
			return
		}
		const { text, action, route } = setting

		setButtonX({
			text: t(text),
			onClick: () => {
				if (route !== undefined) {
					if (typeof route === 'string') {
						navigate(route)
					} else if (typeof route === 'number') {
						navigate(route)
					}
				}
				if (action !== undefined) action()
			},
		})
	}

	const controllerButtonY = (setting: ControllerButtonParams) => {
		if (!setting) {
			setButtonY({
				text: '',
				onClick: () => {},
			})
			return
		}
		const { text, action, route } = setting

		setButtonY({
			text: t(text),
			onClick: () => {
				if (route !== undefined) {
					if (typeof route === 'string') {
						navigate(route)
					} else if (typeof route === 'number') {
						navigate(route)
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
				controllerButtonX,
				controllerButtonY,
				buttonA,
				buttonB,
				buttonX,
				buttonY,
			}}
		>
			{children}
		</ControllerContext.Provider>
	)
}

export const useControllerContext = (): ContextProps => useContext(ControllerContext)
