import { useState } from 'react'
import { useOptionsMenuContext } from '../../../context/optionsMenu'
import ListPageTransition from '../../../transitions/ListPageTransition'
import SelectionSetting from '../../../ui/SelectionSetting'

export function SleepMode() {
	const { configureListOptions } = useOptionsMenuContext()
	const [autoSleepValue, setAutoSleepValue] = useState('10min')
	const [autoSleepValueOnTv, setAutoSleepValueOnTv] = useState('1hr')

	const handleClickAutoSleep = () => {
		configureListOptions({
			isHidden: false,
			initial: autoSleepValue,
			onSelectOption: (option) => setAutoSleepValue(option.label),
			options: [
				{
					label: '10min',
				},
				{
					label: '20min',
				},
				{
					label: '30min',
				},
				{
					label: '1h',
				},
				{
					label: 'Never',
				},
			],
		})
	}

	const handleClickAutoSleepOnTv = () => {
		configureListOptions({
			isHidden: false,
			initial: autoSleepValueOnTv,
			onSelectOption: (option) => setAutoSleepValueOnTv(option.label),
			options: [
				{
					label: '15min',
				},
				{
					label: '1hr',
				},
				{
					label: '2hr',
				},
				{
					label: '3hr',
				},
				{
					label: 'Never',
				},
			],
		})
	}

	return (
		<ListPageTransition>
			<div>
				<SelectionSetting
					className='border-y flex justify-between'
					onClick={handleClickAutoSleep}
				>
					<div>Auto-Sleep (Playing on Console Screen)</div>
					<div className='dark:text-secodary text-secodary-light'>{autoSleepValue}</div>
				</SelectionSetting>

				<SelectionSetting
					className='border-y flex justify-between'
					onClick={handleClickAutoSleepOnTv}
				>
					<div>Auto-sleep (Connected to TV)</div>
					<div className='dark:text-secodary text-secodary-light'>
						{autoSleepValueOnTv}
					</div>
				</SelectionSetting>
			</div>
		</ListPageTransition>
	)
}
