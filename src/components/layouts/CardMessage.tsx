import { type HTMLAttributes, type ReactNode } from 'react'

interface ButtonMessageType {
  label: string
  onClick: () => void
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  hiddenMessage: boolean
  children: ReactNode
  column?: boolean
  buttons: ButtonMessageType[] | ButtonMessageType
}

export default function CardMessage ({ hiddenMessage, children, buttons, column = true, ...otherProps }: Props) {
  return (
    <div className={`${hiddenMessage ? 'invisible opacity-0' : 'visible'} absolute w-screen h-screen bg-[#0c1720b1] z-40 flex justify-center items-center transition-all top-0 left-0`}
    onBlur={() => {
      console.log('out')
    }}
      {...otherProps}
    >
      <div className='bg-gray-message w-[72rem]  rounded-lg flex flex-col relative'>
        <div className='w-full h-full text-4xl px-28 pt-20'>
          {children}
        </div>
        <div className={`w-full flex ${column ? 'flex-col' : 'flex-row divide-x-2 divide-opacity-20 divide-white'} `}>
          {
            Array.isArray(buttons)
              ? buttons.map(item => (
                <button
                  className='bg-blue-hight-focus outline-wiggle-focus focus:bg-opacity-40 hover:bg-opacity-40 bg-transparent border-0 border-t-2 border-t-white border-opacity-20 text-secodary w-full h-[6.7rem] rounded-sm text-4xl active:bg-secodary/[.06] active:outline-0 transition-all duration-75'
                  key={item.label}
                  onClick={item.onClick}

                >
                  {item.label}
                </button>
              ))
              : <button
                className='bg-blue-hight-focus outline-wiggle-focus focus:bg-opacity-40 hover:bg-opacity-40 bg-transparent border-0 border-t-2 border-t-white border-opacity-20 text-secodary w-full h-[6.7rem] rounded-sm text-4xl active:bg-secodary/[.06] active:outline-0 transition-all duration-75'
                key={buttons.label}
                onClick={buttons.onClick}
              >
                {buttons.label}
              </button>
          }
        </div>
      </div>
    </div>
  )
}
