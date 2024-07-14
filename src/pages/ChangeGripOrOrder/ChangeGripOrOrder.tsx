import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useControllerContext } from '../../context/controller'

export default function ChangeGripOrOrder () {
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
      className='grid grid-rows-[2.9fr_7fr_1.1fr] h-screen w-screen bg-[#0c1720b1] backdrop-blur-md'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div></div>
      <div className='bg-[#ffffffcc] grid grid-rows-[1fr_2fr_0.8fr]  xl:text-5xl text-2xl text-neutral-600'>
        <div className='flex justify-center items-center'>
          Press L + R on the controller
        </div>
        <div className='flex gap-8 justify-center px-[9%] [&>div]:border [&>div]:border-neutral-400 [&>div]:h-full [&>div]:w-full [&>div]:grid [&>div]:place-content-center'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <div className='flex justify-center items-center'>Pres when youre ready</div>

      </div>
      <div></div>

    </motion.div>

  )
}
