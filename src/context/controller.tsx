import { createContext, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

type controllerButtonType = ({
	text,
	action,
	route,
}: {
	text: string
	route?: string
	action?: () => void
}) => void

interface Props {
	children: JSX.Element | JSX.Element[]
}

interface ContextProps {
	controllerButtonA: controllerButtonType
	controllerButtonB: controllerButtonType
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

	const controllerButtonA: controllerButtonType = ({
		text,
		action,
		route,
	}) => {
		setButtonA({
			text: t(text),
			onClick: () => {
				if (route !== undefined) {
					navigate(route)
				}
				if (action !== undefined) action()
			},
		})
	}

	const controllerButtonB: controllerButtonType = ({
		text,
		action,
		route,
	}) => {
		setButtonB({
			text: t(text),
			onClick: () => {
				if (route !== undefined) {
					navigate(route)
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

export const useControllerContext = (): ContextProps =>
	useContext(ControllerContext)
