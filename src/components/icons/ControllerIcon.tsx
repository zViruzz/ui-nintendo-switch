import { type SVGProps } from 'react'

const ControllerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    transform="rotate(45)"
    viewBox="10 0 48 48"
    {...props}
     >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      {/* <path d="M6 12C6 7.58172 9.58172 4 14 4H19C20.1046 4 21 4.89543 21 6V40C21 41.1046 20.1046 42 19 42H14C9.58172 42 6 38.4183 6 34V12Z" stroke="#ffffff" strokeWidth="4"></path> */}
      <path d="M42 14C42 9.58172 38.4183 6 34 6H28C26.8954 6 26 6.89543 26 8V42C26 43.1046 26.8954 44 28 44H34C38.4183 44 42 40.4183 42 36V14Z" stroke="currentColor" strokeWidth="3.5"></path>
      {/* <rect x="11" y="30" width="5" height="5" rx="2.5" fill="#ffffff"></rect> */}
      <rect x="31.5" y="14" width="5.5" height="5.5" rx="2.5" fill="#ffffff"></rect>
      {/* <path d="M15 17H12" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> */}
      <path d="M34 28V34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M31 31L37 31" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
    </g>
  </svg>
)
export default ControllerIcon
