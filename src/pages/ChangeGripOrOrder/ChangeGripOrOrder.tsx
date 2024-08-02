import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useControllerContext } from '../../context/controller'
import controllersIllust from '../../assets/images/change-grip-or-order-controllers.webp'
import controllersIllust2 from '../../assets/images/change-grip-or-order-controllers2.webp'
import controllersIllust3 from '../../assets/images/change-grip-or-order-controller3.webp'
import controllersIllust4 from '../../assets/images/change-grip-or-order-controller4.webp'

export default function ChangeGripOrOrder () {
  const { controllerButtonB, buttonB } = useControllerContext()

  const handleClickB = () => {
    buttonB.onClick()
  }

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
      className='grid grid-rows-[2.95fr_7fr_1.1fr] h-screen w-screen bg-[#0c1720b1] backdrop-blur-md'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >

      <div className='flex justify-center items-center'>
        <div className='h-[47%]'>
          <img
            className='h-full'
            src={controllersIllust}
            alt="controllers"
          />
        </div>
        <div className='w-[39%] h-full px-[4%] py-[1.6%]'>
          <div className='dialogue-cloud flex flex-col'>
            <div className='grid grid-cols-[1fr_1fr] items-center justify-center justify-items-center flex-1'>
              <img
                className='h-[65px]'
                src={controllersIllust3}
                alt=""
              />
              <img
                className='h-[65px]'
                src={controllersIllust4}
                alt=""
              />
            </div>
            <div className='basis-[27%]'>
              <p className='text-[2.1rem] text-center'>
                Two players are also supported.
              </p>
            </div>
          </div>
        </div>
        <div className='h-[45%]'>
          <img
            className='h-full'
            src={controllersIllust2}
            alt="controllers"
          />
        </div>
      </div>

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
      <div className='flex justify-end px-[3.5%] text-4xl [&>button]:flex [&>button]:justify-center [&>button]:items-center [&>button]:gap-[10%]'>
        <button>controller not connecting</button>
        <button>{'(Hold) Search'}</button>
        <button
          className=' w-[10%]'
          onClick={handleClickB}
        >
          <div className="bg-white text-[#2d2d2d] font-bold h-[38px] w-[38px] flex justify-center items-center rounded-full text-[1.7rem] ">
            B
          </div>
          Back
        </button>
      </div>
    </motion.div>

  )
}
