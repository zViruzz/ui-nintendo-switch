import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import CharacterProfile from '../../../components/CharacterProfile'
import EditName from '../../../components/EditName'
import { useCardMessageContext } from '../../../context/cardMessage'
import PencilIcon from '../../../icons/PencilIcon'
import QuestionIcon from '../../../icons/QuestionIcon'
import { useAppSelector } from '../../../redux/hooks'
import { game } from '../../../static/game'
import ListPageTransition from '../../../transitions/ListPageTransition'

export function Profile() {
	const { onToggleHidden, settingMessage } = useCardMessageContext()
	const [isHiddenEditName, setIsHiddenEditName] = useState(true)
	const { username } = useAppSelector((state) => state.user)
	const { t } = useTranslation()

	const handleClickOnline = () => {
		settingMessage({
			isHidden: false,
			column: true,
			children: (
				<div className='flex justify-center items-center pb-20'>
					<p>
						If this is not selected in-game, he or she will be
						displayed as offline even if you are connected to the
						internet
					</p>
				</div>
			),
			buttons: {
				label: 'Ok',
				onClick: () => {
					onToggleHidden(true)
					console.log('click Close')
				},
			},
		})
	}

	const handleClickInfo = () => {
		settingMessage({
			isHidden: false,
			column: true,
			children: (
				<div className='flex justify-center items-center pb-20'>
					<p>
						If this is not selected in-game, he or she will be
						displayed as offline even if you are connected to the
						internet
					</p>
				</div>
			),
			buttons: {
				label: 'Ok',
				onClick: () => {
					onToggleHidden(true)
					console.log('click Close')
				},
			},
		})
	}

	return (
		<ListPageTransition>
			<div className='flex gap-[6.7rem] flex-col'>
				<EditName
					isHidden={isHiddenEditName}
					setIsHidden={setIsHiddenEditName}
				/>

				<div className='h-[20.5rem] flex gap-12 '>
					<Link
						className='shrink-0  outline-wiggle-focus outline-8 outline-offset-4 '
						to='/edit-icon'
					>
						<CharacterProfile className='w-full h-full' />
					</Link>

					<div className='w-full h-full grid grid-rows-[2fr_3fr_1fr] pt-2 '>
						<button
							className='bg-transparent bg-blue-hight-focus border-none outline-wiggle-focus text-5xl border-t-[1px] border-gray flex justify-between items-center px-5'
							onClick={() => {
								setIsHiddenEditName(false)
							}}
							type='button'
						>
							<h1>{username}</h1>
							<PencilIcon
								className='text-[#a0a0a0]'
								width={34}
								height={34}
							/>
						</button>
						<button
							type='button'
							className='outline-wiggle-focus bg-blue-hight-focus flex items-center justify-between border-t-[1px] border-gray px-5'
							onClick={handleClickOnline}
						>
							<p>{t('users.profile.offline')}</p>
							<QuestionIcon
								className='text-[#a0a0a0]'
								width={40}
								height={40}
							/>
						</button>
						<div className='text-2xl border-t-[1px] border-gray flex justify-between items-center px-5'>
							<p>
								{t('users.profile.friend-code')} : SW-3742-456
								7-4367-2344
							</p>
						</div>
					</div>
				</div>

				<div>
					<div className='flex justify-between mb-2'>
						<div className='flex items-center gap-3'>
							<div className={'bg-description h-[65%] w-[8px]'} />
							<h3>{t('users.profile.play-activity')}</h3>
						</div>
						<button
							className='outline-wiggle-focus h-[40px] w-[40px] rounded-full outline-offset-[-3px]'
							type='button'
							onClick={handleClickInfo}
						>
							<QuestionIcon
								className='text-[#a0a0a0] mr-5'
								width={40}
								height={40}
							/>
						</button>
					</div>

					{/* -----------------------} */}
					<div className='flex flex-col [&>div]:p-5  divide-y divide-gray border-y-gray border-solid border-y-[1px]'>
						{game.slice(0, 3).map(({ id, urlImage, name }) => (
							<button
								key={id}
								className='bg-transparent bg-blue-hight-focus border-0 flex gap-4 items-center outline-wiggle-focus text-left p-4'
								type='button'
							>
								<img
									src={urlImage}
									className='w-32 h-32'
									alt={name}
								/>
								<div className='flex flex-col gap-5'>
									<h4 className='text-4xl'>{name}</h4>
									<p className='text-3xl text-description'>
										{t('users.profile.playerd-time', { time: 5 })}
									</p>
								</div>
							</button>
						))}
					</div>
					{/* -----------------------} */}
				</div>
			</div>
		</ListPageTransition>
	)
}
