import { useEffect } from 'react'
import { useControllerContext } from '../../context/controller'

export default function Album () {
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
    <div className='w-full h-full grid place-content-center text-5xl'>
      <h2>Cooming soon</h2>
    </div>
  )
}
