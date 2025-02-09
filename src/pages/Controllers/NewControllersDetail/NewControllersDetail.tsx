import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NewControllersDetail() {
  return (
    <motion.div
      className='px-[8.2%] py-[4%] grid grid-rows-[4fr_1.1fr] w-full h-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className='w-full h-full grid grid-rows-[1.6fr_2fr] gap-5'>
        <div className='bg-neutral-600 rounded-md grid grid-cols-[2fr_1fr] '>
          <div className='p-[4%]'>
            <p className='text-4xl'>Paring controllers with a USB connector</p>
            <p className='text-[2.1rem] mt-5'>
              Connect to the console using a USB charging cable
            </p>
          </div>
          <div>image</div>
        </div>

        <div className='bg-neutral-600 rounded-md grid grid-cols-[2fr_1fr] '>
          <div className='p-[4%] '>
            <p className='text-4xl'>Paring controllers with a USB connector</p>
            <p className='text-[2.1rem] mt-5'>
              Connect to the console using a USB charging cable
            </p>
          </div>
          <div>image</div>
        </div>
      </div>

      <div className='text-2xl md:text-3xl lg:text-4xl flex flex-col items-center justify-end gap-5'>
        <Link
          className='border-[3px] border-white w-[60%] h-[6.6rem] flex justify-center items-center rounded-lg outline-offset-[-3px] highlight-selection-light'
          to='/controllers'
        >
          Done
        </Link>
      </div>
    </motion.div>
  )
}
