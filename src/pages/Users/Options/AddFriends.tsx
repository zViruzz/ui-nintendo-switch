import ReceiveMailIcon from '../../../icons/ReceiveMailIcon'
import SelectionSetting from '../../../ui/SelectionSetting'

export function AddFriends() {
	return (
		<div>
			<SelectionSetting className='border-gray border-y mb-20'>
				<ReceiveMailIcon />
				<span>Receive Friend Requests</span>
			</SelectionSetting>

			<SelectionSetting className='border-gray border-y'>
				Search for Local Users
			</SelectionSetting>
			<SelectionSetting className='border-gray border-b'>
				Search for Users You Played With
			</SelectionSetting>
			<SelectionSetting className='border-gray border-b'>
				Search with Firend
			</SelectionSetting>
			<SelectionSetting className='border-gray border-b'>
				Sent Friend Requests
			</SelectionSetting>
			<div className='text-2xl text-right mt-3 text-description'>
				Your triend code: SW-3413-7246-4133
			</div>
		</div>
	)
}
