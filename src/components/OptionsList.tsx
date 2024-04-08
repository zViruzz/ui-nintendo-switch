import { Link, useLocation } from 'react-router-dom'

interface Option {
  name: string
  path: string
}

interface OptionListProps {
  options: Option[]
}

function OptionList ({ options }: OptionListProps) {
  const location = useLocation()
  const currentUrl = `/${location.pathname.split('/').pop()}`
  const pathParent = `/${location.pathname.split('/')[1]}`

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
            <Link to={`${pathParent}${item.path}`} key={index}>
              <li
                className='hover:bg-blueHight box-border p-4 h-[6.8rem] shrink-0 w-full flex items-center gap-4 outline-wiggle group hover:z-10 relative rounded-[0.1px] transition-all duration-100 '
                tabIndex={0}
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
