import SelectionSetting from '../../../components/layouts/SelectionSetting'
import Line from '../../../components/Line'

function Internet () {
  return (
    <div className='h-full w-full flex flex-col gap-10'>
      <div>
        <Line />
        <SelectionSetting>
          Configuración de internet
        </SelectionSetting>
        <Line />
        <SelectionSetting>
          Prueba de conexión
        </SelectionSetting>
        <Line />
      </div>

      <div>
        <div className='bg-[#383a3b] p-5 flex justify-between'>
          <span>
            Estado del a conexión
          </span>
          <span>
            Conexión con red Wi-Fi
          </span>
        </div>
        <ul className='text-3xl ml-[3.8rem] [&>li]:p-3 [&>li]:px-4 text-neutral-400 [&>li]:flex [&>li]:justify-between'>
          <li>
            <span>Dirección MAC de la consola</span>
            <span>7A-28-F3-E5-94-G7</span>
          </li>
          <li className='bg-[#383a3b]'>
            <span>Dispositivo de red</span>
            <span>Fiberten</span>
          </li>
          <li>
            <span>Clave de seguridad</span>
            <span>WPA1_PSK (ARS)</span>
          </li>
          <li className='bg-[#383a3b]'>
            <span>Banda de frecuencia</span>
            <span>2.2 Ghz</span>
          </li>
          <li>
            <span>Canal</span>
            <span>1</span>
          </li>
          <li className='bg-[#383a3b]'>
            <span>Intensidad de la señal</span>
            <span>2</span>
          </li>
          <li>
            <span>Dircción IP</span>
            <span>192.161.1.1</span>
          </li>
          <li className='bg-[#383a3b]'>
            <span>Máscara de subred</span>
            <span>244.244.244.1</span>
          </li>
          <li>
            <span>Puerta de enlace</span>
            <span>192.151.1.1</span>
          </li>
          <li className='bg-[#383a3b]'>
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
