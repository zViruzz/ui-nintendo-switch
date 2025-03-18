import { createContext, type ReactNode, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { type To, useNavigate } from 'react-router-dom'

export interface ControllerButtonParams {
  text: string
  route?: To | number
  action?: () => void
}

interface Props {
  children: ReactNode | ReactNode[]
}

interface ContextProps {
  controllerButtonA: (params: ControllerButtonParams) => void
  controllerButtonB: (params: ControllerButtonParams) => void
  controllerButtonX: (params: ControllerButtonParams) => void
  controllerButtonY: (params: ControllerButtonParams) => void
  buttonA: {
    text: string
    onClick: () => void
  }
  buttonB: {
    text: string
    onClick: () => void
  }
  buttonX: {
    text: string
    onClick: () => void
  }
  buttonY: {
    text: string
    onClick: () => void
  }
}

export const ControllerContext = createContext<ContextProps>({
  controllerButtonA: () => { },
  controllerButtonB: () => { },
  controllerButtonX: () => { },
  controllerButtonY: () => { },
  buttonA: {
    text: '',
    onClick: () => { },
  },
  buttonB: {
    text: '',
    onClick: () => { },
  },
  buttonX: {
    text: '',
    onClick: () => { },
  },
  buttonY: {
    text: '',
    onClick: () => { },
  },
})

export const ControllerProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const [buttonA, setButtonA] = useState({
    text: '',
    onClick: () => { },
  })

  const [buttonB, setButtonB] = useState({
    text: '',
    onClick: () => { },
  })

  const [buttonX, setButtonX] = useState({
    text: '',
    onClick: () => { },
  })

  const [buttonY, setButtonY] = useState({
    text: '',
    onClick: () => { },
  })

  const controllerButtonA = ({ text, action, route }: ControllerButtonParams) => {
    setButtonA({
      text: t(text),
      onClick: () => {
        if (route !== undefined) {
          if (typeof route === 'string') {
            navigate(route) // Navegar a una ruta específica
          } else if (typeof route === 'number') {
            navigate(route) // Navegar en el historial
          }
        }
        if (action !== undefined) action()
      },
    })
  }

  const controllerButtonB = ({ text, action, route }: ControllerButtonParams) => {
    setButtonB({
      text: t(text),
      onClick: () => {
        if (route !== undefined) {
          if (typeof route === 'string') {
            navigate(route) // Navegar a una ruta específica
          } else if (typeof route === 'number') {
            navigate(route) // Navegar en el historial
          }
        }
        if (action !== undefined) action()
      },
    })
  }

  const controllerButtonX = ({ text, action, route }: ControllerButtonParams) => {
    setButtonX({
      text: t(text),
      onClick: () => {
        if (route !== undefined) {
          if (typeof route === 'string') {
            navigate(route)
          } else if (typeof route === 'number') {
            navigate(route)
          }
        }
        if (action !== undefined) action()
      },
    })
  }

  const controllerButtonY = ({ text, action, route }: ControllerButtonParams) => {
    setButtonY({
      text: t(text),
      onClick: () => {
        if (route !== undefined) {
          if (typeof route === 'string') {
            navigate(route)
          } else if (typeof route === 'number') {
            navigate(route)
          }
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
        controllerButtonX,
        controllerButtonY,
        buttonA,
        buttonB,
        buttonX,
        buttonY,
      }}
    >
      {children}
    </ControllerContext.Provider>
  )
}

export const useControllerContext = (): ContextProps => useContext(ControllerContext)
