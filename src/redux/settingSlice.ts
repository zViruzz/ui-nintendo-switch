import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

interface BrightnessSettings {
	value: number
	autoBrightness: boolean
}

interface SettingsType {
	brightness: BrightnessSettings
	filter: 'Grayscale' | 'Default' | 'Invert'
}

const initialState: SettingsType = {
	brightness: {
		value: 50,
		autoBrightness: false,
	},
	filter: 'Default',
}

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		changeBrightness: (state, action: PayloadAction<number>) => {
			state.brightness.value = action.payload
		},
		changeAutoBrighness: (state, action: PayloadAction<boolean>) => {
			state.brightness.autoBrightness = action.payload
		},
		changeFilter: (state, action: PayloadAction<'Grayscale' | 'Default' | 'Invert'>) => {
			state.filter = action.payload
		},
	},
})

export const { changeBrightness, changeAutoBrighness, changeFilter } =
	settingsSlice.actions
export default settingsSlice.reducer
