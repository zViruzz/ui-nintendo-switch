import type { SVGProps } from 'react'

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlSpace='preserve'
		width='1em'
		height='1em'
		fill='#00ffc9'
		stroke='#00ffc9'
		transform='rotate(270)'
		viewBox='0 0 490 490'
		aria-hidden='true'
		{...props}
	>
		<path d='m0 244.993 311.249 171.226V298.63H490V191.37H311.249V73.781z' />
	</svg>
)
export default ArrowDown
