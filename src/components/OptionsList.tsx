import { Link, useLocation } from 'react-router-dom'

interface Option {
  name: string
  path: string
}

interface OptionListProps {
  options: Option[]
}

function OptionList ({ options }: OptionListProps) {
  const option1 = options.slice(0, 1)
  const option2 = options.slice(1, 5)
  const option3 = options.slice(5, 11)
  const option4 = options.slice(11, 14)
  const option5 = options.slice(14, 17)

  return (
    <ul className='flex flex-col overflow-y-scroll scroll-smooth snap-y scrollbar-hide h-full w-full text-[2.26rem] leading-tight px-5 pr-10 py-12 '>
      <List data={option1} />
      <div className='w-full h-[1px] bg-[#ffffff34] shrink-0 my-5'/>
      <List data={option2} />
      <div className='w-full h-[1px] bg-[#ffffff34] shrink-0 my-5' />
      <List data={option3} />
      <div className='w-full h-[1px] bg-[#ffffff34] shrink-0 my-5' />
      <List data={option4} />
      <div className='w-full h-[1px] bg-[#ffffff34] shrink-0 my-5' />
      <List data={option5} />
    </ul>
  )
}

function List ({ data }: { data: Option[] }) {
  const location = useLocation()
  const currentUrl = `/${location.pathname.split('/').pop()}`
  return (
    <>
      {
        data.map((item, index) =>
          (
          <Link to={`/setting${item.path}`} key={index}>
            <li
              className='hover:bg-[#1f2227] box-border p-4 h-[6.8rem] shrink-0  w-full flex items-center gap-4 hover:outline outline-[7px] outline-[#78f0f5] group hover:z-10 relative rounded-[0.1px] transition-all duration-100 hover:animate-wiggle'
              tabIndex={0}
            >
              <div className={`group-hover:bg-[#00ffc9] group-focus:bg-[#00ffc9] h-[100%] w-[8px] ${currentUrl === item.path ? 'bg-[#00ffc9]' : ''}`} />
              <div className={`group-hover:text-[#00ffc9] group-focus:text-[#00ffc9]  ${currentUrl === item.path ? 'text-[#00ffc9]' : ''}`}>
                {item.name}
              </div>
            </li>
          </Link>
          )
        )
      }
    </>
  )
}

export default OptionList
