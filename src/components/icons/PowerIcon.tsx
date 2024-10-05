import type { SVGProps } from 'react'

const PowerIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1em'
		height='1em'
		fill='none'
		viewBox='0 0 24 24'
		aria-hidden='true'
		{...props}
	>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M12 4v8m5.292-6A8 8 0 1 1 6.709 6'
		/>
	</svg>
)
export default PowerIcon
