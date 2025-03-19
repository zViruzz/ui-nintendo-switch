import type { HTMLAttributes } from 'react'
import { useControllerContext } from '../context/controller'
import ButtonAIcon from '../icons/ButtonAIcon'
import ButtonBIcon from '../icons/ButtonBIcon'
import ButtonXIcon from '../icons/ButtonXIcon'
import ButtonYIcon from '../icons/ButtonYIcon'
import NSwitchIcon from '../icons/NSwitchIcon'
import cn from '../utils/cn'

interface Props extends HTMLAttributes<HTMLDivElement> {
	className?: string
}

function Footer({ className, ...otherProps }: Props) {
	const { buttonA, buttonB, buttonX, buttonY } = useControllerContext()

	const handleButtonAClick = () => {
		buttonA.onClick()
	}
	const handleButtonBClick = () => {
		buttonB.onClick()
	}
	const handleButtonXClick = () => {
		buttonX.onClick()
	}
	const handleButtonYClick = () => {
		buttonY.onClick()
	}

	return (
		<footer className={cn('px-[2.5%] ', className)} {...otherProps}>
			<div className='flex justify-between items-center h-full px-[1.8%] border-t-2 dark:border-white border-neutral-800'>
				<div>
					<NSwitchIcon width={100} height={60} />
				</div>
				<div className='flex text-4xl h-full gap-8'>
					{buttonY.text === '' ? null : (
						<button
							id='buttonY'
							className='flex my-2 gap-6 px-5 items-center bg-transparent border-none focus-visible:bg-[#2fffea3c] rounded-lg active:bg-[#2fffea3c] focus-visible:outline-hidden'
							type='button'
							onClick={handleButtonYClick}
						>
							<div>
								<ButtonYIcon className='' width={42} height={42} />
							</div>
							<p>{buttonY.text}</p>
						</button>
					)}

					{buttonX.text === '' ? null : (
						<button
							id='buttonX'
							className='flex my-3 gap-6 px-5 items-center bg-transparent border-none focus-visible:bg-[#2fffea3c] rounded-lg active:bg-[#2fffea3c] focus-visible:outline-hidden'
							type='button'
							onClick={handleButtonXClick}
						>
							<div>
								<ButtonXIcon width={41} height={42} />
							</div>
							<p>{buttonX.text}</p>
						</button>
					)}

					{buttonB.text === '' ? null : (
						<button
							id='buttonB'
							className='flex my-2 gap-6 px-5 items-center bg-transparent border-none focus-visible:bg-[#2fffea3c] rounded-lg active:bg-[#2fffea3c] focus-visible:outline-hidden'
							type='button'
							onClick={handleButtonBClick}
						>
							<div>
								<ButtonBIcon className='' width={42} height={42} />
							</div>
							<p>{buttonB.text}</p>
						</button>
					)}

					{buttonA.text === '' ? null : (
						<button
							id='buttonA'
							className='flex my-2 gap-6 px-5 items-center bg-transparent border-none focus-visible:bg-[#2fffea3c] rounded-lg active:bg-[#2fffea3c] focus-visible:outline-hidden'
							type='button'
							onClick={handleButtonAClick}
						>
							<div>
								<ButtonAIcon width={42} height={42} />
							</div>
							<p>{buttonA.text === '' ? 'Start' : buttonA.text}</p>
						</button>
					)}
				</div>
			</div>
		</footer>
	)
}

export default Footer
