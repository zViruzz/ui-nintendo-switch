import { disableInstantTransitions } from 'framer-motion'
import { type ReactNode, useState } from 'react'
import { tv } from 'tailwind-variants'
import cn from '../utils/cn'
import SelectionSetting from './SelectionSetting'

interface Props {
	children: ReactNode
	className?: string
}

function SelectionSwitch({ children, className }: Props) {
	const [value, setValue] = useState(false)
	const handleClick = () => {
		setValue(!value)
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
				<div className={isOn({ disabled: value })}>
					{value ? 'Si' : 'No'}
				</div>
			</SelectionSetting>
		</>
	)
}

export default SelectionSwitch
