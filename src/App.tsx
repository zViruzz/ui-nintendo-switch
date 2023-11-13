import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App () {
  return (
    <>
     <main>
        <Outlet />
     </main>
     <Footer/>
    </>
  )
}

export default App
