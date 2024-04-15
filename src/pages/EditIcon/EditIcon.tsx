import { useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import Edu from '../../assets/edu.png'
import Mario from '../../assets/ns-mario-profile-pg.png'
import SelectionGrid from '../../components/layouts/SelectionGrid'
import { changeBackground } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'

const listColors = [
  { name: 'Rojo', color: '#ff0000' },
  { name: 'Negro', color: '#000000' },
  { name: 'Amarillo', color: '#ffe100' },
  { name: 'Azul', color: '#0000ff' },
  { name: 'Verde', color: '#00ff00' },
  { name: 'Blanco', color: '#ffffff' },
  { name: 'Gris', color: '#808080' },
  { name: 'Naranja', color: '#ff7f00' },
  { name: 'Morado', color: '#800080' },
  { name: 'Rosa', color: '#ff69b4' },
  { name: 'Marrón', color: '#964b00' },
  { name: 'Azul claro', color: '#add8e6' },
  { name: 'Verde claro', color: '#90ee90' },
  { name: 'Amarillo claro', color: '#ffffe0' },
  { name: 'Naranja claro', color: '#ffa500' },
  { name: 'Rosado', color: '#ffc0cb' },
  { name: 'Turquesa', color: '#40e0d0' },
  { name: 'Lila', color: '#c8a2c8' },
  { name: 'Verde oliva', color: '#808000' },
  { name: 'Amarillo limón', color: '#f5d033' },
  { name: 'Celeste', color: '#b0e0e6' },
  { name: 'Aguamarina', color: '#7fffd4' },
  { name: 'Beige', color: '#f5f5dc' },
  { name: 'Cian', color: '#00ffff' },
  { name: 'Violeta', color: '#8a2be2' },
  { name: 'Turquesa oscuro', color: '#00ced1' },
  { name: 'Fucsia', color: '#ff00ff' },
  { name: 'Melocotón', color: '#ffdab9' },
  { name: 'Índigo', color: '#4b0082' },
  { name: 'Plata', color: '#c0c0c0' },
  { name: 'Oro', color: '#ffd700' },
  { name: 'lol', color: '#4b0022' },
  { name: 'lol', color: '#422022' },
  { name: 'lol', color: '#4f5a22' },
  { name: 'lol', color: '#4b0092' },
  { name: 'sia', color: '#c0c0c4' },
  { name: 'fasdj', color: '#ffd720' }
  // Puedes seguir agregando más colores según sea necesario
]

function EditIcon () {
  const { character, background } = useAppSelector((state) => state.user)
  const dispatch = useDispatch()
  const [isHiddenBackground, setHiddenBackground] = useState(true)
  const [isHiddenCharacter, setHiddenCharacter] = useState(true)

  console.log('🚀 ~ Mario:', Mario)

  const canvasRef = useRef <HTMLCanvasElement>(null)
  const [selectedBackground, setSelectedBackground] = useState(background)
  const [overlayImage, setOverlayImage] = useState(character)

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

  const characters = Array.from({ length: 40 }, (_, i) => i + 1)

  return (
    <div className="grid grid-rows-[1fr_7.5fr] grid-cols-[38.3rem_1fr] h-full w-full pt-5 relative">
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
              className='hover:bg-blueHight focus-visible:bg-blueHight bg-transparent border-0 outline-wiggle-focus hover:z-10 flex items-center px-10 border-y border-gray'
            >
              Personaje/Mii
            </button>
            <button
              onClick={handleClickBackground}
              className='hover:bg-blueHight focus-visible:bg-blueHight bg-transparent border-0 outline-wiggle-focus hover:z-10 flex items-center px-10 border- border-gray'
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
              <SelectionGrid title='Personaje/Mii' isHidden={isHiddenCharacter}>
                {characters.map(i => (
                  <img
                    className='outline-wiggle-focus outline-[7.5px] hover:z-10 outline-offset-[3px] focus-visible:bg-[#3f8f7c] hover:outline-wiggle hover:bg-BlueHight'
                    tabIndex={0}
                    key={i}
                    src={Mario}
                    onClick={() => {
                      setOverlayImage(Edu)
                      handleClickOutside()
                    }}
                    alt="mario"
                  />
                ))}

              </SelectionGrid>
              <div onClick={handleClickOutside} />
            </div>

            <div className={`${isHiddenBackground ? 'invisible' : ''} h-full  absolute w-screen top-0 left-0 z-20 grid grid-cols-[1.46fr_1fr]`}>
              <SelectionGrid title='Fondo' isHidden={isHiddenBackground}>
                {listColors.map(({ color }) => {
                  return (
                    <div
                      key={color}
                      className={'outline-wiggle-focus outline-[7.5px] hover:z-10 outline-offset-[3px] focus-visible:bg-[#3f8f7c] hover:outline-wiggle'}
                      style={{
                        backgroundColor: color
                      }}
                      onClick={() => {
                        setSelectedBackground(color)
                        dispatch(changeBackground(color))
                        handleClickOutside()
                      }}
                      tabIndex={0}
                    />
                  )
                })}
              </SelectionGrid>
              <div onClick={handleClickOutside} />
            </div>
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
