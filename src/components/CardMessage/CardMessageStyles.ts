import { tv } from 'tailwind-variants'

export const styles = {
	constainer: tv({
		base: 'absolute w-screen h-screen bg-[#0c1720b1] z-40 flex justify-center items-center transition-all top-0 left-0',
		variants: {
			disabled: {
				true: 'invisible opacity-0',
				false: 'visible',
			},
		},
	}),
	buttonsContainer: tv({
		base: 'w-full flex border-t-2 dark:border-neutral-600 border-neutral-300',
		variants: {
			disabled: {
				true: 'flex-col',
				false: 'flex-row divide-x-2 divide-opacity-20 divide-white',
			},
		},
	}),
}

const stylesSlots = tv({
	slots: {
		constainerCard:
			'relative flex w-[72rem] flex-col rounded-lg bg-gray-message-light dark:bg-gray-message [&div]:bg-white',
		content: 'w-full h-full text-4xl',
		button:
			'background-highlight-transparent outline-wiggle-focus border-0 text-secodary-light dark:text-secodary w-full h-[6.7rem] rounded-xs text-4xl active:bg-secodary/[.06] active:outline-0 transition-all duration-75',
	},
})

export const { button, constainerCard, content } = stylesSlots()
