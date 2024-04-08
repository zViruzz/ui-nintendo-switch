import BrightnessIcon from '../../../components/icons/BrightnessIcon'
import SelectionSwitch from '../../../components/layouts/SelectionSwitch'

export function ScreenBrightness () {
  return (
    <div className=" h-full w-full flex flex-col">
      <SelectionSwitch className='border-y border-gray'>
        Modo avion
      </SelectionSwitch>

      <div
        className='box-border p-5 h-[6.9rem] w-full shrink-0  flex items-center gap-12 group hover:z-10 relative rounded-[0.5px]  '
        tabIndex={0}
      >
        <BrightnessIcon width={60} height={60}/>
        <input type="range" className="w-full webkit-slider-thumb out-of-range:border-green-500" />
      </div>

      <div className='px-14 py-6'>
        <ul className='text-[1.83rem] list-image-checkmark text-[#8c8c8c] leading-snug'>
          <li>
            El brillo tambien se puede ajustar mediante la configuracion de acceso rapido  (manten oprimido<span className="after:content-home pl-[0.40rem]"></span>).
          </li>
        </ul>
      </div>
    </div>
  )
}
