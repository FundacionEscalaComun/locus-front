import React from 'react'
import Image from 'next/image'

export default function MarqueeContent() {
  return (
	<span className='block py-6'>
		<span className='mx-4 align-middle'><Image src="/img/flor-azul.svg" width={16} height={16} alt='' /></span>
		<strong className='font-hbold'>¡REVISA LAS CONVOCATORIAS!</strong> · CONGRESO HASTA EL 15 DE JULIO · CONCURSO HASTA 25 DE JULIO
	</span>
  )
}
