import { useEffect } from 'react'
import { type ControllerButtonParams, useControllerContext } from '../context/controller'

interface Params {
	settingButtonB: ControllerButtonParams
	settingButtonA: ControllerButtonParams
	dependence?: boolean
}

export default function useControllers({
	settingButtonA,
	settingButtonB,
	dependence = true,
}: Params) {
	const { controllerButtonA, controllerButtonB } = useControllerContext()

	useEffect(() => {
		if (!dependence) return
		controllerButtonA(settingButtonA)
		controllerButtonB(settingButtonB)
	}, [dependence])

	return {}
}
