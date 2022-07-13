import React from 'react'
import Image from 'next/image'
import { congresoCerrado } from '@/lib/congreso';

export default function MarqueeContent() {
	let concursoPostergado = new Date() >= new Date('2022-07-14T12:00');
	return (
		<span className='block py-6'>
			<span className='mx-4 align-middle'><Image src="/img/flor-azul.svg" width={16} height={16} alt='' /></span>
			<strong className='font-hbold'>¡REVISA LAS CONVOCATORIAS!</strong> · CONGRESO {(congresoCerrado)? 'CONVOCATORIAS CERRADAS' : 'HASTA EL 15 DE JULIO'} · CONCURSO HASTA {(concursoPostergado)? '29 DE JULIO' : '25 DE JULIO'}
		</span>
	)
}
