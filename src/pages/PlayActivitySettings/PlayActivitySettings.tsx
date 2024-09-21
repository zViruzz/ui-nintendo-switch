import Header from '../../components/Header'
import PageBasicLayout from '../../components/layouts/PageBasicLayout'
import OpacityPageTransition from '../../components/transitions/OpacityPageTransition'

export default function PlayActivitySettings () {
  return (
    <OpacityPageTransition>
      <PageBasicLayout>
        <Header title='Play activity setting'/>

      </PageBasicLayout>
    </OpacityPageTransition>
  )
}
