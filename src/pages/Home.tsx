import UserStatus from '../components/UserStatus'
import MenuHome from '../components/MenuHome'
import ViewGame from '../components/ViewGame'

function Home () {
  return (
    <>
      <section className='grid grid-rows-[20%_minmax(100px,_1fr)_22%] h-full w-full '>
        <UserStatus/>
        <ViewGame />
        <MenuHome />
      </section>
    </>
  )
}

export default Home
