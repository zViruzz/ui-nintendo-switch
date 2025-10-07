import type { SVGProps } from 'react'
import { useThemeContext } from '../context/theme'

const ButtonBIcon = (props: SVGProps<SVGSVGElement>) => {
	const { theme } = useThemeContext()
	let themeSet = theme

	if (props.className?.includes('light')) {
    themeSet = 'light'
	}

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			aria-hidden='true'
			className='iconify iconify--emojione'
			viewBox='0 0 64 64'
			{...props}
		>
			<rect width={64} height={64} fill='currentColor' strokeWidth={0} rx={32} />
			<path
				fill={themeSet === 'dark' ? '#2d2d2d' : '#fff'}
				d='M43 25.3c0-5.1-4.2-9.2-9.4-9.2L21 16v32h12.6c5.2 0 9.4-4.1 9.4-9.2 0-2.6-1.1-5-3-6.7 1.9-1.8 3-4.2 3-6.8m-9.4 17.6h-7.7v-8.4h7.7c2.4 0 4.3 1.9 4.3 4.2s-1.9 4.2-4.3 4.2m0-13.4h-7.7v-8.4h7.7c2.4 0 4.3 1.9 4.3 4.2 0 2.3-1.9 4.2-4.3 4.2'
			/>
		</svg>
	)
}
export default ButtonBIcon
