import { useEffect } from 'react'
import { useControllerContext } from '../../context/controller'

export default function News () {
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
    <div>Cooming soon</div>
  )
}
