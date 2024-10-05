import { createContext, useContext, useState } from 'react'

interface Props {
	children: JSX.Element | JSX.Element[]
}

interface ContextTrendingProps {
	selectItem: {
		id: string
		title: string
		url: string
	}
	isHiddenMenu: boolean
	setIsHiddenMenu: (isHiddenMenu: boolean) => void
	selectionTrending: ({
		id,
		url,
		title,
	}: { id: string; title: string; url: string }) => void
}

export const TrendingContext = createContext<ContextTrendingProps>({
	selectItem: {
		id: '',
		title: '',
		url: '',
	},
	isHiddenMenu: true,
	setIsHiddenMenu: () => {},
	selectionTrending: () => {},
})

export const TrendingProvider: React.FC<Props> = ({ children }) => {
	const [selectItem, setSelectItem] = useState({
		id: '',
		title: '',
		url: '',
	})
	const [isHiddenMenu, setIsHiddenMenu] = useState(true)

	const selectionTrending = ({
		id,
		url,
		title,
	}: { id: string; title: string; url: string }) => {
		setSelectItem({
			id,
			title,
			url,
		})
		setIsHiddenMenu(false)
	}

	return (
		<TrendingContext.Provider
			value={{
				selectionTrending,
				selectItem,
				isHiddenMenu,
				setIsHiddenMenu,
			}}
		>
			{children}
		</TrendingContext.Provider>
	)
}

export const useTrendingContext = (): ContextTrendingProps =>
	useContext(TrendingContext)
