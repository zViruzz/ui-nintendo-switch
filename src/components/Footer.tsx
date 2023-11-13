import NSwitchIcon from './icons/NSwitchIcon'

function Footer () {
  return (
    <footer className="px-12 divide-y divide-zinc-300">
      <div></div>
      <div className='flex justify-between items-center h-full px-8'>
        <div>
          <NSwitchIcon width={90} height={50} />
        </div>
        <div className='flex text-3xl'>
          <button className='flex gap-6 items-center bg-transparent border-none'>
            <div className="bg-white text-[#2d2d2d] font-bold py-[4px] px-[11px] rounded-full text-3xl ml-9">
              A
            </div>
            <p>
              Aceptar
            </p>
          </button>
          {/* <div>
            <button className="bg-white text-[#2d2d2d] font-bold py-[4px] px-[11px] rounded-full text-3xl">
              A
            </button>
            Start
          </div> */}

        </div>

      </div>
    </footer>
  )
}

export default Footer
