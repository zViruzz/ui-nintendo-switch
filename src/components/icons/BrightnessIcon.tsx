import type { SVGProps } from 'react'

const BrightnessIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlSpace='preserve'
		width='1em'
		height='1em'
		fill='#fff'
		stroke='#fff'
		viewBox='0 0 512 512'
		{...props}
	>
		<path d='M256 145.455c-60.955 0-110.545 49.591-110.545 110.545S195.045 366.545 256 366.545 366.545 316.955 366.545 256 316.955 145.455 256 145.455zM238.545 0h34.909v110.545h-34.909z' />
		<path
			strokeWidth={0.99999}
			d='m62.645 87.318 24.684-24.684 78.165 78.166-24.684 24.684z'
		/>
		<path d='M0 238.545h110.545v34.909H0z' />
		<path
			strokeWidth={0.99999}
			d='m62.636 424.684 78.166-78.165 24.684 24.684-78.166 78.166z'
		/>
		<path d='M238.545 401.455h34.909V512h-34.909z' />
		<path
			strokeWidth={0.99999}
			d='m346.498 371.19 24.684-24.684 78.166 78.166-24.684 24.684z'
		/>
		<path d='M401.455 238.545H512v34.909H401.455z' />
		<path
			strokeWidth={0.99999}
			d='m346.508 140.807 78.165-78.166 24.684 24.684-78.165 78.166z'
		/>
	</svg>
)
export default BrightnessIcon
