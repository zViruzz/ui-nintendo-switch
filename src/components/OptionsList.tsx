import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useControllerContext } from '../context/controller'

interface Option {
  name: string
  path: string
}

interface OptionListProps {
  options: Option[]
}

function OptionList ({ options }: OptionListProps) {
  const { controllerButtonA } = useControllerContext()

  const location = useLocation()
  const currentUrl = `/${location.pathname.split('/').pop()}`
  const pathParent = `/${location.pathname.split('/')[1]}`
  const navigate = useNavigate()

  const handleClickLink = () => {
    const section = document.querySelector('.section-focus')
    if (section instanceof HTMLDivElement) section.focus()
  }

  const handleFocusLink = (path: string) => {
    navigate(`${pathParent}${path}`)
    controllerButtonA({
      text: 'controller.buttonA.ok',
      action: () => {
        const section = document.querySelector('.section-focus')
        if (section instanceof HTMLDivElement) section.focus()
      }
    })
  }

  return (
    <ul className='flex flex-col overflow-y-scroll scroll-smooth snap-y scrollbar-hide h-full w-full text-[2.26rem] leading-tight px-5 pr-10 py-12 '>
      {
        options.map((item, index) => {
          if (item.name === 'line') {
            return (
              <div
                className='w-full h-[1px] bg-[#ffffff34] shrink-0 my-5'
                key={index}
              />
            )
          }
          return (
            <Link
              to={`${pathParent}${item.path}`}
              key={index}
              onFocus={() => { handleFocusLink(item.path) }}
              onClick={handleClickLink}
              className='outline-wiggle-focus focus:bg-blueHight group hover:bg-blueHight transition-color duration-150'
            >
              <li
                className=' box-border p-4 h-[6.8rem] shrink-0 w-full flex items-center gap-4 hover:z-10 relative rounded-[0.1px] transition-all duration-100 '
              >
                <div className={`group-hover:bg-[#00ffc9] group-focus:bg-[#00ffc9] h-[100%] w-[8px] ${currentUrl === item.path ? 'bg-[#00ffc9]' : ''}`} />
                <div className={`group-hover:text-[#00ffc9] group-focus:text-[#00ffc9]  ${currentUrl === item.path ? 'text-[#00ffc9]' : ''}`}>
                  {item.name}
                </div>
              </li>
            </Link>
          )
        })
      }
    </ul>
  )
}

export default OptionList
