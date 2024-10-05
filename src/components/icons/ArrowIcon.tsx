import type { SVGProps } from 'react'

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='icon'
		viewBox='0 0 1024 1024'
		width='1em'
		height='1em'
		{...props}
	>
		<path
			fill='#fff'
			d='M768 903.232 717.568 960 256 512 717.568 64 768 120.768 364.928 512z'
		/>
	</svg>
)
export default ArrowIcon
