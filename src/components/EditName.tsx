import {
	type ChangeEvent,
	type FormEvent,
	useEffect,
	useRef,
	useState,
} from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../redux/hooks'
import { changeUsername } from '../redux/userSlice'
import cn from '../utils/cn'

interface Props {
	isHidden: boolean
	setIsHidden: (bol: boolean) => void
}

function EditName({ isHidden, setIsHidden }: Props) {
	const { username } = useAppSelector((state) => state.user)
	const containerRef = useRef<HTMLDivElement>(null)
	const containerInputRef = useRef<HTMLFormElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)
	const [name, setName] = useState<string>(username)
	const dispatch = useDispatch()

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		dispatch(changeUsername(name))
		setIsHidden(true)
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}

	useEffect(() => {
		setTimeout(() => {
			if (inputRef.current !== null) {
				inputRef.current.focus()
			}
		}, 250)
	}, [isHidden])

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				containerInputRef.current !== null &&
				!containerInputRef.current.contains(event.target as Node)
			) {
				setIsHidden(true)
			}
		}

		function handleClickEsc(event: KeyboardEvent) {
			if (containerRef.current === null) return
			if (containerRef.current.classList.contains('invisible')) return
			if (event.key === 'Escape') {
				setIsHidden(true)
				setName(username)
			}
		}

		document.addEventListener('keydown', handleClickEsc)

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('keydown', handleClickEsc)
		}
	}, [])

	return (
		<div
			ref={containerRef}
			className={cn(
				'absolute left-0 top-0 z-50  grid h-screen w-screen  grid-rows-3 transition-all ease-in-out',
				isHidden
					? 'invisible'
					: 'visible bg-[#00000090] backdrop-blur-md',
			)}
		>
			<div className='ml-48 mt-20 text-4xl'>
				<h2>Introduce un apodo.</h2>
			</div>

			<div className='grid place-content-center'>
				<form onSubmit={handleSubmit} ref={containerInputRef}>
					<input
						onChange={handleChange}
						className='w-[37rem] rounded-t-lg border-white bg-transparent px-5 text-6xl focus-within:border-b-4 focus-within:outline-none'
						ref={inputRef}
						type='text'
						value={name}
						maxLength={10}
					/>
					<div className='flex justify-end text-disabled'>
						{name.length} / 10
					</div>
				</form>
			</div>
		</div>
	)
}

export default EditName
