import type { SVGProps } from 'react'

const BatteryIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1em'
		height='1em'
		fill='#fff'
		stroke='#fff'
		viewBox='0 0 512 512'
		aria-hidden='true'
		{...props}
	>
		<path
			fillRule='evenodd'
			d='M426.667 128v74.666h42.667v106.667h-42.667V384h-384V128h384ZM384 170.667H85.334v170.666H384V170.667ZM362.667 192v128h-256V192h256Z'
		/>
	</svg>
)
export default BatteryIcon
