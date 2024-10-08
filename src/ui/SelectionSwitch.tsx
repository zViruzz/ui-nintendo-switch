import { type ReactNode, useState } from 'react'
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

	return (
		<>
			<SelectionSetting
				className={cn('flex justify-between items-center', className)}
				as='button'
				onClick={handleClick}
				type='button'
			>
				<div>{children}</div>
				<div
					className={`text-[2.2rem] ${value ? 'text-secodary' : 'text-disabled'}`}
				>
					{value ? 'Si' : 'No'}
				</div>
			</SelectionSetting>
		</>
	)
}

export default SelectionSwitch
