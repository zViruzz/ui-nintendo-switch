export function CardGameFeatured({
	title,
	urlImage,
}: { title: string; urlImage: string }) {
	return (
		<div className='w-full bg-white grid grid-rows-[10fr_auto] shadow'>
			<img className='object-cover w-full h-full' src={urlImage} alt={title} />
			<div className='text-xl px-3 py-1'>
				<p>{title}</p>
			</div>
		</div>
	)
}
