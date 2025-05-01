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
			title: 'Auto-Sleep (Playing on Console Screen)',
			isHidden: false,
			initial: autoSleepValue,
			onSelectOption: (option) => setAutoSleepValue(option.label),
			options: ['1min', '3min', '5min', '10min', '30min', 'Never'],
		})
	}

	const handleClickAutoSleepOnTv = () => {
		configureListOptions({
			title: 'Auto-Sleep (Connected to TV)',
			isHidden: false,
			initial: autoSleepValueOnTv,
			onSelectOption: (option) => setAutoSleepValueOnTv(option.label),
			options: ['15min', '1hr', '2hr', '3hr', '6hr', '12hr', 'Never'],
		})
	}

	return (
		<ListPageTransition>
			<div className='mb-20'>
				<SelectionSetting
					className='border-y flex justify-between'
					onClick={handleClickAutoSleep}
				>
					<span>Auto-Sleep (Playing on Console Screen)</span>
					<span className='dark:text-secodary text-secodary-light'>{autoSleepValue}</span>
				</SelectionSetting>

				<SelectionSetting
					className='border-b flex justify-between'
					onClick={handleClickAutoSleepOnTv}
				>
					<span>Auto-sleep (Connected to TV)</span>
					<span className='dark:text-secodary text-secodary-light'>
						{autoSleepValueOnTv}
					</span>
				</SelectionSetting>
			</div>

			<div>
				<SelectionSwitch className='border-y'>
					Suspend Auto-Sleep While Playing Media Content
				</SelectionSwitch>
				<Detailtext className='mb-10'>
					<p>
						Prevents auto-sleep from activating while media content in playing. If this
						option is disabled, the console will still go to sleep after four hours of
						media playback.
					</p>
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
					<p>
						If this option is enabled, the console will wake from sleep mode when it is
						removed from the dock
					</p>
				</Detailtext>
			</div>
		</ListPageTransition>
	)
}
