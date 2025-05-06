import type { HTMLAttributes, ReactNode } from 'react'
import cn from '../utils/cn'

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

function Detailtext({ children, className, ...props }: Props) {
	return (
		<div
			className={cn(
				'h-[6.7rem] py-3 px-6 text-[1.83rem] text-description leading-snug',
				className,
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export default Detailtext
