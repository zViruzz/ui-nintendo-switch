import { useEffect, useRef } from 'react'
import { useAppSelector } from '../redux/hooks'

function CharacterProfile(props: any) {
	const { character, background } = useAppSelector(
		(state) => state.user,
	)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (canvas === null) return
		const ctx = canvas.getContext('2d')
		if (ctx === null) return

		ctx.fillStyle = background
		ctx.fillRect(0, 0, canvas.width, canvas.height)

		if (character !== null) {
			const overlayImg = new Image()
			overlayImg.src = character

			overlayImg.onload = () => {
				// Ajusta la posición y el tamaño según tus necesidades
				ctx.drawImage(overlayImg, 0, 0, canvas.width, canvas.height)
			}
		}
	}, [character, background])

	return (
		<canvas ref={canvasRef} width={379} height={379} {...props} />
	)
}
export default CharacterProfile
