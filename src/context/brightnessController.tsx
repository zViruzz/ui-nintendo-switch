import { type ReactNode, createContext, useContext, useState } from 'react'

interface ContextProp {
	value: number
	setValue: React.Dispatch<React.SetStateAction<{ value: number }>>
}

const BrightnessControllerContext = createContext<ContextProp>({
	value: 50,
	setValue: () => {},
})

export const BrighnessControllerProvider = ({ children }: { children: ReactNode }) => {
	const [brighnessSetting, setBrighnessSetting] = useState({
		value: 50,
	})
	return (
		<BrightnessControllerContext.Provider
			value={{ value: brighnessSetting.value, setValue: setBrighnessSetting }}
		>
			{children}
		</BrightnessControllerContext.Provider>
	)
}

export const useBrighnessControllerContext = useContext(BrightnessControllerContext)
