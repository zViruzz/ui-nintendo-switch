import type { SVGProps } from 'react'

function ButtonXIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			aria-hidden='true'
			{...props}
		>
			<circle cx='12' cy='12' r='10' fill='#0075C9' />
			<path d='M8 8L16 16M8 16L16 8' stroke='white' strokeWidth='2' />
		</svg>
	)
}

export default ButtonXIcon
