import { type ReactNode, createContext, useContext, useState } from 'react'
import { useControllerContext } from './controller'

type Option = {
	label: string
	isOn?: boolean
}

interface ListOptionsConfig {
	title: string
	isHidden: boolean
	options: (string | Option)[]
	initial?: string
	onSelectOption?: (option: Option) => void
}

interface Props {
	children: ReactNode | ReactNode[]
}

interface ContextProps {
	listOptions: ListOptionsConfig
	setListOptions: (setting: ListOptionsConfig) => void
	onToggleHidden: (bol: boolean) => void
	configureListOptions: (setting: ListOptionsConfig) => void
	activeOption: (index: number) => void
}

export const OptionsMenuContext = createContext<ContextProps>({
	listOptions: {
		title: '',
		isHidden: true,
		options: ['Choose an option'],
	},
	activeOption: () => {},
	setListOptions: () => {},
	onToggleHidden: () => {},
	configureListOptions: () => {},
})

export const OptionsMenuProvider: React.FC<Props> = ({ children }) => {
	const { controllerButtonB } = useControllerContext()
	const [listOptions, setListOptions] = useState<ListOptionsConfig>({
		title: '',
		isHidden: true,
		options: ['Choose an option'],
	})

	const configureListOptions = (config: ListOptionsConfig) => {
		const options = config.options.map((opt) =>
			typeof opt === 'string' ? { label: opt, isOn: opt === config.initial } : opt,
		)

		setListOptions((prev) => ({
			...prev,
			...config,
			options,
		}))

		controllerButtonB({
			text: 'controller.buttonB.back',
			action: () => {
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
			console.log('🚀 ~ setListOptions ~ prev:', prev)
			const newOptions = prev.options.map((option, i) => {
				if (typeof option === 'string') {
					return { label: option, isOn: i === index }
				}
				return { ...option, isOn: i === index }
			})

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
				listOptions,
				activeOption,
				setListOptions,
				onToggleHidden,
				configureListOptions,
			}}
		>
			{children}
		</OptionsMenuContext.Provider>
	)
}

export const useOptionsMenuContext = (): ContextProps => useContext(OptionsMenuContext)
