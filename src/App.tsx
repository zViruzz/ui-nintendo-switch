import './global.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { ControllerProvider } from './context/controller'

function App () {
  return (
    <>
      <ControllerProvider>
        <main>
          <Outlet />
        </main>
        <Footer />
      </ControllerProvider>
    </>
  )
}

export default App
