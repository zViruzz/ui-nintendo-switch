import type { ReactNode } from 'react'

export default function Subheading({
	children,
}: { children: ReactNode }) {
	return (
		<div className='flex justify-between mb-2'>
			<div className='flex items-center gap-3'>
				<div className={'bg-description h-[65%] w-[8px]'} />
				{children}
			</div>
		</div>
	)
}
