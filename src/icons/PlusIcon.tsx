import type { SVGProps } from 'react'

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <span className='bg-white rounded-full w-[43px] h-[43px] flex justify-center items-center'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='0.8em'
      height='0.8em'
      fill='none'
      viewBox='0 0 24 24'
      aria-hidden='true'
      {...props}
    >
      <path
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={3}
        d='M4 12h16m-8-8v16'
      />
    </svg>
  </span>
)
export default PlusIcon
