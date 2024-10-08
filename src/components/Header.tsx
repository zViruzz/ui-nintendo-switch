import type { ReactNode } from 'react'
import cn from '../utils/cn'

interface Props {
	children?: ReactNode
	className?: string
	title?: string
}

function Header({ children, className = '', title }: Props) {
	return (
		<header
			className={cn(
				'col-span-2 px-[2.5%] flex justify-between flex-col',
				className,
			)}
		>
			<div className='flex items-center text-[3rem] w-full h-full px-[2.6%] gap-4 border-b-2 '>
				{children}
				{title !== undefined ? (
					<h2 className='xl:text-5xl lg:text-4xl md:text-4xl text-3xl'>
						{title}
					</h2>
				) : null}
			</div>
		</header>
	)
}

export default Header
