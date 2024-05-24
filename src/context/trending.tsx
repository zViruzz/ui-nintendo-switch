import { createContext, useContext, useState } from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

interface ContextTrendingProps {
  selectItem: {
    title: string
    label: string
    url: string
  }
  isHiddenMenu: boolean
  selectionTrending: ({ url, title, label }: { title: string, url: string, label: string }) => void
}

export const TrendingContext = createContext<ContextTrendingProps>({
  selectItem: {
    title: '',
    label: '',
    url: ''
  },
  isHiddenMenu: true,
  selectionTrending: () => {}
})

export const TrendingProvider: React.FC<Props> = ({ children }) => {
  const [selectItem, setSelectItem] = useState({
    title: '',
    label: '',
    url: ''
  })
  const [isHiddenMenu, setIsHiddenMenu] = useState(true)

  const selectionTrending = ({ url, title, label }: { title: string, url: string, label: string }) => {
    setSelectItem({
      title,
      label,
      url
    })
    setIsHiddenMenu(false)
    console.log('dsafkjsdfkj')
  }

  return (
    <TrendingContext.Provider value={{ selectionTrending, selectItem, isHiddenMenu }}
    >
      {children}
    </TrendingContext.Provider>
  )
}

export const useTrendingContext = (): ContextTrendingProps => useContext(TrendingContext)
