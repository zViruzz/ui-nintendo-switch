import type { SVGProps } from 'react'

const ControllerIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1em'
		height='1em'
		fill='none'
		transform='rotate(45)'
		viewBox='10 0 48 48'
		aria-hidden='true'
		{...props}
	>
		<g id='SVGRepo_bgCarrier' strokeWidth='0' />
		<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
		<g id='SVGRepo_iconCarrier'>
			<path
				d='M42 14C42 9.58172 38.4183 6 34 6H28C26.8954 6 26 6.89543 26 8V42C26 43.1046 26.8954 44 28 44H34C38.4183 44 42 40.4183 42 36V14Z'
				stroke='currentColor'
				strokeWidth='3.5'
			/>
			<rect x='31.5' y='14' width='5.5' height='5.5' rx='2.5' fill='currentColor' />
			<path
				d='M34 28V34'
				stroke='currentColor'
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M31 31L37 31'
				stroke='currentColor'
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
	</svg>
)
export default ControllerIcon
