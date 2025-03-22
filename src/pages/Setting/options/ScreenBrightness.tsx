import type { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import BrightnessIcon from '../../../icons/BrightnessIcon'
import { useAppSelector } from '../../../redux/hooks'
import { changeAutoBrighness, changeBrightness } from '../../../redux/settingSlice'
import ListPageTransition from '../../../transitions/ListPageTransition'
import SelectionSwitch from '../../../ui/SelectionSwitch'

export function ScreenBrightness() {
	const dispatch = useDispatch()
	const brightness = useAppSelector((state) => state.settings.brightness.value)
	const autoBrighness = useAppSelector(
		(state) => state.settings.brightness.autoBrightness,
	)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const brighness = Number.parseInt(e.target.value)
		if (autoBrighness) return

		dispatch(changeBrightness(brighness))
	}

	const handleSwitch = (bol: boolean) => {
		dispatch(changeAutoBrighness(bol))
		if (bol) {
			dispatch(changeBrightness(50))
		}
	}

	return (
		<ListPageTransition>
			<div className=' h-full w-full flex flex-col'>
				<SelectionSwitch
					className='border-y border-gray'
					onSwitch={handleSwitch}
					initial={autoBrighness}
				>
					Brillo automático
				</SelectionSwitch>

				<div className='box-border p-5 h-[6.9rem] w-full shrink-0  flex items-center gap-12 group hover:z-10 relative rounded-[0.5px]  '>
					<BrightnessIcon width={60} height={60} />
					<input
						onChange={handleChange}
						type='range'
						className='w-full webkit-slider-thumb out-of-range:border-green-500'
						value={brightness}
					/>
				</div>

				<div className='px-14 py-6'>
					<ul className='text-[1.83rem] list-image-checkmark text-[#8c8c8c] leading-snug'>
						<li>
							El brillo tambien se puede ajustar mediante la configuracion de acceso
							rapido (manten oprimido
							<span className='after:content-home pl-[0.40rem]' />
							).
						</li>
					</ul>
				</div>
			</div>
		</ListPageTransition>
	)
}
