import UserStatus from '../components/UserStatus'
import MenuHome from '../components/MenuHome'
import ViewGame from '../components/ViewGame'
import { Helmet } from 'react-helmet'
import previeImageMeta from '../assets/nintendo-switch-ui.webp'

function Home ({ lang = 'es' }: { lang?: string }) {
  const ogTitle = 'Nintendo Switch UI'
  const ogImage = previeImageMeta
  const ogDescription = lang === 'es' ? 'Inteface de nintendo switch usando tecnologia web' : 'Nintendo switch interface using web technology'

  return (
    <>
      <Helmet>
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      <section className='grid grid-rows-[20%_minmax(100px,_1fr)_22%] h-full w-full '>
        <UserStatus/>
        <ViewGame />
        <MenuHome />
      </section>
    </>
  )
}

export default Home
