import type { SVGProps } from 'react'

const FaceIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		width='1em'
		height='1em'
		aria-hidden='true'
		{...props}
	>
		<path
			stroke='#fff'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M7.5 8v1.5m9-1.5v1.5M11 12.6c.8 0 1.5-.7 1.5-1.5V8m2.7 7.2c-1.8 1.8-4.7 1.8-6.5 0M3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8Z'
		/>
	</svg>
)
export default FaceIcon
