import { useState } from 'react'
import { useDispatch } from 'react-redux'
import CharacterProfile from '../../components/CharacterProfile'
import Header from '../../components/Header'
import PanelCharacter from '../../components/PanelCharacter'
import PanelColors from '../../components/PanelColors'
import OpacityPageTransition from '../../components/transitions/OpacityPageTransition'
import {
	changeBackground,
	changeCharacter,
} from '../../redux/userSlice'

function EditIcon() {
	const dispatch = useDispatch()
	const [isHiddenBackground, setHiddenBackground] = useState(true)
	const [isHiddenCharacter, setHiddenCharacter] = useState(true)

	const actionColor = (color: string) => {
		dispatch(changeBackground(color))
		handleClickOutside()
	}
	const actionCharacter = (character: string) => {
		dispatch(changeCharacter(character))
		handleClickOutside()
	}

	const handleClickCharacter = () => {
		setHiddenCharacter(false)
	}

	const handleClickBackground = () => {
		setHiddenBackground(false)
	}

	const handleClickOutside = () => {
		setHiddenCharacter(true)
		setHiddenBackground(true)
	}

	return (
		<OpacityPageTransition>
			<div className='grid grid-rows-[1fr_7.5fr] grid-cols-[38.3rem_1fr] h-full w-full pt-5 relative'>
				<Header
					className={`${isHiddenCharacter ? 'opacity-100 delay-100' : 'opacity-0'} ease-in-out transition-opacity `}
				>
					<h2>Diseño del icono</h2>
				</Header>

				<section className='grid grid-cols-[1fr_45%] w-screen text-[40px]'>
					<div className='ml-12'>
						<div className='pr-16 pl-32 pt-[170px] h-full grid grid-rows-[176px_176px_]'>
							<button
								onClick={handleClickCharacter}
								className='hover:bg-blueHight focus-visible:bg-blueHight bg-transparent border-0 outline-wiggle-focus hover:z-10 flex items-center px-10 border-y border-gray'
								type='button'
							>
								Personaje/Mii
							</button>
							<button
								onClick={handleClickBackground}
								className='hover:bg-blueHight focus-visible:bg-blueHight bg-transparent border-0 outline-wiggle-focus hover:z-10 flex items-center px-10 border-b border-gray'
								type='button'
							>
								Fondo
							</button>
							<div className='w-full flex justify-center items-center'>
								<button
									className='bg-[#01ffc9] outline-wiggle-focus outline-offset-2 text-black rounded-lg h-32 w-[63%]'
									onClick={() => {
										history.back()
									}}
									type='button'
								>
									Aceptar
								</button>
							</div>

							{/* ------------ */}
							<PanelCharacter
								isHiddenCharacter={isHiddenCharacter}
								handleClickOutside={handleClickOutside}
								handleClickAction={actionCharacter}
							/>
							<PanelColors
								handleClickAction={actionColor}
								handleClickOutside={handleClickOutside}
								isHiddenBackground={isHiddenBackground}
							/>
							{/* ------------ */}
						</div>
					</div>

					<div className=' flex justify-center py-[18%]'>
						<CharacterProfile className='h-[23.7rem] w-[23.7rem]' />
					</div>
				</section>
			</div>
		</OpacityPageTransition>
	)
}

export default EditIcon
