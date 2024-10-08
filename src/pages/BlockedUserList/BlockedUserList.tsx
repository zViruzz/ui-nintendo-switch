import Header from '../../components/Header'
import PageBasicLayout from '../../ui/PageBasicLayout'
import OpacityPageTransition from '../../transitions/OpacityPageTransition'

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
