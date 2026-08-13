import type { AllHTMLAttributes, ElementType, ReactNode } from 'react'

import { tv } from 'tailwind-variants'

interface Props extends Omit<AllHTMLAttributes<HTMLElement>, 'as'> {
	as?: string | ElementType
	children: ReactNode
	className?: string
	edgeDirection?: 'top' | 'bottom' | 'both'
	to?: string
	tabIndex?: number
	disabled?: boolean
}

function SelectionSetting({
	as: Component = 'button',
	children,
	disabled = false,
	tabIndex = 0,
	className = '',
	edgeDirection = 'both',
	...otherProps
}: Props) {
	const layout = tv({
		base: 'relative box-border flex h-[6.7rem] w-full shrink-0 items-center gap-4 rounded-[0.5px] px-5 text-[2.5rem] transition-all duration-100 hover:z-10 border-gray-light dark:border-gray text-left',
		// base: 'relative box-border flex h-[6.7rem] w-full shrink-0 items-center gap-4 rounded-[0.5px] px-5 text-[2.5rem] transition-all duration-100 hover:z-10 border-gray text-left',
		variants: {
			edgeDirection: {
				top: 'border-t-2',
				bottom: 'border-b-2',
				both: 'border-t-2 border-b-2',
			},
			disabled: {
				true: 'text-disabled',
				false: 'outline-wiggle outline-wiggle-focus background-highlight',
			},
		},
	})

	return (
		<Component
			className={layout({
				disabled: disabled,
				edgeDirection: edgeDirection,
				className: className,
			})}
			tabIndex={disabled ? -1 : tabIndex}
			{...otherProps}
		>
			{children}
		</Component>
	)
}

export default SelectionSetting
