import { useControllerContext } from '../context/controller'
import NSwitchIcon from '../icons/NSwitchIcon'

function Footer() {
	const { buttonA, buttonB } = useControllerContext()

	const handleButtonAClick = () => {
		buttonA.onClick()
	}
	const handleButtonBClick = () => {
		buttonB.onClick()
	}

	return (
		<footer className='mx-[2.5%] border-t-2'>
			<div className='flex justify-between items-center h-full px-[1.8%]'>
				<div>
					<NSwitchIcon width={100} height={60} />
				</div>
				<div className='flex text-4xl h-full gap-8'>
					{buttonB.text === '' ? null : (
						<button
							id='buttonB'
							className='flex my-2 gap-6 px-5 items-center bg-transparent border-none focus-visible:bg-[#2fffea3c] active:bg-[#2fffea3c] focus-visible:outline-none'
							type='button'
							onClick={handleButtonBClick}
						>
							<div className='bg-white text-[#2d2d2d] font-bold h-[38px] w-[38px] flex justify-center items-center rounded-full text-[1.7rem] '>
								B
							</div>
							<p>{buttonB.text}</p>
						</button>
					)}

					{buttonA.text === '' ? null : (
						<button
							id='buttonA'
							className='flex my-2 gap-6 px-5 items-center bg-transparent border-none focus-visible:bg-[#2fffea3c] active:bg-[#2fffea3c] focus-visible:outline-none'
							type='button'
							onClick={handleButtonAClick}
						>
							<div className='bg-white text-[#2d2d2d] font-bold h-[38px] w-[38px] flex justify-center items-center rounded-full text-[1.7rem] '>
								A
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
