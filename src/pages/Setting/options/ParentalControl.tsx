import Line from '../../../components/Line'
import ParentalControlIcon from '../../../assets/ParentalControlIcon.png'
import SelectionSetting from '../../../components/layouts/SelectionSetting'

function ParentalControl () {
  return (
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
        <Line />
        <div className='flex text-4xl text-[2.55rem] items-center h-[11.5rem] leading-tight'>
          <div className='mx-5'>
            <img className='w-[27rem]' src="https://sm.ign.com/ign_nordic/news/n/nintendo-r/nintendo-reveals-parental-controls-for-switch_f34t.jpg" alt="" />
          </div>
          <div className='flex items-center pr-16'>
            <p>Ver el video introductorio acerca del control parental de Nintendo Switch</p>
          </div>
        </div>
        <Line />
      </div>

      <div className='mt-7'>
        <Line/>
        <SelectionSetting>
          Ajusted del control parental
        </SelectionSetting>
        <Line/>
      </div>
    </div>
  )
}

export default ParentalControl
