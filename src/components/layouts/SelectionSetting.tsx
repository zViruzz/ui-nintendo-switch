import type { AllHTMLAttributes, ElementType, ReactNode } from 'react'
import { tv } from 'tailwind-variants'

interface Props extends Omit<AllHTMLAttributes<HTMLElement>, 'as'> {
	as?: string | ElementType
	children: ReactNode
	className?: string
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
	...otherProps
}: Props) {
	const layout = tv({
		base: 'relative box-border flex h-[6.7rem] w-full shrink-0 items-center gap-4 rounded-[0.5px] px-5 text-[2.5rem] transition-all duration-100 hover:z-10',
		variants: {
			disabled: {
				true: 'text-disabled',
				false:
					'outline-wiggle outline-wiggle-focus hover:bg-blueHight focus-visible:bg-blueHight',
			},
		},
	})

	return (
		<Component
			className={layout({
				disabled: disabled,
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
