import type { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

export default function PageBasicLayout({
	children,
	...otherProps
}: Props) {
	return (
		<section
			className='grid grid-rows-[1fr_7.5fr] h-full w-full pt-[1.1%] grid-cols-1'
			{...otherProps}
		>
			{children}
		</section>
	)
}
