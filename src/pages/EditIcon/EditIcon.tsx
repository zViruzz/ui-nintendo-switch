import { useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { changeBackground } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'
import { listColors } from '../../static/colors'
import SelectionGrid from '../../components/layouts/SelectionGrid'
import Header from '../../components/Header'
import Mario from '../../assets/ns-mario-profile-pg.png'
import Edu from '../../assets/edu.png'

function EditIcon () {
  const dispatch = useDispatch()
  const { character, background } = useAppSelector((state) => state.user)
  const [isHiddenBackground, setHiddenBackground] = useState(true)
  const [isHiddenCharacter, setHiddenCharacter] = useState(true)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedBackground, setSelectedBackground] = useState(background)
  const [overlayImage, setOverlayImage] = useState(character)

  const actionCharacter = (color: string) => {
    setSelectedBackground(color)
    dispatch(changeBackground(color))
    handleClickOutside()
  }
  const actionColor = () => {
    setOverlayImage(Edu)
    handleClickOutside()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas === null) return
    const ctx = canvas.getContext('2d')
    if (ctx === null) return

    ctx.fillStyle = selectedBackground
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    if (overlayImage !== null) {
      const overlayImg = new Image()
      overlayImg.src = overlayImage

      overlayImg.onload = () => {
        // Ajusta la posición y el tamaño según tus necesidades
        ctx.drawImage(overlayImg, 0, 0, canvas.width, canvas.height)
      }
    }
  }, [overlayImage, selectedBackground])

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

  return (
    <div className="grid grid-rows-[1fr_7.5fr] grid-cols-[38.3rem_1fr] h-full w-full pt-5 relative">
      <Header className={`${isHiddenCharacter ? 'opacity-100 delay-100' : 'opacity-0'} ease-in-out transition-opacity `}>
        <h2>Diseño del icono</h2>
      </Header>

      <section className='grid grid-cols-[1fr_45%] w-screen text-[40px]'>

        <div className='ml-12'>
          <div className='pr-16 pl-32 pt-[170px] h-full grid grid-rows-[176px_176px_]'>
            <button
              onClick={handleClickCharacter}
              className='hover:bg-blueHight focus-visible:bg-blueHight bg-transparent border-0 outline-wiggle-focus hover:z-10 flex items-center px-10 border-y border-gray'
            >
              Personaje/Mii
            </button>
            <button
              onClick={handleClickBackground}
              className='hover:bg-blueHight focus-visible:bg-blueHight bg-transparent border-0 outline-wiggle-focus hover:z-10 flex items-center px-10 border-b border-gray'
            >
              Fondo
            </button>
            <div className='w-full flex justify-center items-center'>
              <button className='bg-[#01ffc9] outline-wiggle outline-offset-2 text-black rounded-lg h-32 w-[63%] '>
                Aceptar
              </button>
            </div>

            {/* ------------ */}
            <PanelCharacter
              isHiddenCharacter={isHiddenCharacter}
              handleClickOutside={handleClickOutside}
              handleClickAction={actionColor}
            />

            <PanelColors
              handleClickAction={actionCharacter}
              handleClickOutside={handleClickOutside}
              isHiddenBackground={isHiddenBackground}
            />

            {/* ------------ */}
          </div>
        </div>

        <div className=' flex justify-center py-[18%]'>
          {/* <img
            className='h-[23.7rem] w-[23.7rem]'
            src={user.avatarUrl}
            alt="profile"
          /> */}
          <canvas ref={canvasRef} width={379} height={379} className='h-[23.7rem] w-[23.7rem]' />
        </div>
      </section>

    </div>
  //   <div>
  //     <form
  //       className='h-full w-full'
  //       encType='multipart/form-data'
  //     >
  //       <input
  //         className='hidden'
  //         name='file'
  //         type='file'
  //         id='file-upload'
  //         accept='image/*'
  //         onChange={handleChange}

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

function PanelCharacter ({ isHiddenCharacter, handleClickAction, handleClickOutside }:
{
  isHiddenCharacter: boolean
  handleClickAction: () => void
  handleClickOutside: () => void
}) {
  const characters = Array.from({ length: 40 }, (_, i) => i + 1)

  return (
    <div className={`${isHiddenCharacter ? 'invisible' : ''} h-full  absolute w-screen top-0 left-0 z-20 grid grid-cols-[1.46fr_1fr]`}>
      <SelectionGrid title='Personaje/Mii' isHidden={isHiddenCharacter}>
        {characters.map(i => (
          <img
            className='outline-wiggle-focus outline-[7.5px] hover:z-10 outline-offset-[3px] focus-visible:bg-[#3f8f7c] hover:outline-wiggle hover:bg-BlueHight'
            tabIndex={0}
            key={i}
            src={Mario}
            onClick={handleClickAction}
            alt="mario"
          />
        ))}

      </SelectionGrid>
      <div onClick={handleClickOutside} />
    </div>
  )
}
function PanelColors ({ isHiddenBackground, handleClickAction, handleClickOutside }:
{
  isHiddenBackground: boolean
  handleClickAction: (color: string) => void
  handleClickOutside: () => void
}) {
  return (
    <div className={`${isHiddenBackground ? 'invisible' : ''} h-full  absolute w-screen top-0 left-0 z-20 grid grid-cols-[1.46fr_1fr]  `}>
      <SelectionGrid title='Fondo' isHidden={isHiddenBackground}>
        {listColors.map(({ color }) => {
          return (

            <div
              key={color}
              className={'aspect-square  outline-wiggle-focus outline-[7.5px] hover:z-10 outline-offset-[3px] focus-visible:bg-[#3f8f7c] hover:outline-wiggle'}
              style={{
                backgroundColor: color
              }}
              onClick={() => { handleClickAction(color) }}
              tabIndex={0}
            />
          )
        })}
      </SelectionGrid>
      <div onClick={handleClickOutside} />
    </div>
  )
}
