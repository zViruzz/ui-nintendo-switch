import Header from '../../components/Header'
import PageBasicLayout from '../../components/layouts/PageBasicLayout'
import OpacityPageTransition from '../../components/transitions/OpacityPageTransition'

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
