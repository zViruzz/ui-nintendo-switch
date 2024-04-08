import { type ReactNode } from 'react'

function Detailtext ({ children }: { children: ReactNode }) {
  return (
    <div className='py-3 px-6 text-[1.83rem] text-description leading-snug'>
      {children}
    </div>
  )
}

export default Detailtext
