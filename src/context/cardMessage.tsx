import { type ReactNode, createContext, useContext, useState } from 'react'

type ButtonMessageType = {
	label: string
	isCloseButton?: boolean
	onClick?: () => void
}
// | { label: string; isCloseButton: true; onClick?: never } // onClick no requerido
// | { label: string; isCloseButton?: false; onClick: () => void } // onClick requerido si no es close button

interface settingInterface {
	isHidden: boolean
	children: ReactNode
	column: boolean
	buttons: ButtonMessageType | ButtonMessageType[]
}

interface Props {
	children: ReactNode | ReactNode[]
}

interface ContextProps {
	setting: settingInterface
	setSetting: (setting: settingInterface) => void
	onToggleHidden: (bol: boolean) => void
	settingMessage: (setting: settingInterface) => void
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
	settingMessage: () => {},
})

export const CardMessageProvider: React.FC<Props> = ({ children }) => {
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

	const settingMessage = (setting: settingInterface) => {
		setSetting(setting)

		setTimeout(() => {
			const section = document.querySelector('#card-message')
			if (section instanceof HTMLDivElement) section.focus()
		}, 200)
	}

	const onToggleHidden = (value: boolean) => {
		setSetting((prev) => ({
			...prev,
			isHidden: value,
		}))
	}

	return (
		<CardMessageContext.Provider
			value={{ setting, setSetting, onToggleHidden, settingMessage }}
		>
			{children}
		</CardMessageContext.Provider>
	)
}

export const useCardMessageContext = (): ContextProps => useContext(CardMessageContext)
