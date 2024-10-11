import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		constainerMain: 'px-[20%]',
		containerOptions: 'pt-[7%]',
		detailSetting: 'text-2xl text-description px-5 pt-3 pb-12',
	},
})

export const { detailSetting, constainerMain, containerOptions } = stylesSlots()