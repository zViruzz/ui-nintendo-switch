import viruzProfile from '../../../assets/images/vivi.jpg'
import ListPageTransition from '../../../components/transitions/ListPageTransition'
export function FriendList () {
  return (
    <ListPageTransition>
      <div>
        <div className='flex gap-4 px-2'>
          <div className='shadow-xl w-[15.9rem]'>
            <img className='w-[15.9rem] h-[15.7rem]' src={viruzProfile} alt="user" />
            <div className='bg-[#4f4f4f] text-[2rem] text-center py-[0.7rem]'>
              <p>Viruz</p>
              <p className='text-2xl text-neutral-400'>Offline</p>
            </div>
          </div>

        </div>
      </div>
    </ListPageTransition>
  )
}
