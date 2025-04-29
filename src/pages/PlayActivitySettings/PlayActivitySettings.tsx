import { useState } from 'react'
import Header from '../../components/Header'
import { useCardMessageContext } from '../../context/cardMessage'
import { useOptionsMenuContext } from '../../context/optionsMenu'
import useControllers from '../../hooks/useControllers'
import OpacityPageTransition from '../../transitions/OpacityPageTransition'
import PageBasicLayout from '../../ui/PageBasicLayout'
import SelectionSetting from '../../ui/SelectionSetting'
import {
	constainerMain,
	containerOptions,
	detailSetting,
} from './PlayActivitySettingsStyles'

export default function PlayActivitySettings() {
	const { settingMessage } = useCardMessageContext()
	const { configureListOptions, listOptions } = useOptionsMenuContext()
	const [activeDisplay, setActiveDisplay] = useState('All Users')

	useControllers({
		settingButtonA: {
			text: 'controller.buttonA.ok',
		},
		settingButtonB: {
			text: 'controller.buttonB.back',
			route: 'app/users/user-settings',
		},
		dependence: listOptions.isHidden,
	})

	const handleClickDeletePlayActivity = () => {
		settingMessage({
			isHidden: false,
			column: false,
			children: (
				<div className='text-center py-33 '>Your play activity will be deleted.</div>
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
		configureListOptions({
			isHidden: false,
			initial: activeDisplay,
			onSelectOption: (option) => setActiveDisplay(option.label),
			options: ['All Users', 'Friends', 'Best friends', 'No One'],
		})
	}

	return (
		<OpacityPageTransition className='w-full h-full'>
			<PageBasicLayout>
				<Header title='Play activity setting' />
				<main className={constainerMain()}>
					<div className={containerOptions()}>
						<SelectionSetting
							className='border-y border-gray flex justify-between [&>div]:last:text-secodary'
							onClick={handleClickMenuDisplayPlan}
						>
							<div>Display plan activity to:</div>
							<div>{activeDisplay}</div>
						</SelectionSetting>
						<div className={detailSetting()}>
							Information on thwn you started playing a sofware title and how long you
							have playerd Information on thwn you started playing a sofware title and how
							long you have playerdInformation on thwn you started playing a sofware title
							and how long you have playerd
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
