import { useEffect } from 'react'
import Header from '../../components/Header'
import { useCardMessageContext } from '../../context/cardMessage'
import { useControllerContext } from '../../context/controller'
import OpacityPageTransition from '../../transitions/OpacityPageTransition'
import PageBasicLayout from '../../ui/PageBasicLayout'
import SelectionSetting from '../../ui/SelectionSetting'
import {
	constainerMain,
	containerOptions,
	detailSetting,
} from './PlayActivitySettingsStyles'

export default function PlayActivitySettings() {
	const { controllerButtonB, controllerButtonA } =
		useControllerContext()
	const { settingMessage, onToggleHidden } = useCardMessageContext()

	useEffect(() => {
		controllerButtonB({
			text: 'controller.buttonB.back',
			route: '/',
		})
		controllerButtonA({
			text: 'controller.buttonA.ok',
		})
	}, [])

	const handleClickDeletePlayActivity = () => {
		settingMessage({
			isHidden: false,
			column: false,
			children: <div>Your play activity will be deleted.</div>,
			buttons: [
				{
					label: 'Cancel',
					onClick: () => {
						onToggleHidden(true)
					},
				},
				{
					label: 'Delete',
					onClick: () => {},
				},
			],
		})
	}

	return (
		<OpacityPageTransition>
			<PageBasicLayout>
				<Header title='Play activity setting' />
				<main className={constainerMain()}>
					<div className={containerOptions()}>
						<SelectionSetting className='border-y border-gray flex justify-between last:[&>div]:text-secodary'>
							<div>Display plan activity to:</div>
							<div>All Users</div>
						</SelectionSetting>
						<div className={detailSetting()}>
							Information on thwn you started p;aying a sofware title
							and how long you have playerd Information on thwn you
							started p;aying a sofware title and how long you have
							playerdInformation on thwn you started p;aying a sofware
							title and how long you have playerd
						</div>
						<SelectionSetting
							className='border-y border-gray'
							onClick={handleClickDeletePlayActivity}
						>
							Delete Play Activity
						</SelectionSetting>
					</div>
				</main>
			</PageBasicLayout>
		</OpacityPageTransition>
	)
}
