import { tv } from 'tailwind-variants'

const stylesSlots = tv({
	slots: {
		constainerMain: 'px-[17.5%]',
		containerOptions: 'pt-[5%]',
		detailSetting: 'text-[1.6rem]/9 text-description px-5 pt-3 pb-14',
	},
})

export const { detailSetting, constainerMain, containerOptions } = stylesSlots()
