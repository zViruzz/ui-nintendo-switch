import SelectionSetting from '../../../components/layouts/SelectionSetting'

function HealthSecurity () {
  return (
    <div className="h-full w-full flex flex-col gap-8">
      <div className="px-6 flex flex-col gap-2">
        <p>
          Para consultar informacion mas detallada sobre el uso de la consola Nintendo Switch y sus funciones, visita el sitio de soporte de Nintendo desde una computadora o un dispositivo inteligente.
        </p>
        <div className="bg-[#3b3d3e] w-full h-[23.8rem] rounded-sm grid grid-rows-[2fr_1.1fr]">
          <div>

          </div>
          <div className='text-center'>
            <div className='text-[2.4rem] leading-tight'>
              support.nintendo.com/switch/help
            </div>
            <p className='text-[1.7rem] text-neutral-500 leading-snug'>
              Nintendo of America Inc.
              <br />
              4600 150th Ave NE Redmond, WA 98052
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className='w-full h-[1px] bg-[#ffffff34]'></div>
        <SelectionSetting>
          Informacion sobre salud y seguridad
        </SelectionSetting>
        <div className='w-full h-[1px] bg-[#ffffff34]'></div>
        <SelectionSetting>
          Historial de errores
        </SelectionSetting>
        <div className='w-full h-[1px] bg-[#ffffff34]'></div>
      </div>

    </div>
  )
}

export default HealthSecurity
