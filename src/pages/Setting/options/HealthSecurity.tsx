import healthSecurityilus from '../../../assets/healthSecurityilus.png'
import SelectionSetting from '../../../components/layouts/SelectionSetting'
import ListPageTransition from '../../../components/transitions/ListPageTransition'

export function HealthSecurity() {
	return (
		<ListPageTransition>
			<div className='h-full w-full flex flex-col gap-8'>
				<div className='px-6 flex flex-col gap-2'>
					<p>
						Para consultar informacion mas detallada sobre el uso de
						la consola Nintendo Switch y sus funciones, visita el
						sitio de soporte de Nintendo desde una computadora o un
						dispositivo inteligente.
					</p>
					<div className='bg-[#3b3d3e] w-full h-[23.8rem] rounded-sm grid grid-rows-[2fr_1.1fr]'>
						<div className='flex items-center justify-center'>
							<img
								className='w-[13rem]'
								src={healthSecurityilus}
								alt=''
							/>
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
					<SelectionSetting className='border-t border-gray'>
						Informacion sobre salud y seguridad
					</SelectionSetting>
					<SelectionSetting className='border-y border-gray'>
						Historial de errores
					</SelectionSetting>
				</div>
			</div>
		</ListPageTransition>
	)
}
