import { type ReactNode } from 'react'

function Detailtext ({ children }: { children: ReactNode }) {
  return (
    <div className='py-3 pl-6 text-[1.83rem] text-[#8c8c8c] leading-snug'>
      {children}
    </div>
  )
}

export default Detailtext
