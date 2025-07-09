import type { SVGProps } from 'react'

const LensIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		width='1.2em'
		height='1.2em'
		aria-hidden='true'
		{...props}
	>
		<g stroke='currentColor' strokeWidth={2}>
			<path d='M19.96 11.48a8.45 8.45 0 0 1-2.458 5.971 8.438 8.438 0 0 1-6.022 2.51 8.48 8.48 0 1 1 8.48-8.48Z' />
			<path strokeLinecap='round' d='m18.155 18.155 3.732 3.732' />
		</g>
	</svg>
)
export default LensIcon
