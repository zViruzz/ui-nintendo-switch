import { Link } from 'react-router-dom'

interface Option {
  name: string
  path: string
}

interface OptionListProps {
  options: Option[]
}

function OptionList ({ options }: OptionListProps) {
  return (
    <ul className='flex flex-col overflow-y-scroll whitespace-nowrap scroll-smooth snap-y scrollbar-hide h-full w-full text-3xl px-5 py-8'>
      {
        options.map((item, index) => {
          return (
            <Link to={`/setting${item.path}`} key={index}>
              <li
                className='hover:bg-[#1f2227] box-border p-4 h-[6.9rem] w-full shrink-0  flex items-center gap-4 hover:outline outline-[6px] outline-[#78f0f5] group hover:z-10 relative rounded-[0.5px] transition-all duration-100 hover:animate-wiggle'
                tabIndex={0}
              >
                <div className='group-hover:bg-[#00ffc9] group-focus:bg-[#00ffc9] h-[100%] w-[8px]'></div>
                <div className='group-hover:text-[#00ffc9] group-focus:text-[#00ffc9]'>
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
