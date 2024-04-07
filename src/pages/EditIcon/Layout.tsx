import { useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import Mario from '../../assets/ns-mario-profile-pg.png'

function EditIcon () {
  const user = useAppSelector((state) => state.user)
  const [isHiddenBackground, setHiddenBackground] = useState(true)
  const [isHiddenCharacter, setHiddenCharacter] = useState(true)
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files
  //   if (file === null) return
  //   console.log('si')
  // }

  const handleClickCharacter = () => {
    setHiddenCharacter(false)
  }

  const handleClickBackground = () => {
    setHiddenBackground(false)
  }

  const handleClickOutside = () => {
    setHiddenCharacter(true)
    setHiddenBackground(true)
  }

  const characters = Array.from({ length: 40 }, (_, i) => i + 1)

  return (
    <div className="grid grid-rows-[1fr_7.5fr]   grid-cols-[38.3rem_1fr] h-full w-full pt-5 relative">
      <header className="col-span-2 px-12 flex justify-between flex-col">
        <div className='flex items-center text-[3rem] w-full h-full px-[3rem] gap-4'>

          <h2>Diseño del icono</h2>
        </div>
        <div className={`${isHiddenCharacter ? 'opacity-100' : 'opacity-0'} ease-in-out transition-opacity w-full h-[1px] bg-[#fff] shrink-0`} />
      </header>

      <section className='grid grid-cols-[1fr_45%] w-screen text-[40px]'>

        <div className='ml-12'>
          <div className='pr-16 pl-32 pt-[170px] h-full grid grid-rows-[176px_176px_]'>
            <button
              onClick={handleClickCharacter}
              className='hover:bg-BlueHight bg-transparent border-0 outline-wiggle hover:z-10 flex items-center px-10'
            >
              Personaje/Mii
            </button>
            <button
              onClick={handleClickBackground}
              className='hover:bg-BlueHight bg-transparent border-0 outline-wiggle hover:z-10 flex items-center px-10'
            >
              Fondo
            </button>

            <div className='w-full flex justify-center items-center'>
              <button className='bg-[#01ffc9] outline-wiggle outline-offset-2 text-black rounded-lg h-32 w-[63%] '>
                Aceptar
              </button>
            </div>

            {/* ------------ */}
            <div className={`${isHiddenCharacter ? 'invisible' : ''} h-full  absolute w-screen top-0 left-0 z-20 grid grid-cols-[1.46fr_1fr]`}>
              <div className={`${isHiddenCharacter ? 'opacity-0 -translate-x-14' : 'opacity-100'}  min-h-full  transition-all bg-[#353535] ease-in-out grid grid-rows-[1fr_6.4fr] `}>
                <div className='px-12'>
                  <div className='border-b-[2px] h-full flex items-center pt-6 px-[3.2rem]'>
                    Personaje/Mii
                  </div>
                </div>
                <div className='overflow-scroll scrollbar-hide pl-[11.7%] pr-[9%] pt-[4%] max-h-full w-full grid grid-cols-6 gap-[15px]'>
                  {characters.map(i => (
                    <img
                      className='outline-wiggle-focus outline-[7.5px] hover:z-10 outline-offset-[3px] focus-visible:bg-[#3f8f7c] hover:outline-wiggle hover:bg-BlueHight'
                      tabIndex={0}
                      key={i}
                      src={Mario}
                      alt="mario"
                    />
                  ))}
                </div>
              </div>
              <div onClick={handleClickOutside} />
            </div>

            <div className={`${isHiddenBackground ? 'opacity-0 invisible' : 'opacity-100'} absolute w-screen h-full top-0 left-0 z-20 grid grid-cols-[1.46fr_1fr]`}>
              <div className='bg-neutral-700 '>
                Fondo
              </div>
              <div onClick={handleClickOutside} />
            </div>
            {/* ------------ */}
          </div>
        </div>

        <div className=' flex justify-center py-[18%]'>
          <img
            className='h-[23.7rem] w-[23.7rem]'
            src={user.avatarUrl}
            alt="profile"
          />
        </div>
      </section>

    </div>
    // <div>
    //   <form
    //     className='h-full w-full'
    //     encType='multipart/form-data'
    //   >
    //     <input
    //       className='hidden'
    //       name='file'
    //       type='file'
    //       id='file-upload'
    //       accept='image/*'
    //       onChange={handleChange}

  //     />
  //     <label
  //       htmlFor='file-upload'
  //     >
  //     </label>
  //   </form>
  // </div>
  )
}

export default EditIcon
