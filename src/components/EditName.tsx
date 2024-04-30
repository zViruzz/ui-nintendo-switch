import { type ChangeEvent, type FormEvent, useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../redux/hooks'
import { useDispatch } from 'react-redux'
import { changeUsername } from '../redux/userSlice'

interface Props {
  isHidden: boolean
  setIsHidden: (bol: boolean) => void
}

function EditName ({ isHidden, setIsHidden }: Props) {
  const { username } = useAppSelector((state) => state.user)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [name, setName] = useState<string>(username)
  const dispatch = useDispatch()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(changeUsername(name))
    setIsHidden(true)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current !== null) {
        inputRef.current.focus()
      }
    }, 250)
  }, [isHidden])

  useEffect(() => {
    function handleClickOutside (event: MouseEvent) {
      if (containerRef.current !== null &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsHidden(true)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      className={`${isHidden ? 'invisible ' : 'visible backdrop-blur-md bg-[#00000090]'}  ease-in-out transition-all w-screen h-screen  absolute top-0 left-0  grid grid-rows-3  `}
    >

      <div className='ml-48 mt-20 text-4xl'>
        <h2>Introduce un apodo.</h2>
      </div>

      <div
        className='grid place-content-center'
        ref={containerRef}
      >
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className='bg-transparent focus-within:outline-none focus-within:border-b-4 border-white rounded-t-lg w-[37rem] text-6xl px-5'
            ref={inputRef}
            type="text"
            value={name}
            maxLength={10}
          />
          <div className='flex justify-end text-disabled'>
            {name.length} / 10
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditName
