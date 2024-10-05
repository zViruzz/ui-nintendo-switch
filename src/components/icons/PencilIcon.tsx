import type { SVGProps } from 'react'

const PencilIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		version='1.0'
		width='25'
		height='25'
		viewBox='0 0 64 64'
		xmlSpace='preserve'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			fill='currentColor'
			d='M62.829 16.484 47.513 1.171a3.999 3.999 0 0 0-5.657 0L0 43.031V64h20.973l41.856-41.855a4.003 4.003 0 0 0 0-5.661zM13.809 59.7H4.3v-9.51l.164-.163 9.51 9.51z'
		/>
		<path d='M0 53.516 10.486 64H0V53.516' fill='currentColor' />
	</svg>
)
export default PencilIcon
