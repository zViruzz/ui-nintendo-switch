import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

interface BrightnessSettings {
	value: number
	autoBrightness: boolean
}

interface SettingsType {
	brightness: BrightnessSettings
}

const initialState: SettingsType = {
	brightness: {
		value: 50,
		autoBrightness: false,
	},
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
	},
})

export const { changeBrightness, changeAutoBrighness } = settingsSlice.actions
export default settingsSlice.reducer
