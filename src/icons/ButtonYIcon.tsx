import type { SVGProps } from 'react'
import { useThemeContext } from '../context/theme'

function ButtonYIcon(props: SVGProps<SVGSVGElement>) {
	const { theme } = useThemeContext()
	let themeSet = theme

	if (props.className?.includes('light')) {
     themeSet = 'light'
	}

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
			transform='rotate(180)'
			{...props}
		>
			<circle cx='12' cy='12' r='10' fill='currentColor' />
			<path
				d='M12 8V12M12 12L8 16M12 12L16 16'
				stroke={themeSet === 'dark' ? '#2d2d2d' : '#fff'}
				strokeWidth='2'
			/>
		</svg>
	)
}

export default ButtonYIcon
