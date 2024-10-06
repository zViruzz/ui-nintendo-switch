import Header from '../../components/Header'
import PageBasicLayout from '../../components/layouts/PageBasicLayout'
import OpacityPageTransition from '../../components/transitions/OpacityPageTransition'

export default function FriendSettings() {
	return (
		<OpacityPageTransition>
			<PageBasicLayout>
				<Header title='Friend Settings' />
				<div>Coming soon</div>
			</PageBasicLayout>
		</OpacityPageTransition>
	)
}
