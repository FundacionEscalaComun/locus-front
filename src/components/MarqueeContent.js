import React from 'react'
import Image from 'next/image'

export default function MarqueeContent() {
	return (
		<span className='block py-6 fondo-verde color-blanco'>
			<span className='mx-4 align-middle'><Image src="/img/flor-azul.svg" width={16} height={16} alt='' /></span>
			<strong className='font-hlight'>¡REVISA A LOS SELECCIONADOS DEL CONCURSO GENIUS LOCI! </strong>
		</span>
	)
}
