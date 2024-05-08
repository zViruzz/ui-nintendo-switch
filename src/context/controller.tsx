import { createContext, useContext, useState } from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

interface ContextProps {
  controllerButtonA: (text: string, action: () => void) => void
  controllerButtonB: (text: string, action: () => void) => void
  buttonA: {
    text: string
    onClick: () => void
  }
  buttonB: {
    text: string
    onClick: () => void
  }
}

export const ControllerContext = createContext<ContextProps>({
  controllerButtonA: () => {},
  controllerButtonB: () => {},
  buttonA: {
    text: '',
    onClick: () => { }
  },
  buttonB: {
    text: '',
    onClick: () => { }
  }
})

export const ControllerProvider: React.FC<Props> = ({ children }) => {
  const [buttonA, setButtonA] = useState({
    text: '',
    onClick: () => { }
  })

  const [buttonB, setButtonB] = useState({
    text: '',
    onClick: () => { }
  })

  const controllerButtonA = (text: string, action: () => void) => {
    setButtonA({
      text,
      onClick: action
    })
  }

  const controllerButtonB = (text: string, action: () => void) => {
    setButtonB({
      text,
      onClick: action
    })
  }

  return (
    <ControllerContext.Provider value={{
      controllerButtonA,
      controllerButtonB,
      buttonA,
      buttonB
    }}
    >
      {children}
    </ControllerContext.Provider>
  )
}

export const useControllerContext = (): ContextProps => useContext(ControllerContext)
