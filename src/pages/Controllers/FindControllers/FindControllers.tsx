import { Link } from 'react-router-dom'
import controllersLeftUrl from '../../../assets/images/controllers-left.webp'
import controllersRightUrl from '../../../assets/images/controllers-right.webp'
import OpacityPageTransition from '../../../transitions/OpacityPageTransition'
import QuestionIcon from '../../../icons/QuestionIcon'
import { useAnimate, type ValueAnimationTransition } from 'framer-motion'
import { type KeyboardEvent, useState } from 'react'
import cn from '../../../utils/cn'
import { useCardMessageContext } from '../../../context/cardMessage'

type VibrationAnimationConfig = {
	keyframes: { x: number[] | number }
	options: ValueAnimationTransition
}

type ControllerButtonProps = {
	imageSrc: string
	imageAlt: string
}

function ControllerButton({ imageSrc, imageAlt }: ControllerButtonProps) {
	const [isActive, setIsActive] = useState(false)
	const [controllerRef, animate] = useAnimate()

	const vibrationAnimation: VibrationAnimationConfig = {
		keyframes: { x: [-7, 7, 0] },
		options: {
			duration: 0.3,
			// biome-ignore lint/style/useNumberNamespace: <explanation>
			repeat: Infinity,
			repeatType: 'loop',
		},
	}

	const stopAnimation: VibrationAnimationConfig = {
		keyframes: { x: 0 },
		options: { duration: 0.3, repeat: 0 },
	}

	const handleStart = () => {
		setIsActive(true)
		animate(
			controllerRef.current,
			vibrationAnimation.keyframes,
			vibrationAnimation.options,
		)
	}

	const handleStop = () => {
		setIsActive(false)
		animate(controllerRef.current, stopAnimation.keyframes, stopAnimation.options)
	}

	const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === 'Enter' || e.key === ' ') {
			handleStart()
		}
	}

	return (
		<button
			type='button'
			className={cn(
				'w-full h-full flex flex-col justify-evenly items-center dark:bg-[#767676] bg-background-highlight-light outline-wiggle-focus active:bg-teal-200/30',
				{ 'dark:bg-teal-200/30': isActive },
			)}
			onKeyDown={handleKeyDown}
			onKeyUp={handleStop}
			onMouseDown={handleStart}
			onMouseUp={handleStop}
			onMouseLeave={handleStop}
			tabIndex={0}
		>
			<p className='text-[27px]'>Console</p>
			<img ref={controllerRef} className='w-[22%]' src={imageSrc} alt={imageAlt} />
			<div />
			<div />
		</button>
	)
}

export default function FindControllers() {
	const { settingMessage, onToggleHidden } = useCardMessageContext()

	return (
		<OpacityPageTransition className='px-[10.7%] py-[4.4%] grid grid-rows-[1fr_4fr_1.1fr] w-full h-full'>
			<div className='text-center'>
				<p className='text-3xl md:text-4xl lg:text-5xl pt-[0.8%]'>
					Controllers will be searched for by activating the vibration feature.
				</p>
				<p className='text-2xl md:text-3xl lg:text-4xl text-center pt-[1%] text-description'>
					Press ; or r on a searby controller to make the selected controller vibrate
				</p>
			</div>
			<div className='px-[6.2%] py-[1.7%] gap-4 grid grid-cols-res-controllers xl:grid-rows-3 2xl:grid-rows-2 [&>div]:bg-neutral-600 [&>div]:shadow-button'>
				<div>
					<ControllerButton imageSrc={controllersLeftUrl} imageAlt='Left controller' />
				</div>
				<div>
					<ControllerButton imageSrc={controllersRightUrl} imageAlt='Right controller' />
				</div>
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
			<div className='text-2xl md:text-3xl lg:text-[2.40rem] flex gap-[5.5%] items-end px-[5%]'>
				<Link
					className='border-[3px] dark:border-white border-neutral-600 w-full h-[6.6rem] bg-transparent flex justify-center items-center rounded-lg outline-offset-[-3px] outline-wiggle-focus background-highlight'
					to='/controllers'
				>
					Back
				</Link>
				<button
					type='button'
					className='flex justify-center items-center gap-3 border-[3px] dark:border-white border-neutral-600 w-full h-[6.6rem] bg-transparent rounded-lg outline-offset-[-3px] outline-wiggle-focus background-highlight'
					onClick={() => {
						settingMessage({
							isHidden: false,
							column: false,
							children: (
								<div className='py-19 pr-2'>
									<div className='h-[62vh] px-33 pr-18 overflow-y-scroll focus-visible:outline-none scroll-message'>
										<ul className='list-disc flex flex-col gap-7 text-[2.6rem]/14 pb-15'>
											<li>
												If a controller is on top of clothing or a soft object. like a
												pillow, the vibration may become difficult to hear. Please be as
												quiet as possible during the searching process.
											</li>
											<li>
												Controllers that do not have a vibration feature cannot be
												searched for by using this method.
											</li>{' '}
											<li>
												If a controller is not vibrating, try moving the console closer to
												where you think it might be or try searching for the controller
												using a different console. Controllers may not vibrate if:{' '}
											</li>
											<p>- They are too far away from the console.</p>
											<p>- They are out of battery power or have low battery power.</p>
											<p>
												- They are out not paired to a console or are paired to different
												console.
											</p>
										</ul>
									</div>
								</div>
							),
							buttons: [
								{
									label: 'OK',
									onClick: () => {
										onToggleHidden(true)
									},
								},
							],
						})
					}}
				>
					<QuestionIcon width={43} height={43} />
					if controllers can t be found
				</button>
			</div>
		</OpacityPageTransition>
	)
}
