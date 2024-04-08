import profileUserUrl from '../../../assets/edu.png'
import Line from '../../../components/Line'
import Detailtext from '../../../components/layouts/DetailText'
import SelectionSetting from '../../../components/layouts/SelectionSetting'

export function SettingUser () {
  return (
    <div className='w-full h-full flex flex-col'>
      <div className='flex gap-3 px-2'>
        <div className='shadow-xl'>
          <img className='w-[16rem] h-[15.7rem]' src={profileUserUrl} alt="user" />
          <div className='bg-[#4f4f4f] text-[2rem] text-center py-[0.83rem]'>Viruz X</div>
        </div>

        <div className='shadow-xl'>
          <img className='w-[16rem] h-[15.7rem]' src={profileUserUrl} alt="user" />
          <div className='bg-[#4f4f4f] text-[2rem] text-center py-[0.83rem]'>Barri</div>
        </div>
      </div>

        <div className='mt-14'>
          <Line/>
          <SelectionSetting>
            Cambiar orden
          </SelectionSetting>
          <Line/>
          <SelectionSetting>
            Registrar un usuario
          </SelectionSetting>
          <Line/>
          <SelectionSetting>
            Transferencia de usuario
          </SelectionSetting>
          <Line/>

        <Detailtext>
          <p>Transfiere inalämbricamente un usuario y sus datos de guardado a una</p>
          <p>consola que esté cerca</p>
        </Detailtext>

        </div>
    </div>
  )
}
