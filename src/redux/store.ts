import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { type PersistedState, createMigrate, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import settingsReducer, { type SettingsType } from './settingSlice'
import userReducer, { type UserType } from './userSlice'

const persistedState = localStorage.getItem('persist:root')
if (persistedState) {
	try {
		const parsed = JSON.parse(persistedState)

		// Verificar si el usuario no tiene settings.filter
		const settings = parsed.settings ? JSON.parse(parsed.settings) : null
		const hasFilter = settings?.filter

		// Si no tiene filter, resetear la versión para forzar migración
		if (!hasFilter && parsed._persist) {
			localStorage.removeItem('persist:root')
		}
	} catch (e) {
		console.log('Error parseando estado persistido:', e)
	}
} else {
	console.log('No hay estado persistido en localStorage')
}

const migrations = {
	0: (state: PersistedState) => {
		if (state && typeof state === 'object' && 'user' in state) {
			const userState = state.user as UserType
			if (userState && !userState.consoleNickname) {
				userState.consoleNickname = 'Switch1'
			}
		}
		return state
	},
	1: (state: PersistedState) => {
		if (state && typeof state === 'object' && 'settings' in state) {
			const settingsState = state.settings as SettingsType
			if (settingsState && !settingsState.filter) {
				settingsState.filter = 'Default'
			}
		}
		return state
	},
}

const persistConfig = {
	key: 'root',
	storage: (storage as any).default || storage,
	whitelist: ['user', 'settings'],
	version: 2,
	migrate: createMigrate(migrations, { debug: false }),
}

const rootReducer = combineReducers({
	user: userReducer,
	settings: settingsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
