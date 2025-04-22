import ListPageTransition from '../../../transitions/ListPageTransition'
import SelectionSetting from '../../../ui/SelectionSetting'

export function Amiibo() {
	return (
		<ListPageTransition>
			<div className='flex gap-7 w-full mb-12'>
				<div className='bg-white h-36 min-w-111' />
				<p>You can edit and delete data saved to amiibo.</p>
			</div>
			<SelectionSetting className='border-y border-gray'>
				Create/Edit a Mii
			</SelectionSetting>
			<SelectionSetting className='border-b border-gray'>
				Delete Game Data
			</SelectionSetting>
			<SelectionSetting className='border-b border-gray'>Reset amiibo</SelectionSetting>
		</ListPageTransition>
	)
}
