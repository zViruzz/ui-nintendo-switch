import { Link } from 'react-router'
import ListPageTransition from '../../../transitions/ListPageTransition'
import Detailtext from '../../../ui/DetailText'
import SelectionSetting from '../../../ui/SelectionSetting'
import SelectionSwitch from '../../../ui/SelectionSwitch'
import { useState } from 'react'
import { useOptionsMenuContext } from '../../../context/optionsMenu'

export function ControlsSensors() {
	const { configureListOptions } = useOptionsMenuContext()
	const [touchSensitivity, setTouchSensitivity] = useState('Standard')

	const handleClickTouchSensitivity = () => {
		configureListOptions({
			title: 'Touch-Screen Sensitivity',
			isHidden: false,
			initial: touchSensitivity,
			onSelectOption: (option) => setTouchSensitivity(option.label),
			options: ['Standard', 'Stylus'],
		})
	}

	return (
		<ListPageTransition>
			<div className='mb-20'>
				<SelectionSetting edgeDirection='both' as={Link} to={'/app/change-grip-or-order'}>
					Change Grip/Order
				</SelectionSetting>

				<SelectionSetting edgeDirection='bottom'>Changa Button Mapping</SelectionSetting>
				<Detailtext className='mb-10'>
					<p>
						You can customize button mapping for each controller. Customized mapping
						configurations can be saved as presets for easy acces in the future.
					</p>
				</Detailtext>
				<SelectionSwitch>Controller Vibration</SelectionSwitch>
				<Detailtext className='mb-10'>
					<p>
						{
							'The vibration feature will be enabled on supporting controllers during gameplay. Vibration for alarm notifications can be changed in Notifications => Alarm Notifications.'
						}
					</p>
				</Detailtext>
				<SelectionSwitch>Pro Controller Wired Communication</SelectionSwitch>
				<Detailtext className='mb-10'>
					<p>
						If this option is enabled, the Nintendo Switch Pro Controller will communicate
						with the console via wired communication when connected to it using the USB
						charging cable. The NFC touchpoint on the Pro Controller will be disabled
						while the controller is using wired communication.
					</p>
				</Detailtext>
				<SelectionSetting edgeDirection='both'>Update Controllers</SelectionSetting>
				<Detailtext className='mb-10 flex flex-col'>
					<p>Update connected controllers.</p>
					<p>Some controllers cannot be updated.</p>
				</Detailtext>
				<SelectionSetting edgeDirection='both'>Calibrate Control Sticks</SelectionSetting>
				<SelectionSetting edgeDirection='bottom'>
					Calibrate Motion Controls
				</SelectionSetting>
			</div>

			<div>
				<SelectionSetting
					edgeDirection='both'
					className='flex justify-between'
					onClick={handleClickTouchSensitivity}
				>
					<span>Touch-Screen Sensitivity</span>
					<span className='dark:text-secodary text-secodary-light'>
						{touchSensitivity}
					</span>
				</SelectionSetting>
				<Detailtext className='mb-10'>
					<p>
						Using the Stylus setting increase the sensitivity of the touch screen to
						enhance stylus controls.
					</p>
				</Detailtext>
				<SelectionSetting edgeDirection='both'>Test Input Devices</SelectionSetting>
				<Detailtext className=''>
					<p>Check for porblems with the controllers or the touch screen.</p>
				</Detailtext>
				<SelectionSetting edgeDirection='both'>Disconnect Controllers</SelectionSetting>
			</div>
		</ListPageTransition>
	)
}
