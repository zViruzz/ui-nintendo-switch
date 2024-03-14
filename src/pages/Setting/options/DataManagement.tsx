import Line from '../../../components/Line'
import SelectionSetting from '../../../components/layouts/SelectionSetting'

function DataManagement () {
  return (
    <div className="h-full w-full">
      <div className="grid grid-cols-2 px-3 gap-[4.8rem]">
        <div>
          <h4>Memoria de consola</h4>
          <div className=" w-full h-6 rounded-sm border-2 p-[3px]">
            <div className="bg-white w-1/2 h-full"></div>
          </div>
          <div className="flex text-3xl text-[1.7rem] justify-between px-1 pt-4">
            <p>Espacio libre</p>
            <p className="text-[2.4rem]">15.5 <span className="text-[2rem]">GB</span></p>
          </div>
        </div>

        <div className="opacity-40">
          <h4>Tarjeta  microSD</h4>
          <div className=" w-full h-6 rounded-sm border-2 p-[3px]">
          </div>
          <div className="flex text-3xl text-[1.7rem] justify-between px-1 pt-4">
            <p>No se detecta la tarjeta microSD</p>
          </div>
        </div>
      </div>

      <div className='mt-16'>
        <Line />
        <div
          className='box-border px-5  h-[6.7rem] w-full shrink-0  flex items-center gap-4 hover:outline outline-[6px] outline-[#78f0f5] group hover:z-10 relative rounded-[0.5px] transition-all duration-100 hover:animate-wiggle text-[2.5rem] '
          tabIndex={0}
        >
          <div className='flex justify-between w-full opacity-40'>
            Mover datos entre la consola y una tarjeta microSD
          </div>
        </div>
        <Line />
        <SelectionSetting>
          Archivo rápido
        </SelectionSetting>

        <Line />

        <div className='text-[1.8rem] px-7 py-2 opacity-40 h-[6.3rem] w-full '>
          Esta opción permite archivar los programas seleccionados para liberar espacio.
        </div>

        <Line />

        <SelectionSetting>
          Gestionar programa
        </SelectionSetting>

        <Line />

        <div className='h-[6rem] w-full '>
        </div>

        <Line />

        <SelectionSetting>
          Gestionar de datos en la nube
        </SelectionSetting>

        <Line />

        <SelectionSetting>
          Transferencia de datos de guardado
        </SelectionSetting>

        <Line />

        <SelectionSetting>
          Gestionar capturas y videos
        </SelectionSetting>

        <Line />

        <div className='h-[10rem] w-full '>
        </div>

        <Line />
        <SelectionSetting>
          Borrar datos de guardado
        </SelectionSetting>
        <Line />

      </div>
    </div>
  )
}

export default DataManagement
