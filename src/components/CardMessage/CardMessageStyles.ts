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
		base: 'w-full flex border-t-3 dark:border-disabled border-neutral-300 divide-x-2 ',
		variants: {
			disabled: {
				true: 'flex-col',
				false: 'flex-row divide-x-3 divide-disabled',
			},
		},
	}),
}

const stylesSlots = tv({
	slots: {
		constainerCard:
			'relative flex w-[72rem] flex-col rounded-lg bg-gray-message-light dark:bg-gray-message shadow-2xl',
		content: 'w-full h-full text-[2.6rem]/13.5',
		button:
			'background-highlight-transparent outline-wiggle-focus text-secodary-light dark:text-secodary w-full h-[6.7rem] rounded-xs text-[2.7rem] active:bg-secodary/[.06] active:outline-0 transition-all duration-75',
	},
})

export const { button, constainerCard, content } = stylesSlots()
