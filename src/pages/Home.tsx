import { motion } from 'framer-motion'
import UserStatus from '../components/UserStatus'
import MenuHome from '../components/MenuHome'
import ViewGame from '../components/ViewGame'
import { useControllerContext } from '../context/controller'
import { useEffect } from 'react'
function Home () {
  const { controllerButtonB, controllerButtonA } = useControllerContext()
  useEffect(() => {
    controllerButtonA({
      text: 'controller.buttonA.ok'
    })

    controllerButtonB({
      text: 'controller.buttonB.back'
    })
  }, [])
  return (
    <>
      <motion.section
        className='grid grid-rows-[20%_minmax(100px,_1fr)_23%] h-full w-full'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* <section className='grid grid-rows-[20%_minmax(100px,_1fr)_22%] h-full w-full '> */}
          <UserStatus />
          <ViewGame />
          <MenuHome />
        {/* </section> */}
      </motion.section>
    </>
  )
}

export default Home
