import ListPageTransition from '../../../../transitions/ListPageTransition'

export function EnterCode() {
	return (
		<ListPageTransition>
			<div className='flex flex-col gap-4'>
				<h1>EnterCode</h1>
			</div>
		</ListPageTransition>
	)
}
