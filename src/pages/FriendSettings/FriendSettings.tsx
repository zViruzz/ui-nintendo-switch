import Header from '../../components/Header'
import PageBasicLayout from '../../ui/PageBasicLayout'
import OpacityPageTransition from '../../transitions/OpacityPageTransition'

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
