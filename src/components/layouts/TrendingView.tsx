import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useControllerContext } from '../../context/controller'
import { useTrendingContext } from '../../context/trending'
import Footer from '../Footer'
import ArrowIcon from '../icons/ArrowIcon'
import profileUser from '../../assets/images/vivi.jpg'

export default function TrendingView () {
  const { controllerButtonB, controllerButtonA } = useControllerContext()
  const { t } = useTranslation()
  const {
    selectItem: {
      id,
      title,
      url
    },
    isHiddenMenu
  } = useTrendingContext()

  useEffect(() => {
    controllerButtonB(t('controller.buttonB.back'), () => {
      history.back()
    })
    controllerButtonA(t('controller.buttonA.ok'), () => {
    })
  }, [])

  return (
    <section id={title} className={`${isHiddenMenu ? 'invisible' : 'visible'} absolute top-0 h-screen w-screen left-0 flex`}>
      <div className='flex items-center basis-[9.4rem] bg-[#11192094] backdrop-blur-2xl'>
        <button className='rounded-none bg-transparent border-none w-full h-40 grid place-content-center'>
          <ArrowIcon className='w-[3.7rem] h-[3.7rem]' />
        </button>
      </div>

      <div className='bg-[#484848] grow grid grid-rows-[8fr_1fr] '>
        <div className='mt-20 px-[8.7rem]'>
          <div className='flex gap-12'>
            <img className='w-[24rem] h-[24rem]' src={url} alt="" />
            <div className=' w-full flex flex-col'>
              <h2 className='text-5xl grow mt-[6.5rem] px-10'>
                {title}
              </h2>
              <button
                onClick={() => {
                  console.log('asdasdasdasdasd')
                }}
                id={id}
                className='w-full h-[6.5rem] bg-[#515151] outline-wiggle-focus shadow-button'
              >
                Start
              </button>
            </div>
          </div>

          <div className='mt-14'>
            <div className='flex justify-between mb-2'>
              <div className='flex items-center gap-3'>
                <div className={'bg-description h-[65%] w-[8px]'} />
                <h3>Friends whohave played this game</h3>
              </div>
            </div>

            <div className='mt-10'>
              <div className='flex gap-5 px-16'>
                <img
                  className='w-20 h-20 rounded-full'
                  src={profileUser}
                  alt="profile user friend" />
                  <div >
                    <h3>Mr beast</h3>
                    <p className='text-neutral-400 text-2xl'>Played for 5 hours or more</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <div className='flex items-center basis-[9.4rem] bg-[#11192094] backdrop-blur-2xl'>
        <button className='rounded-none bg-transparent border-none w-full h-40 grid place-content-center rotate-180'>
          <ArrowIcon className='w-[3.7rem] h-[3.7rem]' />
        </button>
      </div>
    </section>)
}
