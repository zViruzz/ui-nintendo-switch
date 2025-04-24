import { type ReactNode, createContext, useContext, useState } from 'react'
import { useControllerContext } from './controller'

type Option = {
	label: string
	isOn?: boolean
}

interface ListOptions {
	isHidden: boolean
	options: Option[]
	initial?: string
	onSelectOption?: (option: Option) => void
}

interface Props {
	children: ReactNode | ReactNode[]
}

interface ContextProps {
	listOptions: ListOptions
	setListOptions: (setting: ListOptions) => void
	onToggleHidden: (bol: boolean) => void
	configureListOptions: (setting: ListOptions) => void
	activeOption: (index: number) => void
}

export const OptionsMenuContext = createContext<ContextProps>({
	listOptions: {
		isHidden: true,
		options: [
			{
				label: 'Ok',
				isOn: false,
			},
		],
	},
	activeOption: () => {},
	setListOptions: () => {},
	onToggleHidden: () => {},
	configureListOptions: () => {},
})

export const OptionsMenuProvider: React.FC<Props> = ({ children }) => {
	const { controllerButtonB } = useControllerContext()
	const [listOptions, setListOptions] = useState<ListOptions>({
		isHidden: true,
		options: [
			{
				label: 'Close',
				isOn: false,
			},
		],
	})

	const configureOptionsList = (listOptions: ListOptions) => {
		const newListOptions = listOptions.options.map((option) => ({
			...option,
			isOn: option.label === listOptions.initial,
		}))

		setListOptions(() => {
			return {
				...listOptions,
				options: newListOptions,
			}
		})

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
		setListOptions((prev) => {
			return { ...prev, isHidden: value }
		})
	}

	const activeOption = (index: number) => {
		setListOptions((prev) => {
			const newOptions = prev.options.map((option, i) => ({
				...option,
				isOn: i === index,
			}))
			if (prev.onSelectOption) {
				prev.onSelectOption(newOptions[index])
			}
			return {
				...prev,
				options: newOptions,
			}
		})
	}

	return (
		<OptionsMenuContext.Provider
			value={{
				activeOption,
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

export const useOptionsMenuContext = (): ContextProps => useContext(OptionsMenuContext)
