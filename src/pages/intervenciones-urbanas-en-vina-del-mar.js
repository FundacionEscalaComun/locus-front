import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { concursoCerrado } from '@/lib/concurso'

export default function Intervenciones() {
	const [info, setInfo] = useState(false);
	const [lugar, setLugar] = useState(null);

	function handleClickOutside(e) {
		if(!e.target.classList.contains('numero')) {
			setLugar(null);
		}
	}
    return (
        <>
            <Head>
                <title>Locus Festival Internacional Infancia y Adolescencia en la Ciudad</title>
            </Head>

            <Header />
			<main>

				<section className='color-azul fondo-amarillo' id='sobre'>
					<div className='max-w-screen-md mx-8 lg:mx-auto pt-16 pb-8 lg:pt-32 lg:text-xl'>
						<h2 className='font-hbold text-xl lg:text-4xl lg:mb-16 bullet'>INTERVENCIONES<br />URBANAS EN VIÑA DEL MAR</h2>
						<p className='my-8'>Durante 5 días en octubre, el Festival Locus transformará la ciudad de Viña
						del Mar en un experimento creativo y colaborativo a través de intervenciones
						de urbanismo táctico seleccionadas en el concurso de arquitectura Genius
						Loci.</p>
						<p className='my-8'>El encargo del concurso Genius Loci, nace de la visión e ideas de niñ@s y
						jóvenes durante la experiencia de workshops apoyada por estudiantes de
						Arquitectura y Diseño de la Pontificia Universidad Católica de Valparaíso y
						Universidad Técnica Federico Santa María. Es desde estos workshops, donde
						la visión propia de niñ@s y jóvenes podrá ser expresada, para así poder
						formular los lineamientos de diseño de las bases del concurso, al que podrán
						postular equipos multidisciplinarios para diseñar las propuestas de
						intervención.</p>
						<p className='my-8'>Del concurso Genius Loci se seleccionarán las intervenciones ganadoras que
						serán ejecutadas en lugares estratégicos de la ciudad, con activaciones
						artísticas y lúdicas para la celebración del LOCUS en su primera edición en
						Viña del Mar.</p>
						<p className='my-8'>Durante la semana del Festival LOCUS, se activarán las intervenciones
						diseñadas para que toda la ciudadanía pueda conocerlas y disfrutarlas.</p>
					</div>
				</section>

				<section className={'pt-56 fondo-amarillo fondo-figura-blanca color-verde font-medium'} id='info'>
					<div className='max-w-screen-md mx-8 lg:mx-auto'>
						<p className='pl-16 lg:pl-24 text-lg lg:text-2xl'>GANADORES</p>
						<h2 className='pl-16 lg:pl-24 font-hbold text-xl lg:text-4xl flor-rosada mb-14'>CONCURSO GENIUS LOCI</h2>
						<h2 className='font-hbold text-xl lg:text-4xl bullet flor-rosada'>PLAZA PARROQUIA</h2>
						<p className='pl-16 lg:pl-24 text-lg lg:text-2xl mt-1'>EDUARDO GROVE ENTRE MONTAÑA Y ALVAREZ</p>
						<div className='lg:flex flex-wrap gap-y-8 text-center mt-8'>
							<article className='my-16 lg:my-0 lg:w-1/4'>
								<div className='relative h-40'><Image src="/img/fotos/foto-perfil-Piera.png" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-bold mt-6 mb-2 text-xl'>Piera<br /> Medina</h3>
							</article>
							<article className='my-16 lg:my-0 lg:w-1/4'>
								<div className='relative h-40'><Image src="/img/fotos/foto-perfil-Danitza.png" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-bold mt-6 mb-2 text-xl'>Danitza<br /> Vymazal</h3>
							</article>
							<article className='my-16 lg:my-0 lg:w-1/4'>
								<div className='relative h-40'><Image src="/img/fotos/fotos-carole-gurdon.svg" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-bold mt-6 mb-2 text-xl'>Carole<br /> Gurdon</h3>
							</article>
							<article className='my-16 lg:my-0 lg:w-1/4'>
								<div className='relative h-40'><Image src="/img/fotos/fotos-macarena-cima.svg" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-bold mt-6 mb-2 text-xl'>Macarena<br /> Cima</h3>
							</article>
							<article className='my-16 lg:my-0 lg:w-1/4'>
								<div className='relative h-40'><Image src="/img/fotos/fotos-fernanda-chesta.svg" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-bold mt-6 mb-2 text-xl'>Fernanda<br /> Chesta</h3>
							</article>
						</div>
						<p className='my-8'>
							<h3 className='font-bold mt-6 text-xl'>Proyecto</h3>
							Ludo a la Quinta
						</p>
						<p className='my-8'>
							<h3 className='font-bold mt-6 text-xl'>Equipo</h3>
							Transversal
						</p>
						<p className='my-8'>
							<h3 className='font-bold mt-6 text-xl'>Instagram</h3>
							<a href='https://www.instagram.com/transversal_arq/'>@TRANSVERSAL_ARQ</a>
						</p>
						<p className='my-8'>
						En la plaza aparece el Genius Loci a través de una invitación a tod@s a jugar
						en la plaza como si fuese un tablero lúdico con tres trazados, que permiten
						atravesar desde calle Álvarez hacia la Quinta Vergara en distintos modos,
						viviendo una experiencia diferente en la ciudad.
						</p>
						<p className='my-8'>
						1. Un túnel dedicado al juego libre que cubre de verde-azul tu trayecto y donde podremos sentir el olor de las lavandas.
						</p>
						<p className='my-8'>
						2. Una ciclovía para probar tu bici, monopatín o patines.
						</p>
						<p className='my-8'>
						3. Un juego de pasarelas rojas de madera para saltar entre las jardineras.
						</p>
					</div>
				</section>

			</main>

			<Footer bgClass="fondo-blanco" />
        </>
    )
}
