import { useEffect, useRef } from 'react'
import { tv } from 'tailwind-variants'
import { useCardMessageContext } from '../../context/cardMessage'
import {
	button,
	constainerCard,
	content,
	styles,
} from './CardMessageStyles'

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
			className={styles.constainer({ disabled: setting.isHidden })}
			ref={modalRef}
			id='card-message'
			tabIndex={-1}
		>
			<div className={constainerCard()}>
				<div className={content()}>{setting.children}</div>
				<div
					className={buttonsContainer({ disabled: setting.column })}
				>
					{Array.isArray(setting.buttons) ? (
						setting.buttons.map((item) => (
							<button
								type='button'
								className={button()}
								key={item.label}
								onClick={item.onClick}
							>
								{item.label}
							</button>
						))
					) : (
						<button
							type='button'
							className={button()}
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
