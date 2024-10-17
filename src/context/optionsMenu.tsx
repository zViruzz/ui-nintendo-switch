import { createContext, useContext, useState } from 'react'
import { useControllerContext } from './controller'

type Option = {
	label: string
	isOn: boolean
	onClick?: () => void
}

interface ListOptions {
	isHidden: boolean
	options: Option[]
}

interface Props {
	children: JSX.Element | JSX.Element[]
}

interface ContextProps {
	listOptions: ListOptions
	setListOptions: (setting: ListOptions) => void
	onToggleHidden: (bol: boolean) => void
	configureListOptions: (setting: ListOptions) => void
}

export const OptionsMenuContext = createContext<ContextProps>({
	listOptions: {
		isHidden: true,
		options: [
			{
				label: 'Ok',
				isOn: false,
				onClick: () => {
					console.log('Close')
				},
			},
		],
	},
	setListOptions: () => {},
	onToggleHidden: () => {},
	configureListOptions: () => {},
})

export const OptionsMenuProvider: React.FC<Props> = ({
	children,
}) => {
	const [listOptions, setListOptions] = useState<ListOptions>({
		isHidden: true,
		options: [
			{
				label: 'Close',
				isOn: false,
				onClick: () => {
					console.log('click Close')
				},
			},
		],
	})

	const { controllerButtonB } = useControllerContext()

	const configureOptionsList = (listOptions: ListOptions) => {
		setListOptions(listOptions)

		// TODO: Arreglar esto, sobre escribe la configuracion de la pagina donde se llamo
		controllerButtonB({
			text: 'controller.buttonB.back',
			action: () => {
				console.log('optionmenu B')
				onToggleHidden(true)
			},
		})

		setTimeout(() => {
			const section = document.querySelector('#card-message')
			if (section instanceof HTMLDivElement) section.focus()
		}, 200)
	}

	const onToggleHidden = (value: boolean) => {
		setListOptions((prev) => ({
			...prev,
			isHidden: value,
		}))
	}

	return (
		<OptionsMenuContext.Provider
			value={{
				listOptions,
				setListOptions,
				onToggleHidden,
				configureListOptions: configureOptionsList,
			}}
		>
			{children}
		</OptionsMenuContext.Provider>
	)
}

export const useOptionsMenuContext = (): ContextProps =>
	useContext(OptionsMenuContext)
