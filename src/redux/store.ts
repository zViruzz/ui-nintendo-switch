import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { type PersistedState, createMigrate, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import settingsReducer from './settingSlice'
import userReducer, { type UserType } from './userSlice'

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
}

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'settings'],
	version: 1,
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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
