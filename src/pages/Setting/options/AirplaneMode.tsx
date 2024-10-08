import ListPageTransition from '../../../transitions/ListPageTransition'
import SelectionSwitch from '../../../ui/SelectionSwitch'

export function AirplaneMode() {
	return (
		<ListPageTransition>
			<div className=' h-full w-full flex flex-col'>
				<SelectionSwitch className='border-y border-gray'>
					Modo avion
				</SelectionSwitch>

				<div className='py-3 pl-6 text-[1.83rem] text-[#8c8c8c] leading-snug'>
					<p>
						Todas las comunicaciones inalamnricas, como Wi-Fi o
						Bluetooth, se desactivarán.
					</p>
					<p>
						Si la consola tiene el modo avión activado, ciertos tipos
						de comunicacion inalambrica pueden habilitarse
						manualmente.
					</p>
					<ul className='list-image-checkmark pl-7 py-6'>
						<li>
							También podrás cambiar estos ajustes mediante la
							configuración de acceso rápido (manten oprimido
							<span className='after:content-home pl-[0.40rem]' />
							).
						</li>
					</ul>
				</div>
			</div>
		</ListPageTransition>
	)
}
