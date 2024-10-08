import ListPageTransition from '../../../transitions/ListPageTransition'
import Detailtext from '../../../ui/DetailText'
import SelectionSwitch from '../../../ui/SelectionSwitch'

export function LockScreen() {
	return (
		<ListPageTransition>
			<div className='h-full w-full flex flex-col'>
				<div>
					<SelectionSwitch className='border-y border-gray'>
						Bloquear la consola en el modo de espera
					</SelectionSwitch>
				</div>
				<div>
					<Detailtext>
						<p>
							Bloquea la pnatalla para que tengas que oprimir tres
							veces el mismo botón para salir del modo de espera. La
							pantalla no se bloqueará si la consola esta conectada a
							un televisor.
						</p>
					</Detailtext>
				</div>
			</div>
		</ListPageTransition>
	)
}
