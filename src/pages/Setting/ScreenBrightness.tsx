function ScreenBrightness () {
  return (
    <div className=" h-full w-full flex flex-col">
      <div
        className='hover:bg-[#1f2227] box-border p-5 h-[6.9rem] w-full shrink-0  flex items-center gap-4 hover:outline outline-[6px] outline-[#78f0f5] group hover:z-10 relative rounded-[0.5px] transition-all duration-100 hover:animate-wiggle border-y-[1px] border-[#ffffff34]'
        tabIndex={0}
      >
        <div className='group-hover:text-[#00ffc9] group-focus:text-[#00ffc9] flex justify-between w-full'>
          <div>
            Brillo automatico
          </div>
          <div>
            Si
          </div>
        </div>
      </div>
      <div
        className='box-border p-5 h-[6.9rem] w-full shrink-0  flex items-center gap-4 group hover:z-10 relative rounded-[0.5px]  '
        tabIndex={0}
      >
        <input type="range" className="w-full webkit-slider-thumb out-of-range:border-green-500" />
      </div>
    </div>
  )
}

export default ScreenBrightness
