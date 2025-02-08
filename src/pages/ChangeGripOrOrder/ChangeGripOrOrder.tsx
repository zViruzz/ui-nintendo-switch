import { motion } from 'framer-motion'
import controllersIllust3 from '../../assets/images/change-grip-or-order-controller3.webp'
import controllersIllust4 from '../../assets/images/change-grip-or-order-controller4.webp'
import controllersIllust from '../../assets/images/change-grip-or-order-controllers.webp'
import controllersIllust2 from '../../assets/images/change-grip-or-order-controllers2.webp'
import { useControllerContext } from '../../context/controller'
import useControllers from '../../hooks/useControllers'
import ButtonBIcon from '../../icons/ButtonBIcon'
import MinusIcon from '../../icons/MinusIcon'
import PlusIcon from '../../icons/PlusIcon'
import SlashIcon from '../../icons/SlashIcon'

export default function ChangeGripOrOrder() {
	const { buttonB } = useControllerContext()

	const handleClickB = () => {
		buttonB.onClick()
	}

	useControllers({
		settingButtonA: {
			text: 'controller.buttonA.ok',
		},
		settingButtonB: {
			text: 'controller.buttonB.back',
			route: -1,
		},
	})

	return (
		<motion.div
			className='grid grid-rows-[2.95fr_7fr_1.1fr] h-screen w-screen bg-[#0c1720b1] backdrop-blur-md'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, delay: 0.5 }}
		>
			<div className='flex justify-center items-center'>
				<div className='h-[47%]'>
					<img className='h-full' src={controllersIllust} alt='controllers' />
				</div>
				<div className='w-[39%] h-full px-[4%] py-[1.6%]'>
					<div className='dialogue-cloud flex flex-col'>
						<div className='grid grid-cols-[1fr_1fr] items-center justify-center justify-items-center flex-1'>
							<img className='h-[65px]' src={controllersIllust3} alt='' />
							<img className='h-[65px]' src={controllersIllust4} alt='' />
						</div>
						<div className='basis-[27%]'>
							<p className='text-[2.1rem] text-center'>Two players are also supported.</p>
						</div>
					</div>
				</div>
				<div className='h-[45%]'>
					<img className='h-full' src={controllersIllust2} alt='controllers' />
				</div>
			</div>

			<div className='bg-[#ffffffcc] grid grid-rows-[1fr_2fr_0.8fr] xl:text-5xl text-2xl text-neutral-600'>
				<div className='flex justify-center items-center'>
					Press L + R on the controller
				</div>
				<div className='flex gap-8 justify-center px-[9%] [&>div]:border [&>div]:border-neutral-400 [&>div]:h-full [&>div]:w-full [&>div]:grid [&>div]:place-content-center'>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
				</div>
				<div className='flex justify-center items-center'>Pres when youre ready</div>
			</div>
			<div className='flex justify-end px-[4%] py-2 text-4xl [&>button]:flex [&>button]:justify-center [&>button]:items-center [&>button]:focus-visible:bg-[#2fffea3c] [&>button]:rounded-lg [&>button]:active:bg-[#2fffea3c] [&>button]:focus-visible:outline-hidden [&>button]:px-6 gap-3'>
				<button type='button'>
					<PlusIcon />
					<SlashIcon />
					<MinusIcon />
					<p className='ml-3'>Controller Not Connecting</p>
				</button>

				<button type='button'>
					<PlusIcon />
					<SlashIcon />
					<MinusIcon />
					<p className='ml-3'>(Hold) Search</p>
				</button>

				<button onClick={handleClickB} type='button'>
					<ButtonBIcon width={43} height={43} />
					<p className='ml-4'>Back</p>
				</button>
			</div>
		</motion.div>
	)
}
