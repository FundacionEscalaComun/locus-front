import React from 'react'
import Image from 'next/image'

export default function MarqueeContentSub() {
	return (
		<span className='block py-4 fondo-blanco color-verde'>
			<span className='mx-4 align-text-top'><Image src="/img/flor-rosada.svg" width={20} height={20} alt='' /></span>
			<strong className='font-hbold text-sm'>SALIDA ESTACIÓN METRO VIÑA</strong>
			<span className='mx-4 align-text-top'><Image src="/img/flor-rosada.svg" width={20} height={20} alt='' /></span>
			<strong className='font-hbold text-sm'>SKATEPARK SAUSALITO</strong>
			<span className='mx-4 align-text-top'><Image src="/img/flor-rosada.svg" width={20} height={20} alt='' /></span>
			<strong className='font-hbold text-sm'>PLAZA PALACIO CARRASCO </strong>
			<span className='mx-4 align-text-top'><Image src="/img/flor-rosada.svg" width={20} height={20} alt='' /></span>
			<strong className='font-hbold text-sm'>PLAZA PARROQUIA</strong>
		</span>
	)
}
