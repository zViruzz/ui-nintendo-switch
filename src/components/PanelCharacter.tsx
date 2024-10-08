import { characters } from '../static/characters'
import SelectionGrid from '../ui/SelectionGrid'

function PanelCharacter({
	isHiddenCharacter,
	handleClickAction,
	handleClickOutside,
}: {
	isHiddenCharacter: boolean
	handleClickAction: (character: string) => void
	handleClickOutside: () => void
}) {
	return (
		<div
			className={`${isHiddenCharacter ? 'invisible' : ''} h-full  absolute w-screen top-0 left-0 z-20 grid grid-cols-[1.46fr_1fr]`}
		>
			<SelectionGrid
				title='Personaje/Mii'
				isHidden={isHiddenCharacter}
			>
				{characters.map((character) => (
					// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
					<img
						className='outline-wiggle-focus outline-[7.5px] hover:z-10 outline-offset-[3px] focus-visible:bg-[#3f8f7c] hover:outline-wiggle hover:bg-BlueHight'
						// biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
						tabIndex={0}
						key={character}
						src={character}
						onClick={() => {
							handleClickAction(character)
						}}
						alt='mario'
					/>
				))}
			</SelectionGrid>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div onClick={handleClickOutside} />
		</div>
	)
}

export default PanelCharacter
