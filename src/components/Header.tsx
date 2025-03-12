import type { ReactNode } from 'react'
import cn from '../utils/cn'

interface Props {
	children?: ReactNode
	className?: string
	isPageHeight?: boolean
	title?: string
}

function Header({ children, isPageHeight = true, className = '', title }: Props) {
	return (
		<header
			className={cn(
				'col-span-2 px-[2.5%] flex justify-between flex-col',
				className,
				isPageHeight ? 'h-28' : '',
			)}
		>
			<div className='flex items-center  w-full h-full px-[2.6%] gap-4 border-b-2 dark:border-white border-neutral-800 xl:text-5xl lg:text-4xl md:text-4xl text-3xl'>
				{children}
				{title !== undefined ? <h2>{title}</h2> : null}
			</div>
		</header>
	)
}

export default Header
