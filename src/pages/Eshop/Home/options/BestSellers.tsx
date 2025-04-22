import ListPageTransition from '../../../../transitions/ListPageTransition'

export function BestSellers() {
	return (
		<ListPageTransition>
			<div className='flex flex-col gap-4'>
				<h1>Best Sellers</h1>
			</div>
		</ListPageTransition>
	)
}
