import { type ReactNode, useEffect, useState } from 'react'
import OpacityPageTransition from '../../transitions/OpacityPageTransition'

export default function Loading({ children }: { children: ReactNode }) {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 3000) // 2 segundos de retraso

		return () => clearTimeout(timer) // Limpiar el temporizador al desmontar
	}, [])

	if (isLoading) {
		return (
			<OpacityPageTransition className='w-full h-full pt-5 grid grid-rows-[auto_7.5fr]'>
				<p>Loading Eshop... lol</p>
			</OpacityPageTransition>
		) // Pantalla de carga
	}

	return children
}
