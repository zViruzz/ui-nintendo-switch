import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import controllers from '../../../assets/images/nintendo-swith-gray-icon-none-left.webp'
import controllersGrayLeft from '../../../assets/images/controllers-left-gray.webp'
import ArrowDown from '../../../icons/ArrowDown'

export default function NewControllers() {
  return (
    <motion.div
      className='px-[3%] py-[4.9%] grid grid-rows-[2fr_5fr_1fr] w-full h-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className='text-center'>
        <p className='text-3xl md:text-4xl lg:text-5xl '>
          You can pair controllers at any time by attaching them to the console
        </p>
        <p className='text-[3.4rem] md:text-3xl lg:text-4xl text-center pt-[1%] text-description'>
          Once paired, you can use the controllers even then they aren't attached to the
          console.
        </p>
      </div>

      <div className='justify-center items-center flex relative'>
        <ArrowDown className='w-[4.5rem] h-[4.5rem] absolute top-[1rem] right-[22.5rem] animate-[arrowInitial_2s_infinite_ease-in-out] ' />

        <img
          src={controllersGrayLeft}
          alt='controllers'
          className='w-[44.5rem] absolute inset-0 m-auto animate-[moveUpDown_2s_infinite_ease-in-out]'
        />
        <img src={controllers} alt='controllers' className='w-[44.5rem]' />
      </div>

      <div className='text-2xl md:text-3xl lg:text-4xl flex flex-col items-center justify-center gap-5'>
        <Link
          className='border-[3px] border-white w-[44.2%] h-[6.6rem] flex justify-center items-center rounded-lg outline-offset-[-3px] highlight-selection-light'
          to='/controllers'
        >
          Done
        </Link>

        <Link
          className='border-[3px] border-white w-[33.5%] h-[5.4rem] flex justify-center items-center rounded-lg outline-offset-[-3px] highlight-selection-light'
          to='/controllers/new-controllers-detail'
        >
          View Other Pairing Methods
        </Link>
      </div>
    </motion.div>
  )
}
