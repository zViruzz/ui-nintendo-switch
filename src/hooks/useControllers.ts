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
		if (settingButtonA) controllerButtonA(settingButtonA)
		if (settingButtonB) controllerButtonB(settingButtonB)
		if (settingButtonX) controllerButtonX(settingButtonX)
		if (settingButtonY) controllerButtonY(settingButtonY)
	}, [dependence])

	return {}
}
