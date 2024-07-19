import { Link } from 'react-router-dom'
import controllersLeftUrl from '../../../assets/images/controllers-left.webp'
import controllersRightUrl from '../../../assets/images/controllers-right.webp'
import { motion } from 'framer-motion'

export default function FindControllers () {
  return (
    <motion.div
      className='px-[10.7%] py-[4.4%] grid grid-rows-[1fr_4fr_1.1fr] w-full h-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="text-center">
        <p className="text-3xl md:text-4xl lg:text-5xl pt-[0.8%]">Controllers will be searched for by activating the vibration feature.</p>
        <p className="text-2xl md:text-3xl lg:text-4xl text-center pt-[1%] text-description">Press ; or r on a searby controller to make the selected controller vibrate</p>
      </div>
      <div className="px-[6.2%] py-[1.7%] gap-4 grid grid-cols-res-controllers xl:grid-rows-3 2xl:grid-rows-2 [&>div]:bg-[#535353] [&>div]:shadow-button">
        <div>
          <div className='w-full h-full flex flex-col justify-evenly  items-center bg-[#767676]'>
            <p className='text-[27px]'>Console</p>
            <img
              className='w-[22%]'
              src={controllersLeftUrl}
              alt="controllers left url"
            />
            <div />
            <div />
          </div>
        </div>
        <div >
          <div className='w-full h-full flex flex-col justify-evenly  items-center bg-[#767676]'>
            <p className='text-[27px]'>Console</p>
            <img
              className='w-[22%]'
              src={controllersRightUrl}
              alt="controllers left url"
            />
            <div></div>
            <div></div>
          </div>
        </div>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="text-2xl md:text-3xl lg:text-4xl flex gap-[5.5%] items-end px-[5%]">
        <Link
          className='border-[3px] border-white w-full h-[6.6rem] bg-transparent flex justify-center items-center rounded-lg outline-offset-[-3px]  outline-wiggle-focus hover:bg-blueHightTransparent focus-visible:bg-blueHightTransparent'
          to='/controllers'>
          Back
        </Link>
        <button className='border-[3px] border-white w-full h-[6.6rem] bg-transparent rounded-lg outline-offset-[-3px]  outline-wiggle-focus hover:bg-blueHightTransparent focus-visible:bg-blueHightTransparent'>of controllers can t be found</button>
      </div>
    </motion.div>
  )
}
