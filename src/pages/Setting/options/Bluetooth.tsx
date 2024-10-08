import ListPageTransition from '../../../transitions/ListPageTransition'
import Detailtext from '../../../ui/DetailText'
import SelectionSetting from '../../../ui/SelectionSetting'

export function Bluetooth() {
	return (
		<ListPageTransition>
			<div className=' h-full w-full flex flex-col'>
				<SelectionSetting className='border-gray border-y'>
					Añadir dispositivo
				</SelectionSetting>

				<Detailtext>
					<p>
						Es necesario volver a conectar los dispositivos para usar
						audio por Bluetooth.
					</p>
					<ul className='list-image-checkmark pl-7 py-6'>
						<li>
							Es posible conectar hasta dos controles inalåmbricos
							mientras se utiliza audio a través de Bluetooth.
						</li>
						<li>
							El audio por Bluetooth se desconectarä al usar la
							comunicaciön local.
						</li>
						<li>No es posible utilizar micrófonos Bluetooth.</li>
						<li>
							Es posible que experimentes problemas de latencia segün
							el dispositivo Bluetooth que utilices.
						</li>
					</ul>
				</Detailtext>
			</div>
		</ListPageTransition>
	)
}

export default Bluetooth
