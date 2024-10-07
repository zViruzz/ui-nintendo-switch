import {
	type ReactNode,
	createContext,
	useContext,
	useState,
} from 'react'

interface ButtonMessageType {
	label: string
	onClick: () => void
}

interface settingInterface {
	isHidden: boolean
	children: ReactNode
	column: boolean
	buttons: ButtonMessageType[] | ButtonMessageType
}

interface Props {
	children: JSX.Element | JSX.Element[]
}

interface ContextProps {
	setting: settingInterface
	setSetting: (setting: settingInterface) => void
	onToggleHidden: (bol: boolean) => void
}

export const CardMessageContext = createContext<ContextProps>({
	setting: {
		isHidden: true,
		column: true,
		children: <div>Not</div>,
		buttons: [
			{
				label: 'Ok',
				onClick: () => {
					console.log('Close')
				},
			},
		],
	},
	setSetting: () => {},
	onToggleHidden: () => {},
})

export const CardMessageProvider: React.FC<Props> = ({
	children,
}) => {
	const [setting, setSetting] = useState<settingInterface>({
		isHidden: true,
		column: true,
		children: <div>Card Message</div>,
		buttons: [
			{
				label: 'Close',
				onClick: () => {
					console.log('click Close')
				},
			},
		],
	})

	const onToggleHidden = (value: boolean) => {
		setSetting((prev) => ({
			...prev,
			isHidden: value,
		}))
	}

	return (
		<CardMessageContext.Provider
			value={{ setting, setSetting, onToggleHidden }}
		>
			{children}
		</CardMessageContext.Provider>
	)
}

export const useCardMessageContext = (): ContextProps =>
	useContext(CardMessageContext)
