import { type ReactNode, useState } from 'react'
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
			<SelectionSetting tabIndex={-1} className={className}>
				<button
					className='bg-transparent border-transparent flex justify-between items-center w-full h-full px-5 outline-wiggle-focus focus-visible:bg-blueHight'
					type='button'
					onClick={handleClick}
				>
					<div>{children}</div>
					<div
						className={`text-[2.2rem] ${value ? 'text-secodary' : 'text-disabled'}`}
					>
						{value ? 'Si' : 'No'}
					</div>
				</button>
			</SelectionSetting>
		</>
	)
}

export default SelectionSwitch
