import { useEffect, useRef } from 'react'
import { tv } from 'tailwind-variants'
import { useCardMessageContext } from '../../context/cardMessage'
import cn from '../../utils/cn'

export default function CardMessage() {
	const { setting } = useCardMessageContext()

	const modalRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const disableTabbingBehind = (disable: boolean) => {
			const focusableElements = document.querySelectorAll(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
			)
			for (const element of focusableElements) {
				if (!modalRef.current?.contains(element)) {
					;(element as HTMLElement).setAttribute(
						'tabIndex',
						disable ? '-1' : '0',
					)
				}
			}
		}
		disableTabbingBehind(!setting.isHidden)
	}, [setting.isHidden])

	const buttonsContainer = tv({
		base: 'w-full flex',
		variants: {
			disabled: {
				true: 'flex-col',
				false: 'flex-row divide-x-2 divide-opacity-20 divide-white',
			},
		},
	})

	return (
		<div
			className={cn(
				'absolute w-screen h-screen bg-[#0c1720b1] z-40 flex justify-center items-center transition-all top-0 left-0',
				setting.isHidden ? 'invisible opacity-0' : 'visible',
			)}
			ref={modalRef}
			id='card-message'
			tabIndex={-1}
		>
			<div className='bg-gray-message w-[72rem]  rounded-lg flex flex-col relative'>
				<div className='w-full h-full text-4xl px-28 pt-20'>
					{setting.children}
				</div>
				<div
					className={buttonsContainer({ disabled: setting.column })}
				>
					{Array.isArray(setting.buttons) ? (
						setting.buttons.map((item) => (
							<button
								type='button'
								className='bg-blue-hight-focus outline-wiggle-focus focus:bg-opacity-40 hover:bg-opacity-40 bg-transparent border-0 border-t-2 border-t-white border-opacity-20 text-secodary w-full h-[6.7rem] rounded-sm text-4xl active:bg-secodary/[.06] active:outline-0 transition-all duration-75'
								key={item.label}
								onClick={item.onClick}
							>
								{item.label}
							</button>
						))
					) : (
						<button
							type='button'
							className='bg-blue-hight-focus outline-wiggle-focus focus:bg-opacity-40 hover:bg-opacity-40 bg-transparent border-0 border-t-2 border-t-white border-opacity-20 text-secodary w-full h-[6.7rem] rounded-sm text-4xl active:bg-secodary/[.06] active:outline-0 transition-all duration-75'
							key={setting.buttons.label}
							onClick={setting.buttons.onClick}
						>
							{setting.buttons.label}
						</button>
					)}
				</div>
			</div>
		</div>
	)
}
