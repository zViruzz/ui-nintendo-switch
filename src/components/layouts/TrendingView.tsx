import Footer from '../Footer'
import { useTrendingContext } from '../../context/trending'

export default function TrendingView () {
  const {
    selectItem: {
      title,
      url
    },
    isHiddenMenu

  } = useTrendingContext()

  return (
    <section className={`${isHiddenMenu ? 'invisible' : 'visible'} absolute top-0 h-screen w-screen left-0 flex`}>
      <button className='rounded-none'>{'<'}</button>
      <div className='bg-primary grow grid grid-rows-[8fr_1fr] '>
        <div className='mt-14 px-28'>
          <div className='flex gap-10'>
            <img className='w-[20rem] h-[20rem]' src={url} alt="" />
            <div className=' w-full flex flex-col'>
              <h2 className='text-5xl grow pt-12 px-8'>{title}</h2>
              <button className='w-full h-[6.5rem] bg-neutral-700 shadow-button'>Start</button>
            </div>
          </div>

          <div>
            <p></p>
            <div>
              <p>Friendss</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <button className='rounded-none'>{'>'}</button>
    </section>)
}
