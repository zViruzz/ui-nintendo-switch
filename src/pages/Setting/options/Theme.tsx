import { useThemeContext } from '../../../context/theme'

export function Theme() {
	const { setTheme } = useThemeContext()

	const handleClickBlack = () => {
		setTheme('dark')
	}

	const handleClickWhite = () => {
		setTheme('light')
	}

	return (
		<div className='flex flex-col gap-2'>
			<button
				type='button'
				className='bg-black text-white h-20 w-30'
				onClick={handleClickBlack}
			>
				black
			</button>
			<button
				type='button'
				className='bg-white text-black h-20 w-30'
				onClick={handleClickWhite}
			>
				white
			</button>
			<div>
				<p>Preview</p>
				<div className='w-40 h-20 bg-neutral-400 dark:bg-neutral-900' />
			</div>
		</div>
	)
}
