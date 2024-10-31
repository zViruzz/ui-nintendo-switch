import type { SVGProps } from 'react'

const ReceiveMailIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 48 48'
		width='1em'
		height='1em'
		aria-hidden='true'
		{...props}
	>
		<g stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth={4}>
			<path d='M36 15h8v26H4V15h8M24 19V5' />
			<path d='m30 13-6 6-6-6' />
			<path d='m4 15 20 15 20-15' />
		</g>
	</svg>
)
export default ReceiveMailIcon
