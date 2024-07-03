import './global.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { ControllerProvider } from './context/controller'
import WelcomeMmessage from './components/WelcomeMmessage'
import { AnimatePresence } from 'framer-motion'

function App () {
  return (
    <>
      <AnimatePresence>
        <ControllerProvider>
          <main>
            <WelcomeMmessage />
            <Outlet />
          </main>
          <Footer />
        </ControllerProvider>
      </AnimatePresence>
    </>
  )
}

export default App
