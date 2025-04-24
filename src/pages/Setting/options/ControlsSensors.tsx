import { Link } from 'react-router'
import ListPageTransition from '../../../transitions/ListPageTransition'
import Detailtext from '../../../ui/DetailText'
import SelectionSetting from '../../../ui/SelectionSetting'
import SelectionSwitch from '../../../ui/SelectionSwitch'

export function ControlsSensors() {
	return (
		<ListPageTransition>
			<div className='mb-20'>
				<SelectionSetting
					className='border-y flex justify-between'
					as={Link}
					to={'/app/change-grip-or-order'}
				>
					<div>Change Grip/Order</div>
				</SelectionSetting>

				<SelectionSetting className='border-b flex justify-between'>
					Changa Button Mapping
				</SelectionSetting>
				<Detailtext className='mb-10'>
					You can customize button mapping for each controller. Customized mapping
					configurations can be saved as presets for easy acces in the future.
				</Detailtext>
				<SelectionSwitch className='border-y flex justify-between'>
					Controller Vibration
				</SelectionSwitch>
				<Detailtext className='mb-10'>
					{
						'The vibration feature will be enabled on supporting controllers during gameplay. Vibration for alarm notifications can be changed in Notifications => Alarm Notifications.'
					}
				</Detailtext>
				<SelectionSwitch className='border-y flex justify-between'>
					Pro Controller Wired Communication
				</SelectionSwitch>
				<Detailtext className='mb-10'>
					If this option is enabled, the Nintendo Switch Pro Controller will communicate
					with the console via wired communication when connected to it using the USB
					charging cable. The NFC touchpoint on the Pro Controller will be disabled while
					the controller is using wired communication.
				</Detailtext>
				<SelectionSetting className='border-y'>Update Controllers</SelectionSetting>
				<Detailtext className='mb-10 flex flex-col'>
					<p>Update connected controllers.</p>
					<p>Some controllers cannot be updated.</p>
				</Detailtext>
				<SelectionSetting className='border-y'>Calibrate Control Sticks</SelectionSetting>
				<SelectionSetting className='border-b'>
					Calibrate Motion Controls
				</SelectionSetting>
			</div>

			<div>
				<SelectionSetting className='border-y'>Touch-Screen Sensitivity</SelectionSetting>
				<Detailtext className='mb-10'>
					Using the Stylus setting increase the sensitivity of the touch screen to enhance
					stylus controls.
				</Detailtext>
				<SelectionSetting className='border-y'>Test Input Devices</SelectionSetting>
				<Detailtext className='mb-10'>
					Check for porblems with the controllers or the touch screen.
				</Detailtext>
				<SelectionSetting className='border-y'>Disconnect Controllers</SelectionSetting>
			</div>
		</ListPageTransition>
	)
}
