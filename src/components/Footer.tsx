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
			<div className='flex justify-between items-center h-full px-[1.8%] border-t-1 dark:border-neutral-300 border-neutral-800 lg:border-t-2'>
				<div>
					{/*<NSwitchIcon width={100} height={60} />*/}
					<NSwitchIcon className='lg:w-[6.25rem] lg:h-[3.75rem] w-[2.6rem] h-[1.4rem]' />
				</div>
				<div className='flex text-base h-full gap-2 lg:text-4xl lg:gap-8'>
					{buttonY.text === '' ? null : (
						<button
							id='buttonY'
							className='flex my-[3px] gap-2 px-2 items-center bg-transparent border-none focus-visible:bg-[#2fffea3c] rounded-lg active:bg-[#2fffea3c] focus-visible:outline-hidden lg:gap-6 lg:px-5 lg:my-2'
							type='button'
							onClick={handleButtonYClick}
						>
							<div>
								<ButtonYIcon width={42} height={42} />
							</div>
							<p>{buttonY.text}</p>
						</button>
					)}

					{buttonX.text === '' ? null : (
						<button
							id='buttonX'
							className='flex my-[3px] gap-2 px-2 items-center bg-transparent border-none focus-visible:bg-[#2fffea3c] rounded-lg active:bg-[#2fffea3c] focus-visible:outline-hidden lg:gap-6 lg:px-5 lg:my-2'
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
							className='flex my-[3px] gap-2 px-2 items-center bg-transparent border-none focus-visible:bg-[#2fffea3c] rounded-lg active:bg-[#2fffea3c] focus-visible:outline-hidden lg:gap-6 lg:px-5 lg:my-2'
							type='button'
							onClick={handleButtonBClick}
						>
							<div>
								<ButtonBIcon className='lg:w-[2.64rem] lg:h-[2.64rem] w-[1.2rem] h-[1.2rem]' />
							</div>
							<p>{buttonB.text}</p>
						</button>
					)}

					{buttonA.text === '' ? null : (
						<button
							id='buttonA'
							className='flex my-[3px] gap-2 px-2 items-center bg-transparent border-none focus-visible:bg-[#2fffea3c] rounded-lg active:bg-[#2fffea3c] focus-visible:outline-hidden lg:gap-6 lg:px-5 lg:my-2'
							type='button'
							onClick={handleButtonAClick}
						>
							<div>
								<ButtonAIcon className='lg:w-[2.64rem] lg:h-[2.64rem] w-[1.2rem] h-[1.2rem]' />
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
