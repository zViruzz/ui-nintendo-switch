import type { SVGProps } from 'react'

const ButtonAIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='#fff'
		aria-hidden='true'
		className='iconify iconify--emojione'
		viewBox='0 0 64 64'
		width='1em'
		height='1em'
		{...props}
	>
		<rect width={64} height={64} strokeWidth={0} rx={32} />
		<path
			fill='#2d2d2d'
			d='M41.7 46H47L35 14h-6L17 46h5.3l4.2-11.2h11.1L41.7 46zM28.3 30l3.7-9.9 3.7 9.9h-7.4z'
		/>
	</svg>
)
export default ButtonAIcon
