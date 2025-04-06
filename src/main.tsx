import './i18n.ts'
import './index.css'
import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from './context/theme.tsx'
import { store } from './redux/store.ts'
import { router } from './router.tsx'

localStorage.theme = localStorage.theme || 'dark'
document.documentElement.setAttribute('data-theme', localStorage.theme)

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<PersistGate persistor={persistor}>
		<Provider store={store}>
			<ThemeProvider>
				<Suspense fallback='loading'>
					<RouterProvider router={router} />
				</Suspense>
			</ThemeProvider>
		</Provider>
	</PersistGate>,
)
