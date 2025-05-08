import { type ChangeEvent, type FormEvent, useEffect, useRef, useState } from 'react'
import cn from '../utils/cn'

interface Props {
	title: string
	isHidden: boolean
	setIsHidden: (bol: boolean) => void
	initialValue: string
	onSubmit: (value: string) => void
	maxLength: number
}

export default function EditField({
	title,
	isHidden,
	setIsHidden,
	initialValue,
	onSubmit,
	maxLength,
}: Props) {
	const containerRef = useRef<HTMLDivElement>(null)
	const containerInputRef = useRef<HTMLFormElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)
	const [value, setValue] = useState<string>(initialValue)
	console.log('🚀 ~ value:', value)

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		onSubmit(value)
		setIsHidden(true)
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
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
				setValue(initialValue)
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
				isHidden ? 'invisible' : 'visible bg-[#00000090] backdrop-blur-md',
			)}
		>
			<div className='ml-48 mt-20 text-4xl'>
				<h2>{title}</h2>
			</div>

			<div className='grid place-content-center'>
				<form onSubmit={handleSubmit} ref={containerInputRef}>
					<input
						onChange={handleChange}
						className='w-[37rem] rounded-t-lg border-white bg-transparent px-5 text-6xl focus-within:border-b-4 focus-within:outline-hidden'
						ref={inputRef}
						type='text'
						value={value}
						maxLength={maxLength}
					/>
					<div className='flex justify-end text-disabled'>
						{value.length} / {maxLength}
					</div>
				</form>
			</div>
		</div>
	)
}
