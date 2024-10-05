import type { SVGProps } from 'react'

const ChatIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1em'
		height='1em'
		fill='#e5634c'
		stroke='#e5634c'
		viewBox='0 0 256.001 256.001'
		{...props}
	>
		<path d='M84 99.999a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12Zm12 52h64a12 12 0 0 0 0-24H96a12 12 0 0 0 0 24ZM236 56v128a20.023 20.023 0 0 1-20.001 20h-57.205l-13.645 22.74a20 20 0 0 1-34.3 0L97.206 204H40a20.022 20.022 0 0 1-20-20V56a20.022 20.022 0 0 1 20-20h176a20.022 20.022 0 0 1 20 20Zm-24 4H44v119.999h55.47a20.104 20.104 0 0 1 17.15 9.71L128 208.676l11.379-18.966v-.001A20.102 20.102 0 0 1 156.53 180H212Z' />
	</svg>
)
export default ChatIcon
