import ListPageTransition from '../../../transitions/ListPageTransition'
import Detailtext from '../../../ui/DetailText'
import SelectionSetting from '../../../ui/SelectionSetting'
import SelectionSwitch from '../../../ui/SelectionSwitch'

export function Notifications() {
	return (
		<ListPageTransition>
			<div className='mb-26'>
				<SelectionSwitch>"Download Complete" Notifications</SelectionSwitch>
				<SelectionSetting edgeDirection='bottom'>Friend Notifications</SelectionSetting>
				<SelectionSetting edgeDirection='bottom'>
					Platinum Point Notifications
				</SelectionSetting>
			</div>

			<div>
				<SelectionSetting edgeDirection='both'>Alarm Notifications</SelectionSetting>
				<Detailtext>
					<p className='dark:text-description text-description-light mb-10'>
						After Setting an alarm, you will get a notification at the date and time of
						your choosing
					</p>
				</Detailtext>
				<SelectionSwitch>Notifacation Sound</SelectionSwitch>
			</div>
		</ListPageTransition>
	)
}
