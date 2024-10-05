import CardMessage from './layouts/CardMessage'

interface Props {
	isHidden: boolean
	onClickClose: () => void
}

export default function QrMessage({ isHidden, onClickClose }: Props) {
	return (
		<>
			<CardMessage
				hiddenMessage={isHidden}
				buttons={[
					{
						label: 'About Checking in',
						onClick: () => {
							console.log('click About Checking in')
						},
					},
					{
						label: 'Close',
						onClick: () => {
							onClickClose()
							console.log('click Close')
						},
					},
				]}
			>
				<div className='flex justify-center items-center pb-20'>
					<div className='bg-black w-[30rem] h-[30rem]'></div>
				</div>
			</CardMessage>
		</>
	)
}
