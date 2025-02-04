import type { HTMLAttributes } from 'react'
import { useControllerContext } from '../context/controller'
import NSwitchIcon from '../icons/NSwitchIcon'
import cn from '../utils/cn'
import ButtonAIcon from '../icons/ButtonAIcon'
import ButtonBIcon from '../icons/ButtonBIcon'

interface Props extends HTMLAttributes<HTMLDivElement> {
	className?: string
}

function Footer({ className, ...otherProps }: Props) {
	const { buttonA, buttonB } = useControllerContext()

	const handleButtonAClick = () => {
		buttonA.onClick()
	}
	const handleButtonBClick = () => {
		buttonB.onClick()
	}

	return (
		<footer className={cn('px-[2.5%] border-t-2', className)} {...otherProps}>
			<div className='flex justify-between items-center h-full px-[1.8%]'>
				<div>
					<NSwitchIcon width={100} height={60} />
				</div>
				<div className='flex text-4xl h-full gap-8'>
					{buttonB.text === '' ? null : (
						<button
							id='buttonB'
							className='flex my-2 gap-6 px-5 items-center bg-transparent border-none focus-visible:bg-[#2fffea3c] active:bg-[#2fffea3c] focus-visible:outline-hidden'
							type='button'
							onClick={handleButtonBClick}
						>
							<div>
								<ButtonBIcon width={42} height={42} />
							</div>
							<p>{buttonB.text}</p>
						</button>
					)}

					{buttonA.text === '' ? null : (
						<button
							id='buttonA'
							className='flex my-2 gap-6 px-5 items-center bg-transparent border-none focus-visible:bg-[#2fffea3c] active:bg-[#2fffea3c] focus-visible:outline-hidden'
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
