import { useTrendingContext } from '../context/trending'

interface Props {
  id: string
  title: string
  url: string
}

export default function TrendingItem ({ id, url, title }: Props) {
  const { selectionTrending } = useTrendingContext()
  return (
    <>
      <div className=' text-neutral-400 text-2xl text-center mb-10'>
        <button
          className='outline-wiggle-focus outline-offset-[3px] bg-transparent p-0'
          onClick={() => {
            selectionTrending({ id, title, url })
            console.log('🚀 ~ TrendingItem ~ id:', id)
            setTimeout(() => {
              const div = document.getElementById(id)?.focus()
              console.log('🚀 ~ TrendingItem ~ div:', div)
            }, 1000)
          }}
        >
          <img
            className=''
            src={url}
            alt="Pokemon unite"
          />
        </button>
        <p></p>
      </div>
    </>
  )
}
