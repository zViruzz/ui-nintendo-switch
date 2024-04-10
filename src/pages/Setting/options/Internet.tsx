import SelectionSetting from '../../../components/layouts/SelectionSetting'

export function Internet () {
  return (
    <div className='h-full w-full flex flex-col gap-10'>

      <div>
        <SelectionSetting className='border-y border-gray'>
          Configuración de internet
        </SelectionSetting>
        <SelectionSetting className='border-b border-gray'>
          Prueba de conexión
        </SelectionSetting>
      </div>

      <div>
        <div className='bg-table p-5 flex justify-between'>
          <span>
            Estado del a conexión
          </span>
          <span>
            Conexión con red Wi-Fi
          </span>
        </div>
        <ul className='text-[1.8rem] ml-[3.8rem] [&>li]:py-[7px] [&>li]:px-4 text-description [&>li]:flex [&>li]:justify-between'>
          <li>
            <span>Dirección MAC de la consola</span>
            <span>7A-28-F3-E5-94-G7</span>
          </li>
          <li className='bg-table'>
            <span>Dispositivo de red</span>
            <span>Fiberten</span>
          </li>
          <li>
            <span>Clave de seguridad</span>
            <span>WPA1_PSK (ARS)</span>
          </li>
          <li className='bg-table'>
            <span>Banda de frecuencia</span>
            <span>2.2 Ghz</span>
          </li>
          <li>
            <span>Canal</span>
            <span>1</span>
          </li>
          <li className='bg-table'>
            <span>Intensidad de la señal</span>
            <span>2</span>
          </li>
          <li>
            <span>Dircción IP</span>
            <span>192.161.1.1</span>
          </li>
          <li className='bg-table'>
            <span>Máscara de subred</span>
            <span>244.244.244.1</span>
          </li>
          <li>
            <span>Puerta de enlace</span>
            <span>192.151.1.1</span>
          </li>
          <li className='bg-table'>
            <span>DNS primario</span>
            <span>1.1.1.1</span>
          </li>
          <li>
            <span>DNS secundario</span>
            <span>8.8.8.8</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Internet
