import { useState } from 'react'
import { useCardMessageContext } from '../../../context/cardMessage'
import { useOptionsMenuContext } from '../../../context/optionsMenu'
import useControllers from '../../../hooks/useControllers'
import ListPageTransition from '../../../transitions/ListPageTransition'
import Detailtext from '../../../ui/DetailText'
import SelectionSetting from '../../../ui/SelectionSetting'
import SelectionSwitch from '../../../ui/SelectionSwitch'

export function TvSettings() {
	const { settingMessage } = useCardMessageContext()
	const { configureListOptions, listOptions } = useOptionsMenuContext()
	const [tvResolutionValue, setTvResolutionValue] = useState('1080p')
	const [rgbRangeValue, setRgbRangeValue] = useState('Full Range')
	const [tvSoundValue, setTvSound] = useState('Stereo')

	useControllers({
		dependence: listOptions.isHidden,
		settingButtonB: {
			text: 'Close',
			route: '/app',
		},
	})

	const handleClickTvResolution = () => {
		configureListOptions({
			title: 'TV Resolution',
			isHidden: false,
			initial: tvResolutionValue,
			onSelectOption: (option) => setTvResolutionValue(option.label),
			options: ['Automatic', '480p', '720p', '1080p'],
		})
	}

	const handleClickRgbRange = () => {
		configureListOptions({
			title: 'RGB Range',
			isHidden: false,
			initial: rgbRangeValue,
			onSelectOption: (option) => setRgbRangeValue(option.label),
			options: ['Automatic', 'Limited Range', 'Full Range'],
		})
	}

	const handleClickAjustScreenSize = () => {
		settingMessage({
			isHidden: false,
			column: true,
			children: (
				<div className='py-30 flex justify-center'>Connect the console to a TV.</div>
			),
			buttons: [
				{
					label: 'Back',
					isCloseButton: true,
				},
			],
		})
	}

	const handleClickTvSound = () => {
		configureListOptions({
			title: 'TV Sound',
			isHidden: false,
			initial: tvSoundValue,
			onSelectOption: (option) => setTvSound(option.label),
			options: ['Automatic', 'Surround Sound', 'Stereo', 'Mono'],
		})
	}

	return (
		<ListPageTransition>
			<div>
				<SelectionSetting
					edgeDirection='both'
					className='flex justify-between'
					onClick={handleClickTvResolution}
				>
					<span>TV Resolution</span>
					<span className='dark:text-secodary text-secodary-light'>
						{tvResolutionValue}
					</span>
				</SelectionSetting>
				<SelectionSetting
					edgeDirection='bottom'
					className='flex justify-between'
					onClick={handleClickRgbRange}
				>
					<span>RGB Range</span>
					<span className='dark:text-secodary text-secodary-light'>{rgbRangeValue}</span>
				</SelectionSetting>
				<SelectionSetting className='border-none' onClick={handleClickAjustScreenSize}>
					Adjust Screen Size
				</SelectionSetting>
				<SelectionSwitch>Screen Burn-In Reduction</SelectionSwitch>
				<Detailtext className='pb-13'>
					<p>Reduce screen brightness after live minutes of inactivity.</p>
				</Detailtext>
				<SelectionSwitch>Match TV Power State</SelectionSwitch>
				<Detailtext className='pb-11'>
					<p>
						When Switching to TV Mode with the console docked or when the console exits
						sleep mode, the TV will turn on. Turning off the TV will put the console in
						sleep mode.
					</p>
					<ul className='list-image-checkmark pl-7 py-6'>
						<li>
							HDMI settings must also be enabled on your TV. Some TV models may be unable
							yo use this feature.
						</li>
					</ul>
				</Detailtext>
				<SelectionSetting
					edgeDirection='both'
					className='flex justify-between'
					onClick={handleClickTvSound}
				>
					<span>TV Sound</span>
					<span className='dark:text-secodary text-secodary-light'>{tvSoundValue}</span>
				</SelectionSetting>
			</div>
		</ListPageTransition>
	)
}
