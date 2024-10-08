import type { HTMLAttributes, ReactNode } from 'react'
import cn from '../utils/cn'

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	className: string
}

export default function PageBasicLayout({
	children,
	className,
	...otherProps
}: Props) {
	return (
		<section
			className={cn(
				'grid grid-rows-[1fr_7.5fr] h-full w-full pt-[1.1%] grid-cols-1',
				className,
			)}
			{...otherProps}
		>
			{children}
		</section>
	)
}
