import ListPageTransition from '../../../transitions/ListPageTransition'
import SelectionSetting from '../../../ui/SelectionSetting'

export function Mii() {
	return (
		<ListPageTransition>
			<div className='flex gap-7 w-full mb-12'>
				<div className='bg-white h-36 min-w-51' />
				<p>
					You can create your own custom Mii characters. Mii character can be used in
					compatible software.
				</p>
			</div>
			<SelectionSetting className='border-y border-gray'>
				Create/Edit a Mii
			</SelectionSetting>
		</ListPageTransition>
	)
}
