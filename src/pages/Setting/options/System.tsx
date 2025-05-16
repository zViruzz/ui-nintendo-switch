import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import EditField from '../../../components/EditField'
import { useOptionsMenuContext } from '../../../context/optionsMenu'
import { useAppSelector } from '../../../redux/hooks'
import { changeFilter } from '../../../redux/settingSlice'
import { changeConsoleNickname } from '../../../redux/userSlice'
import ListPageTransition from '../../../transitions/ListPageTransition'
import Detailtext from '../../../ui/DetailText'
import SelectionSetting from '../../../ui/SelectionSetting'
import SelectionSwitch from '../../../ui/SelectionSwitch'
import { getLanguageCode, getLanguageName } from '../../../utils/languageDictionary'

export function System() {
	const { i18n, t } = useTranslation()
	const [isHiddenEditField, setIsHiddenEditField] = useState(true)
	const [regionValue, setRegionValue] = useState('The Americas')
	const [consoleSoundValue, setConsoleSoundValue] = useState('Stereo')
	const [usbKeyboardValue, setUsbKeyboardValue] = useState('English (US)')
	const { consoleNickname } = useAppSelector((state) => state.user)
	const { filter } = useAppSelector((state) => state.settings)
	const dispatch = useDispatch()
	const { configureListOptions } = useOptionsMenuContext()
	const handleChangeConsoleNickname = (name: string) =>
		dispatch(changeConsoleNickname(name))

	const changeLanguage = (lang: string) => {
		const language = getLanguageName(lang)

		i18n.changeLanguage(language)
		localStorage.setItem('lang', language)
	}

	const handleClickLanguage = () => {
		configureListOptions({
			title: 'Language',
			isHidden: false,
			initial: getLanguageCode(i18n.language),
			onSelectOption: (option) => changeLanguage(option.label),
			options: ['English', 'Spanish'],
		})
	}

	const handleClickRegion = () => {
		configureListOptions({
			title: 'Region',
			isHidden: false,
			initial: regionValue,
			onSelectOption: (option) => setRegionValue(option.label),
			options: [
				'Japan',
				'The Americas',
				'Europe',
				'Australia / New Zealand',
				'Hong Kong / Taiwan / South Korea',
			],
		})
	}
	const handleClickConsoleSound = () => {
		configureListOptions({
			title: 'Console Sound',
			isHidden: false,
			initial: consoleSoundValue,
			onSelectOption: (option) => setConsoleSoundValue(option.label),
			options: ['Stereo', 'Mono'],
		})
	}

	const handleClickUSBKeyboard = () => {
		configureListOptions({
			title: 'USB Keyboard',
			isHidden: false,
			initial: usbKeyboardValue,
			onSelectOption: (option) => setUsbKeyboardValue(option.label),
			options: [
				'English (US)',
				'English (UK)',
				'Spanish (Spain)',
				'French (France)',
				'German (Germany)',
				'Italian (Italy)',
				'Dutch (Netherlands)',
				'Portuguese (Brazil)',
				'Russian (Russia)',
				'Chinese (China)',
				'Japanese (Japan)',
				'Korean (Korea)',
			],
		})
	}

	const handleClickFilter = () => {
		configureListOptions({
			title: 'Change Display Colors',
			isHidden: false,
			initial: filter,
			onSelectOption: (option) =>
				dispatch(changeFilter(option.label as 'Default' | 'Grayscale' | 'Invert')),
			options: ['Default', 'Grayscale', 'Invert'],
		})
	}

	return (
		<ListPageTransition>
			<EditField
				title='Name switch'
				isHidden={isHiddenEditField}
				setIsHidden={setIsHiddenEditField}
				initialValue={consoleNickname}
				onSubmit={handleChangeConsoleNickname}
				maxLength={32}
			/>

			<div className='mb-[6.7rem]'>
				<SelectionSetting className='border-y'>System Update</SelectionSetting>
				<Detailtext>! System update is ready</Detailtext>
				<SelectionSetting className='border-y'>Update Dock</SelectionSetting>
				<Detailtext>Update the Nintendo Switch dock firmware.</Detailtext>
				<SelectionSetting
					className='border-y flex justify-between'
					onClick={() => setIsHiddenEditField(false)}
				>
					<span>Console Nickname</span>
					<span className='dark:text-secodary text-secodary-light'>
						{consoleNickname}
					</span>
				</SelectionSetting>
			</div>
			<div>
				<SelectionSetting
					className='border-y flex justify-between'
					onClick={handleClickLanguage}
				>
					<span>Language</span>
					<span className='dark:text-secodary text-secodary-light'>
						{getLanguageCode(i18n.language)}
					</span>
				</SelectionSetting>
				<SelectionSetting
					className='border-y flex justify-between'
					onClick={handleClickRegion}
				>
					<span>Region</span>
					<span className='dark:text-secodary text-secodary-light'>{regionValue}</span>
				</SelectionSetting>
				<SelectionSetting className='border-y flex justify-between'>
					Data and Time
				</SelectionSetting>
				<Detailtext>Current data and time: 5/6/2025 4:14 a.m.</Detailtext>
				<SelectionSwitch className='border-y flex justify-between'>
					Console Battery (%)
				</SelectionSwitch>
				<Detailtext>
					The console battery will be displayed on the HOME Menu as percentage.
				</Detailtext>
				<SelectionSetting
					className='border-y flex justify-between'
					onClick={handleClickConsoleSound}
				>
					<span>Console Sound</span>
					<span className='dark:text-secodary text-secodary-light'>
						{consoleSoundValue}
					</span>
				</SelectionSetting>
				<Detailtext>
					You can configure sound in the TV Settings menu when the console is connected to
					a TV.
				</Detailtext>
				<SelectionSwitch className='border-y flex justify-between'>
					Mute When Headphones Are Sisconnected
				</SelectionSwitch>
				<SelectionSwitch className='border-b flex justify-between'>
					Lowe Max Headephone Volume
				</SelectionSwitch>
				<Detailtext>
					Set a maximun volume for headphones or speakers connected to the console.
				</Detailtext>
				<SelectionSetting
					className='border-b flex justify-between'
					onClick={handleClickUSBKeyboard}
				>
					<span>USB Keyboard</span>
					<span className='dark:text-secodary text-secodary-light'>
						{usbKeyboardValue}
					</span>
				</SelectionSetting>
				<SelectionSetting
					className='border-b flex justify-between'
					onClick={handleClickFilter}
				>
					<span>Change Display Colors</span>
					<span className='dark:text-secodary text-secodary-light'>{filter}</span>
				</SelectionSetting>
				<SelectionSwitch className='border-b'>Zoom</SelectionSwitch>
				<Detailtext>You can zoom in be pressing twice quickly.</Detailtext>
				<SelectionSetting className='border-y'>Serial Information</SelectionSetting>
				<SelectionSetting className='border-b'>
					End-User License Agreement
				</SelectionSetting>
				<SelectionSetting className='border-b'>
					Intellectual Property Notices
				</SelectionSetting>
				<SelectionSetting className='border-b mb-10'>Wireless E-Label</SelectionSetting>

				<div>ejem: {t('home.menu.news')}</div>
			</div>
		</ListPageTransition>
	)
}
