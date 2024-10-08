import { listColors } from '../static/colors'
import SelectionGrid from '../ui/SelectionGrid'

function PanelColors({
	isHiddenBackground,
	handleClickAction,
	handleClickOutside,
}: {
	isHiddenBackground: boolean
	handleClickAction: (color: string) => void
	handleClickOutside: () => void
}) {
	return (
		<div
			className={`${isHiddenBackground ? 'invisible' : ''} h-full  absolute w-screen top-0 left-0 z-20 grid grid-cols-[1.46fr_1fr]  `}
		>
			<SelectionGrid title='Fondo' isHidden={isHiddenBackground}>
				{listColors.map(({ color }) => {
					return (
						<button
							key={color}
							className={
								'aspect-square  outline-wiggle-focus outline-[7.5px] hover:z-10 outline-offset-[3px] focus-visible:bg-[#3f8f7c] hover:outline-wiggle'
							}
							type='button'
							style={{
								backgroundColor: color,
							}}
							onClick={() => {
								handleClickAction(color)
							}}
							tabIndex={0}
						/>
					)
				})}
			</SelectionGrid>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div onClick={handleClickOutside} />
		</div>
	)
}

export default PanelColors
