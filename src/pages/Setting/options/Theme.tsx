import { useState } from 'react'
import { useThemeContext } from '../../../context/theme'
import CheckIcon from '../../../icons/CheckIcon'

export function Theme() {
	const { setTheme, theme } = useThemeContext()
	const [isDarkMode, setIsDarkMode] = useState(theme === 'dark')

	const handleClickBlack = () => {
		setTheme('dark')
		setIsDarkMode(true)
	}

	const handleClickWhite = () => {
		setTheme('light')
		setIsDarkMode(false)
	}

	return (
		<div className='flex flex-col '>
			<button
				type='button'
				className='border-y-2 dark:border-neutral-600 border-neutral-300 flex items-center p-5 justify-between'
				onClick={handleClickWhite}
			>
				<div className='flex gap-3 items-center'>
					<div className='bg-white h-23 w-37 border-neutral-400 border-2' />
					<p>Basic White</p>
				</div>
				<div>
					{!isDarkMode && <CheckIcon className='w-17 h-17  fill-secodary-light' />}
				</div>
			</button>
			<button
				type='button'
				className='border-b-2 dark:border-neutral-600 border-neutral-300 flex items-center p-5 justify-between'
				onClick={handleClickBlack}
			>
				<div className='flex gap-3 items-center'>
					<div className='bg-black h-23 w-37 border-neutral-600 border-2' />
					<p>Basic Black</p>
				</div>
				<div>{isDarkMode && <CheckIcon className='w-17 h-17 fill-secodary' />}</div>
			</button>
		</div>
	)
}
