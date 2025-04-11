import ListPageTransition from '../../../transitions/ListPageTransition'

export function Featured() {
	return (
		<ListPageTransition>
			<div className='w-full h-full'>
				<div className='flex w-full justify-between'>
					<h1>Featured</h1>
					<div>Character</div>
				</div>
			</div>
		</ListPageTransition>
	)
}
