import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useControllerContext } from '../../context/controller'
import { Outlet } from 'react-router-dom'

export default function Controllers () {
  const { controllerButtonB } = useControllerContext()

  useEffect(() => {
    controllerButtonB({
      text: 'controller.buttonB.back',
      route: '/',
      action: () => {
        console.log('back')
      }
    })
  }, [])

  return (
    <motion.div
      className='grid grid-rows-[20%_minmax(100px,_1fr)_22%] h-full w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className='absolute w-screen h-screen p-16 bg-[#0c1720b1] backdrop-blur-md transition-all'>
        <div className='bg-gray-message w-full h-full rounded-xl grid grid-rows-[1fr_7.5fr] grid-cols-[1fr_42rem]'>
          <Outlet />
        </div>
      </div>
    </motion.div>

  )
}
