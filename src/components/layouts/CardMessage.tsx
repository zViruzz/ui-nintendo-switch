import { type ReactNode } from 'react'

interface ButtonMessageType {
  labal: string
  onClick: () => void
}

interface Props {
  children: ReactNode
  column?: boolean
  buttons: ButtonMessageType[] | ButtonMessageType
}

export default function CardMessage ({ children, buttons, column = true }: Props) {
  return (
    <div className={'absolute w-screen h-screen bg-[#0c1720b1] z-40 flex justify-center items-center transition-all top-0 left-0'}>
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
                key={item.labal}
                onClick={item.onClick}
              >
                {item.labal}
              </button>
              ))
              : <button
                className='bg-blue-hight-focus outline-wiggle-focus focus:bg-opacity-40 hover:bg-opacity-40 bg-transparent border-0 border-t-2 border-t-white border-opacity-20 text-secodary w-full h-[6.7rem] rounded-sm text-4xl active:bg-secodary/[.06] active:outline-0 transition-all duration-75'
                key={buttons.labal}
                onClick={buttons.onClick}
              >
                {buttons.labal}
              </button>
          }
        </div>
      </div>
    </div>
  )
}
