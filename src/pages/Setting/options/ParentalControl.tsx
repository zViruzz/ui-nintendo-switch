import ParentalControlIcon from '../../../assets/ParentalControlIcon.png'
import SelectionSetting from '../../../components/layouts/SelectionSetting'
import ListPageTransition from '../../../components/transitions/ListPageTransition'

export function ParentalControl () {
  return (
    <ListPageTransition>
      <div className="h-full w-full flex flex-col gap-14">
        <div className='flex gap-10'>
          <div>
            <img className='w-[15rem]' src={ParentalControlIcon} alt="" />
          </div>
          <div>
            <p>El control parental sirve para restringir ciertas funciones en esta consola. Se puede configurar desde esta misma consola o desde un dispositivo inteligente.</p>
          </div>
        </div>

        <div >
          <div className='flex text-4xl text-[2.55rem] items-center h-[11.5rem] leading-tight border-y border-gray'>
            <div className='mx-5'>
              <img className='w-[27rem]' src="https://sm.ign.com/ign_nordic/news/n/nintendo-r/nintendo-reveals-parental-controls-for-switch_f34t.jpg" alt="" />
            </div>
            <div className='flex items-center pr-16'>
              <p>Ver el video introductorio acerca del control parental de Nintendo Switch</p>
            </div>
          </div>
        </div>

        <div className='mt-7'>
          <SelectionSetting className='border-y border-gray'>
            Ajusted del control parental
          </SelectionSetting>
        </div>
      </div>
    </ListPageTransition>
  )
}
