import { useEffect } from 'react'
import { useControllerContext } from '../../context/controller'
import { Outlet, unstable_useViewTransitionState, useLocation } from 'react-router-dom'

export default function Controllers () {
  const { controllerButtonB } = useControllerContext()
  const routes = useLocation()
  const lol = unstable_useViewTransitionState(routes)
  console.log('🚀 ~ Controllers ~ lol:', lol)

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
    <div className='w-full h-full grid place-content-center text-5xl'>
      <div className='absolute w-screen h-screen p-16 bg-[#0c1720b1] backdrop-blur-md transition-all'>
        <div className='bg-gray-message w-full h-full rounded-xl grid grid-rows-[1fr_7.5fr] grid-cols-[1fr_42rem]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
