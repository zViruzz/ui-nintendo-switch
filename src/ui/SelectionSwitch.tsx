import { type ReactNode, useState } from 'react'
import { tv } from 'tailwind-variants'
import cn from '../utils/cn'
import SelectionSetting from './SelectionSetting'

interface Props {
	children: ReactNode
	className?: string
	onSwitch?: (bol: boolean) => void
	initial?: boolean
}

function SelectionSwitch({ children, className, initial = false, onSwitch }: Props) {
	const [value, setValue] = useState(initial)

	const handleClick = () => {
		const newValue = !value
		setValue(newValue)

		if (onSwitch) {
			onSwitch(newValue)
		}
	}

	const isOn = tv({
		base: 'text-[2.2rem]',
		variants: {
			disabled: {
				true: 'text-secodary',
				false: 'text-disabled',
			},
		},
	})

	return (
		<>
			<SelectionSetting
				className={cn('flex justify-between items-center', className)}
				as='button'
				onClick={handleClick}
				type='button'
			>
				<div>{children}</div>
				<div className={isOn({ disabled: value })}>{value ? 'Si' : 'No'}</div>
			</SelectionSetting>
		</>
	)
}

export default SelectionSwitch
