import type { SVGProps } from 'react'

const SettingIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='2 2 20 20'
		width='1em'
		height='1em'
		aria-hidden='true'
		{...props}
	>
		<path
			fill='#fff'
			fillRule='evenodd'
			d='M12.75 3v3.046a5.97 5.97 0 0 1 2.93 1.214l2.154-2.154 1.06 1.06-2.154 2.155a5.97 5.97 0 0 1 1.214 2.929H21v1.5h-3.046a5.971 5.971 0 0 1-1.214 2.93l2.154 2.154-1.06 1.06-2.155-2.154a5.97 5.97 0 0 1-2.929 1.214V21h-1.5v-3.046a5.97 5.97 0 0 1-2.93-1.214l-2.153 2.154-1.061-1.06 2.154-2.155a5.97 5.97 0 0 1-1.214-2.929H3v-1.5h3.046A5.97 5.97 0 0 1 7.26 8.32L5.106 6.167l1.06-1.06L8.321 7.26a5.97 5.97 0 0 1 2.929-1.214V3h1.5ZM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z'
			clipRule='evenodd'
		/>
	</svg>
)
export default SettingIcon
