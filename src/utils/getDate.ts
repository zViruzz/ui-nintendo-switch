export function getDate() {
	const fechaActual = new Date()
	const hora = fechaActual.getHours()
	const minutos = fechaActual.getMinutes()

	// Formatear la hora y los minutos en formato de 24 horas
	const horaFormateada = hora.toString().padStart(2, '0')
	const minutosFormateados = minutos.toString().padStart(2, '0')

	// Devolver la hora y los minutos formateados
	return `${horaFormateada}:${minutosFormateados}`
}
