import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Locus Festival Internacional Infancia y Adolescencia en la Ciudad</title>
            </Head>

            <Header />
			<main>

				<section className='color-azul fondo-amarillo' id='sobre'>
					<div className='max-w-screen-md mx-8 lg:mx-auto pt-16 pb-8 lg:pt-32 lg:text-xl'>
						<h2 className='font-hbold text-3xl lg:text-4xl text-center lg:text-left lg:mb-16 bullet'>INTERVENCIONES<br />URBANAS EN VIÑA DEL MAR</h2>
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
						<p className='my-8'>Anímate a participar, ¡la ciudad también es tuya!</p>
					</div>
				</section>

				<section className='pt-56 lg:pt-72 pb-16 lg:pb-40 fondo-amarillo fondo-figura-blanca' id='redes'>
					<div className='max-w-screen-md mx-auto'>
						<h2 className='font-hbold text-3xl lg:text-4xl text-center lg:text-left bullet'>BASES Y FORMULARIO<br />DE POSTULACIÓN<br />CONCURSO GENIUS LOCI</h2>
						<p className='pl-24 mt-8'><a href="#" className='text-2xl uppercase'>Descargar</a></p>
					</div>
				</section>
			</main>

			<Footer />
        </>
    )
}
