import './global.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { ControllerProvider } from './context/controller'
import WelcomeMmessage from './components/WelcomeMmessage'

function App () {
  return (
    <>
      <ControllerProvider>
          <main>
          <WelcomeMmessage/>
          <Outlet />
        </main>
        <Footer />
      </ControllerProvider>
    </>
  )
}

export default App
