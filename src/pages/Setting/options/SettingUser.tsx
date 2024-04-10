import Detailtext from '../../../components/layouts/DetailText'
import SelectionSetting from '../../../components/layouts/SelectionSetting'
import profileUserUrl from '../../../assets/edu.png'

export function SettingUser () {
  return (
    <div className='w-full h-full flex flex-col'>
      <div className='flex gap-4 px-2'>
        <div className='shadow-xl'>
          <img className='w-[15.9rem] h-[15.7rem]' src={profileUserUrl} alt="user" />
          <div className='bg-[#4f4f4f] text-[2rem] text-center py-[0.83rem]'>Viruz X</div>
        </div>

        <div className='shadow-xl'>
          <img className='w-[15.9rem] h-[15.7rem]' src={profileUserUrl} alt="user" />
          <div className='bg-[#4f4f4f] text-[2rem] text-center py-[0.83rem]'>Darkness</div>
        </div>
      </div>

      <div className='mt-14'>

        <SelectionSetting className='border-gray border-y'>
          Cambiar orden
        </SelectionSetting>
        <SelectionSetting className='border-gray border-b'>
          Registrar un usuario
        </SelectionSetting>
        <SelectionSetting className='border-gray border-b'>
          Transferencia de usuario
        </SelectionSetting>

        <Detailtext>
          <p>Transfiere inalämbricamente un usuario y sus datos de guardado a una</p>
          <p>consola que esté cerca</p>
        </Detailtext>

      </div>
    </div>
  )
}
