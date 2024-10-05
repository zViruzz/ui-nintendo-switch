import Detailtext from '../../../components/layouts/DetailText'
import SelectionSetting from '../../../components/layouts/SelectionSetting'
import ListPageTransition from '../../../components/transitions/ListPageTransition'

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
