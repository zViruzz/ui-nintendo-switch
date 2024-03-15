import Detailtext from '../../../components/layouts/DetailText'
import SelectionSwitch from '../../../components/layouts/SelectionSwitch'

function LockScreen () {
  return (
    <div className="h-full w-full flex flex-col">
      <div>
        <SelectionSwitch name='Bloquear la consola en el modo de espera'/>
      </div>
      <div>
        <Detailtext>
          <p>Bloquea la pnatalla para que tengas que oprimir tres veces el mismo botón para salir del modo de espera. La pantalla no se bloqueará si la consola esta conectada a un televisor.</p>
        </Detailtext>
      </div>
    </div>
  )
}

export default LockScreen
