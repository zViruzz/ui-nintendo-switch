import { characters } from '../static/characters'
import SelectionGrid from './layouts/SelectionGrid'

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
					<img
						className='outline-wiggle-focus outline-[7.5px] hover:z-10 outline-offset-[3px] focus-visible:bg-[#3f8f7c] hover:outline-wiggle hover:bg-BlueHight'
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
			<div onClick={handleClickOutside} />
		</div>
	)
}

export default PanelCharacter
