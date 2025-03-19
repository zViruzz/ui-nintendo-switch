import { useEffect } from 'react'
import { type ControllerButtonParams, useControllerContext } from '../context/controller'

interface Params {
	settingButtonB?: ControllerButtonParams
	settingButtonA?: ControllerButtonParams
	settingButtonX?: ControllerButtonParams
	settingButtonY?: ControllerButtonParams
	dependence?: boolean
}

export default function useControllers({
	settingButtonA,
	settingButtonB,
	settingButtonX,
	settingButtonY,
	dependence = true,
}: Params) {
	const { controllerButtonA, controllerButtonB, controllerButtonX, controllerButtonY } =
		useControllerContext()

	useEffect(() => {
		if (!dependence) return
		controllerButtonA(settingButtonA)
		controllerButtonB(settingButtonB)
		controllerButtonX(settingButtonX)
		controllerButtonY(settingButtonY)
	}, [dependence])

	return {}
}
