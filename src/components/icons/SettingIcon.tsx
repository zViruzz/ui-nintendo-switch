import { type SVGProps } from 'react'

const SettingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
    <circle
      cx={24}
      cy={24}
      r={15}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M24 39v5M39 23h5M4 23h5M24 4v5M34.607 34.607l3.535 3.535M33.9 12.686l3.535-3.535M9.15 37.435l3.536-3.535M9.858 9.858l3.535 3.535"
    />
  </svg>
)
export default SettingIcon
