import { createContext, type ReactNode, useContext, useState } from 'react'
import { useControllerContext } from './controller'

type Option = {
  label: string
  isOn?: boolean
}

interface ListOptions {
  isHidden: boolean
  options: Option[]
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
  activeOption: () => { },
  setListOptions: () => { },
  onToggleHidden: () => { },
  configureListOptions: () => { },
})

export const OptionsMenuProvider: React.FC<Props> = ({ children }) => {
  const [listOptions, setListOptions] = useState<ListOptions>({
    isHidden: true,
    options: [
      {
        label: 'Close',
        isOn: false,
      },
    ],
  })

  const { controllerButtonB } = useControllerContext()

  const configureOptionsList = (listOptions: ListOptions) => {
    setListOptions(listOptions)

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

  const activeOption = (index: number) => {
    setListOptions((prev) => ({
      ...prev,
      options: prev.options.map((option, i) => {
        if (i === index) {
          return { ...option, isOn: true }
        }

        return { ...option, isOn: false }
      }),
    }))
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
