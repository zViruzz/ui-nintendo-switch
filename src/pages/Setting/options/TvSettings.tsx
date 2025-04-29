import { useState } from 'react'
import { useOptionsMenuContext } from '../../../context/optionsMenu'
import ListPageTransition from '../../../transitions/ListPageTransition'
import SelectionSetting from '../../../ui/SelectionSetting'

export function TvSettings() {
	const { configureListOptions } = useOptionsMenuContext()
	const [tvResolutionValue, setTvResolutionValue] = useState('1080p')
	const [rgbRangeValue, setRgbRangeValue] = useState('Full Range')

	const handleClickTvResolution = () => {
		configureListOptions({
			isHidden: false,
			initial: tvResolutionValue,
			onSelectOption: (option) => setTvResolutionValue(option.label),
			options: ['Automatic', '480p', '720p', '1080p'],
		})
	}

	const handleClickRgbRange = () => {
		configureListOptions({
			isHidden: false,
			initial: rgbRangeValue,
			onSelectOption: (option) => setRgbRangeValue(option.label),
			options: ['Automatic', 'Limited Range', 'Full Range'],
		})
	}

	return (
		<ListPageTransition>
			<div>
				<SelectionSetting
					className='border-y flex justify-between'
					onClick={handleClickTvResolution}
				>
					<div>TV Resolution</div>
					<div className='dark:text-secodary text-secodary-light'>
						{tvResolutionValue}
					</div>
				</SelectionSetting>
				<SelectionSetting
					className='border-b flex justify-between'
					onClick={handleClickRgbRange}
				>
					<div>RGB Range</div>
					<div className='dark:text-secodary text-secodary-light'>{rgbRangeValue}</div>
				</SelectionSetting>
			</div>
		</ListPageTransition>
	)
}
