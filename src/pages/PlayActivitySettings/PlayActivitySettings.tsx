import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { useCardMessageContext } from '../../context/cardMessage'
import { useControllerContext } from '../../context/controller'
import { useOptionsMenuContext } from '../../context/optionsMenu'
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
	const { settingMessage } = useCardMessageContext()
	const { configureListOptions } = useOptionsMenuContext()

	useEffect(() => {
		controllerButtonB({
			text: 'controller.buttonB.back',
			route: '/users/user-settings',
		})
		controllerButtonA({
			text: 'controller.buttonA.ok',
		})
	}, [])

	const handleClickDeletePlayActivity = () => {
		settingMessage({
			isHidden: false,
			column: false,
			children: (
				<div className='text-center pb-24 pt-5'>
					Your play activity will be deleted.
				</div>
			),
			buttons: [
				{
					label: 'Cancel',
					isCloseButton: true,
					onClick: () => {},
				},
				{
					label: 'Delete',
					onClick: () => {},
				},
			],
		})
	}
	const handleClickMenuDisplayPlan = () => {
		console.log('clickmenudisplayplan')
		configureListOptions({
			isHidden: false,
			options: [
				{
					label: 'All Users',
					isOn: true,
				},
				{
					label: 'Friends',
					isOn: false,
				},
				{
					label: 'Best friends',
					isOn: false,
				},
				{
					label: 'No One',
					isOn: false,
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
						<SelectionSetting
							className='border-y border-gray flex justify-between last:[&>div]:text-secodary'
							onClick={handleClickMenuDisplayPlan}
						>
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
