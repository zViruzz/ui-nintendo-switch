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
        // className='grid grid-rows-[1fr_3fr_1.15fr] h-full w-full'
        className='grid grid-rows-[1fr_3fr_1.85fr] h-screen w-screen '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
          <UserStatus />
          <ViewGame />
          <MenuHome />
      </motion.section>
    </>
  )
}

export default Home
