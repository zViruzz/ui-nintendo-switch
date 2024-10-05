import type { SVGProps } from 'react'

const WifiIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1em'
		height='1em'
		viewBox='0 3 24 24'
		aria-hidden='true'
		{...props}
	>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M5.636 13.636a9 9 0 0 1 12.727 0 1 1 0 1 0 1.415-1.414c-4.296-4.296-11.26-4.296-15.557 0a1 1 0 1 0 1.415 1.414Zm2.828 2.829a5 5 0 0 1 7.071 0 1 1 0 0 0 1.414-1.415 7 7 0 0 0-9.9 0 1 1 0 1 0 1.415 1.415Zm1.414 1.414a3 3 0 0 1 4.243 0 1 1 0 0 1 0 1.414l-1.415 1.414a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 0 1 0-1.414Z'
			clipRule='evenodd'
		/>
	</svg>
)
export default WifiIcon
