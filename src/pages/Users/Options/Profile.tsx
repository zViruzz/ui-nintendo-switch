import profileMario from '../../../assets/ns-mario-profile.jpg'
import { Link } from 'react-router-dom'
function Profile () {
  return (
    <>
      <div className='h-[20rem] flex gap-9'>
        <div
          tabIndex={0}
          className='shrink-0 outline-[#15bffd] hover:outline outline-8 hover:animate-wiggle outline-offset-4 '
        >
          <Link to='/edit-icon'>

            <img className='w-full h-full cursor-pointer' src={profileMario} alt="avatar" />
          </Link>
        </div>

        <div className='w-full h-full grid grid-rows-[1fr_2fr_1f]'>
          <div className='border-t-[1px] border-outlineColor3 flex justify-between items-center px-5'>
            <h1>Profile</h1>
            <div className='w-5 h-5 bg-slate-600'></div>
          </div>
          <div className='border-t-[1px] border-outlineColor3 flex justify-between items-center px-5'>
            <p>Sin conexión</p>
            <div className='w-5 h-5 bg-slate-600'></div>
          </div>
          <div className='border-t-[1px] border-outlineColor3 flex justify-between items-center px-5'>
            <p>clave de amigo: SW-3742-4567-4367-2344</p>
            <div className='w-5 h-5 bg-slate-600'></div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile
