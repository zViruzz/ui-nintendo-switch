import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function RedirecApp() {
	const navigate = useNavigate()

	useEffect(() => {
		navigate('/app')
	}, [])

	return null
}
