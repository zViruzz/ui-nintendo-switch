import Header from '../../components/Header'
import OpacityPageTransition from '../../transitions/OpacityPageTransition'
import PageBasicLayout from '../../ui/PageBasicLayout'

export default function BlockedUserList() {
	return (
		<OpacityPageTransition>
			<PageBasicLayout>
				<Header title='Blocked User List' />
				<div>Coming soon</div>
			</PageBasicLayout>
		</OpacityPageTransition>
	)
}
