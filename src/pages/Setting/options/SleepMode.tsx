import { useState } from 'react'
import { useOptionsMenuContext } from '../../../context/optionsMenu'
import useControllers from '../../../hooks/useControllers'
import ListPageTransition from '../../../transitions/ListPageTransition'
import Detailtext from '../../../ui/DetailText'
import SelectionSetting from '../../../ui/SelectionSetting'
import SelectionSwitch from '../../../ui/SelectionSwitch'

export function SleepMode() {
	const { configureListOptions, listOptions } = useOptionsMenuContext()
	const [autoSleepValue, setAutoSleepValue] = useState('10min')
	const [autoSleepValueOnTv, setAutoSleepValueOnTv] = useState('1hr')

	useControllers({
		dependence: listOptions.isHidden,
		settingButtonB: {
			text: 'Close',
			route: '/app',
		},
	})

	const handleClickAutoSleep = () => {
		configureListOptions({
			isHidden: false,
			initial: autoSleepValue,
			onSelectOption: (option) => setAutoSleepValue(option.label),
			options: ['10min', '20min', '30min', '1h', 'Never'],
		})
	}

	const handleClickAutoSleepOnTv = () => {
		configureListOptions({
			isHidden: false,
			initial: autoSleepValueOnTv,
			onSelectOption: (option) => setAutoSleepValueOnTv(option.label),
			options: ['15min', '1hr', '2hr', '3hr', 'Never'],
		})
	}

	return (
		<ListPageTransition>
			<div className='mb-20'>
				<SelectionSetting
					className='border-y flex justify-between'
					onClick={handleClickAutoSleep}
				>
					<div>Auto-Sleep (Playing on Console Screen)</div>
					<div className='dark:text-secodary text-secodary-light'>{autoSleepValue}</div>
				</SelectionSetting>

				<SelectionSetting
					className='border-b flex justify-between'
					onClick={handleClickAutoSleepOnTv}
				>
					<div>Auto-sleep (Connected to TV)</div>
					<div className='dark:text-secodary text-secodary-light'>
						{autoSleepValueOnTv}
					</div>
				</SelectionSetting>
			</div>

			<div>
				<SelectionSwitch className='border-y'>
					Suspend Auto-Sleep While Playing Media Content
				</SelectionSwitch>
				<Detailtext className='mb-10'>
					Prevents auto-sleep from activating while media content in playing. If this
					option is disabled, the console will still go to sleep after four hours of media
					playback.
				</Detailtext>
				<SelectionSwitch className='border-y'>
					Maintain Internet Connection in Sleep Mode
				</SelectionSwitch>
				<Detailtext className='mb-10'>
					If this option is enabled, downloads initialted from your PC or smartphone will
					start right away , even when the console is in sleep mode. Disabling this option
					will reduce the console's energy consumption during sleep mode while connected
					to the Internet.
					<ul className='list-image-checkmark pl-7 py-6'>
						<li>
							This will have an effect only when connected to the Internet via wired
							connection.
						</li>
					</ul>
				</Detailtext>

				<SelectionSwitch className='border-y'>
					Wake When AC Adapter Is Disconnected
				</SelectionSwitch>
				<Detailtext>
					If this option is enabled, the console will wake from sleep mode when it is
					removed from the dock
				</Detailtext>
			</div>
		</ListPageTransition>
	)
}
