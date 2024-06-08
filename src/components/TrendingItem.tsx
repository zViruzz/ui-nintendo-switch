import { useTrendingContext } from '../context/trending'

interface Props {
  title: string
  url: string
  label: string
}

export default function TrendingItem ({ url, title, label }: Props) {
  const { selectionTrending } = useTrendingContext()
  return (
    <>
      <div className=' text-neutral-400 text-2xl text-center mb-10'>
        <button
          className='outline-wiggle-focus outline-offset-[3px] bg-transparent p-0'
          onClick={() => {
            selectionTrending({ title, label, url })
            console.log('🚀 ~ TrendingItem ~ title:', title)
            const div = document.querySelector(`#${title}`)
            console.log('🚀 ~ TrendingItem ~ div:', div)
          }}
        >
          <img
            className=''
            src={url}
            alt="Pokemon unite"
          />
        </button>
        <p>{label}</p>
      </div>
    </>
  )
}
