export function EshopOptionsContainer({ children }: { children: React.ReactNode }) {
	return (
		<main
			tabIndex={-1}
			className='w-full h-full px-[6.5%] py-18 pb-40 overflow-auto focus-main'
		>
			{children}
		</main>
	)
}
