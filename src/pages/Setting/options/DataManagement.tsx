import SelectionSetting from '../../../ui/SelectionSetting'

export function DataManagement() {
	return (
		<div className='h-full w-full'>
			<div className='grid grid-cols-2 px-3 gap-[4.8rem]'>
				<div>
					<h4 className='text-4xl leading-normal'>
						Memoria de consola
					</h4>
					<div className=' w-full h-6 rounded-sm border-2 p-[3px]'>
						<div className='bg-white w-2/3 h-full' />
					</div>
					<div className='flex text-3xl text-[1.7rem] justify-between px-1 pt-4'>
						<p>Espacio libre</p>
						<p className='text-[2.4rem]'>
							25.5 <span className='text-[2rem]'>GB</span>
						</p>
					</div>
				</div>

				<div className='opacity-40'>
					<h4>Tarjeta microSD</h4>
					<div className=' w-full h-6 rounded-sm border-2 p-[3px]' />
					<div className='flex text-3xl text-[1.7rem] justify-between px-1 pt-4'>
						<p>No se detecta la tarjeta microSD</p>
					</div>
				</div>
			</div>

			<div className='mt-16'>
				<SelectionSetting
					className='border-gray border-y'
					disabled={true}
				>
					Mover datos entre la consola y una tarjeta microSD
				</SelectionSetting>
				<SelectionSetting className='border-gray border-b'>
					Archivo rápido
				</SelectionSetting>

				<div className='text-[1.8rem] px-7 py-2 text-description h-[6.3rem] w-full '>
					Esta opción permite archivar los programas seleccionados
					para liberar espacio.
				</div>

				<SelectionSetting className='border-gray border-y'>
					Gestionar programa
				</SelectionSetting>

				<SelectionSetting className='border-gray mt-[5.9rem] border-y'>
					Guardado de datos en la nube
				</SelectionSetting>
				<SelectionSetting className='border-gray  '>
					Transferencia de datos de guardado
				</SelectionSetting>
				<SelectionSetting className='border-gray  border-y'>
					Gestionar capturas y videos
				</SelectionSetting>

				<SelectionSetting className='border-gray mt-[10rem] border-y'>
					Borrar datos de guardado
				</SelectionSetting>
			</div>
		</div>
	)
}
