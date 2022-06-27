import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

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
						<p className='my-8 text-center'>Anímate a participar, ¡la ciudad también es tuya!</p>
						<p className='my-8 text-center'><a href="#info" className='button' onClick={() => setInfo(true)}>Más información</a></p>
					</div>
				</section>

				<section className={'pt-56 fondo-amarillo fondo-figura-blanca color-verde font-medium ' + (!info && 'hidden')} id='info'>
					<div className='max-w-screen-md mx-8 lg:mx-auto'>
						<h2 className='font-hbold text-xl lg:text-4xl bullet flor-rosada'>SOBRE GENIUS LOCI</h2>
						<p className='my-8'>Los romanos creían que todos los lugares estaban custodiados por un
						espíritu protector que mantenía la armonía del espacio. Este espíritu,
						conocido como Genius Loci, marcaba los elementos característicos del
						lugar, determinando lo que aquel lugar era y lo que podía llegar a ser.</p>
						<p className='my-8'>En LOCUS creemos que cada lugar tiene un espíritu infantil y este concurso
						busca desentrañar ese espíritu con 5 Intervenciones de urbanismo táctico a
						testearse entre el 4 y 8 de octubre en la ciudad de Viña del Mar, Chile.</p>
					</div>
					<div className='max-w-screen-md mx-8 lg:mx-auto mt-16'>
						<h2 className='font-hbold text-xl lg:text-4xl bullet flor-rosada'>¿QUÉ HACER PARA PARTICIPAR?</h2>
						<p className='my-8'>Ponerse en los zapatos de las Infancias, comprender el encargo que los
						niñ@s y jóvenes han realizado, y descubrir el espíritu de niñ@ de cada
						lugar.</p>
						<p className='my-8'>Contar con tiempo, durante una semana previa al festival, para construir la
						intervención en Viña del Mar, en las fechas indicadas.</p>
						<p className='my-8'>El equipo ejecutor deberá contar con al menos dos personas a cargo de
						llevar a cabo la construcción, y presentar competencias profesionales que
						den cuenta que podrán ejecutar las obras correctamente.</p>
						<p className='my-8'><strong>Descargar</strong> y completar la postulación, en el formulario de postulación; en
						este documento tienes que justificar la propuesta textual y subirlos al
						formulario digital, donde se justifica visualmente la propuesta, dando
						cuenta cómo se instala la visión de la infancia en el Lugar. Es requisito
						contar con una propuesta de diseño del prototipo y un presupuesto
						detallado. Se admitirán sólo postulaciones en español.</p>
						<p className='my-8'>¡Revisa antes las bases del concurso y las respuestas a las preguntas
						frecuentes recibidas!</p>
					</div>
					<div className='max-w-screen-md mx-8 lg:mx-auto mt-16'>
						<h2 className='font-hbold text-xl lg:text-4xl bullet flor-rosada'>LOS PREMIOS</h2>
						<p className='my-8'>El jurado del concurso Genius Loci seleccionará las 5 intervenciones que se
construirán en Viña del Mar. Cada una de las 5 propuestas seleccionadas
contará con un monto de hasta $3.000.000 de pesos chilenos para los
costos de materiales de construcción. El último día del Festival, el jurado
determinará las 3 mejores propuestas, quienes serán los ganadores del
concurso Genius Loci, y recibirán los siguientes premios:</p>
						<p className='my-8'>Primer lugar: $1.500.000.-<br />
Segundo lugar: $1.000.000.-<br />
Tercer lugar: $500.000.-</p>
<p className='my-8'>Todos los proyectos y equipos seleccionados serán publicados en
plataformas de difusión, y en el documento final de síntesis del evento.</p>
					</div>
					<div className='bg-white'>
						<div className='max-w-screen-md mx-8 lg:mx-auto mt-16 '>
							<h2 className='font-hbold text-xl lg:text-4xl bullet flor-rosada'>LOS TIEMPOS</h2>
							<p className='my-8'><strong>27 de junio</strong> · Lanzamiento del concurso</p>
							<p className='my-8'><strong>27 de junio al 25 de julio</strong> · Lanzamiento del concurso</p>
							<p className='my-8'><strong>25 de julio</strong> · Cierre de Postulación</p>
							<p className='my-8'><strong>22 de agosto</strong> ·  Anuncio de ganadores</p>
							<p className='my-8'><strong>1 y 2 de septiembre</strong> · Sesión de ajustes de propuesta</p>
							<p className='my-8'><strong>24 de septiembre al 03 de octubre</strong> · Construcción</p>
							<p className='my-8'><strong>4 al 8 de octubre</strong> · Apertura al público durante el Festival</p>
						</div>
						<div className='max-w-screen-md mx-8 lg:mx-auto mt-16 '>
							<h2 className='font-hbold text-xl lg:text-4xl bullet flor-rosada'>PASOS</h2>
							<p className='my-8'><strong>1.</strong> Descarga y revisa detenidamente las Bases del concurso y su anexo.</p>
							<p className='my-8'><strong>2.</strong> Descarga y completa el formulario de postulación.</p>
							<p className='my-8'><strong>3.</strong> Elige uno o más lugares a intervenir (descarga las fichas aquí) (cada
	lugar es una postulación individual, puedes postular a más de un lugar).</p>
							<p className='my-8'><strong>4.</strong> Crear al menos una propuesta siguiendo las Bases del concurso.</p>
							<p className='my-8'><strong>5.</strong> Sube tu propuesta en Postula aquí antes del 25 de Julio del 2022.</p>
							<p className='my-8 text-center font-hbold text-lg'>¡Conoce los lugares y descarga las fichas por lugar!</p>
							<p className='mt-8 text-center'><a href="#mapa" className='button fondo-verde inline-block'><Image src="/img/ico-descarga.svg" width={24} height={24} alt='descarga' /> <span className='ml-4'>CONOCE LOS LUGARES</span></a></p>
						</div>
					</div>
				</section>

				<section id='mapa' className={'mapa ' + (!info && 'hidden')} onClick={handleClickOutside}>
					<div className='overlay'>
						<div className='titulo'><span className='font-hbold'>LUGARES DE<br />INTERVENCIÓN</span><br /><small>LOCUS EN VIÑA DEL MAR</small></div>
						<div className='uppercase text-center'>
							<article className='lugar lugar-1 flex items-start'>
								<a className='numero font-hbold' onClick={() => setLugar(1)}>1</a>
								<div className={'nombre fondo-fucsia rounded lg:rounded-3xl px-2 lg:px-10 lg:py-6 lg:ml-4 z-10 ' + (lugar != 1 && 'hidden')}>
									<p className='font-hbold text-sm lg:text-base'>Plaza Parroquia</p>
									<p className='mt-2 text-sm font-semibold'><a href="/descargas/intervenciones/Locus Fichas Lugares- Plaza Parroquia.pdf" className='inline-block' target='_blank'><Image src="/img/ico-descarga.svg" width={24} height={24} alt='descarga' /> <span className='ml-4'>DESCARGAR FICHA</span></a></p>
								</div>
							</article>
							<article className='lugar lugar-2 flex items-start'>
								<a className='numero font-hbold' onClick={() => setLugar(2)}>2</a>
								<div className={'nombre fondo-fucsia rounded lg:rounded-3xl px-2 lg:px-10 lg:py-6 lg:ml-4 z-10 ' + (lugar != 2 && 'hidden')}>
									<p className='font-hbold text-sm lg:text-base'>Terreno EFE</p>
									<p className='mt-2 text-sm font-semibold'><a href="/descargas/intervenciones/Locus Fichas Lugares- Terreno EFE.pdf" className='inline-block' target='_blank'><Image src="/img/ico-descarga.svg" width={24} height={24} alt='descarga' /> <span className='ml-4'>DESCARGAR FICHA</span></a></p>
								</div>
							</article>
							<article className='lugar lugar-3 flex items-start'>
								<a className='numero font-hbold' onClick={() => setLugar(3)}>3</a>
								<div className={'nombre fondo-fucsia rounded lg:rounded-3xl px-2 lg:px-10 lg:py-6 lg:ml-4 z-10 ' + (lugar != 3 && 'hidden')}>
									<p className='font-hbold text-sm lg:text-base'>Plaza Poblacion Riesco</p>
									<p className='mt-2 text-sm font-semibold'><a href="/descargas/intervenciones/Locus Fichas Lugares- Población Riesco.pdf" className='inline-block' target='_blank'><Image src="/img/ico-descarga.svg" width={24} height={24} alt='descarga' /> <span className='ml-4'>DESCARGAR FICHA</span></a></p>
								</div>
							</article>
							<article className='lugar lugar-4 flex items-start flex-row-reverse'>
								<a className='numero font-hbold' onClick={() => setLugar(4)}>4</a>
								<div className={'nombre fondo-fucsia rounded lg:rounded-3xl px-2 lg:px-10 lg:py-6 lg:mr-4 z-10 ' + (lugar != 4 && 'hidden')}>
									<p className='font-hbold text-sm lg:text-base'>Borde Laguna Skatepark Sausalito</p>
									<p className='mt-2 text-sm font-semibold'><a href="/descargas/intervenciones/Locus Fichas Lugares- Skatepark.pdf" className='inline-block' target='_blank'><Image src="/img/ico-descarga.svg" width={24} height={24} alt='descarga' /> <span className='ml-4'>DESCARGAR FICHA</span></a></p>
								</div>
							</article>
							<article className='lugar lugar-5 flex items-start'>
								<a className='numero font-hbold' onClick={() => setLugar(5)}>5</a>
								<div className={'nombre fondo-fucsia rounded lg:rounded-3xl px-2 lg:px-10 lg:py-6 lg:ml-4 z-10 ' + (lugar != 5 && 'hidden')}>
									<p className='font-hbold text-sm lg:text-base'>Jardines Palacio Carrasco</p>
									<p className='mt-2 text-sm font-semibold'><a href="/descargas/intervenciones/Locus Fichas Lugares- Palacio Carrasco.pdf" className='inline-block' target='_blank'><Image src="/img/ico-descarga.svg" width={24} height={24} alt='descarga' /> <span className='ml-4'>DESCARGAR FICHA</span></a></p>
								</div>
							</article>
						</div>
					</div>
				</section>

				<section className={'pt-32 lg:pt-64 pb-16 fondo-figura-amarilla relative ' + (!info && 'fondo-amarillo')} id='bases'>
					<div className='max-w-screen-md mx-8 lg:mx-auto'>
						<h2 className='font-hbold text-xl lg:text-4xl bullet'>BASES Y FORMULARIO<br />DE POSTULACIÓN<br />CONCURSO GENIUS LOCI</h2>
						<p className='lg:pl-24 my-8'><a href="#" className='button inline-block'><Image src="/img/ico-descarga.svg" width={24} height={24} alt='descarga' /> <span className='ml-4'>FORMULACIÓN DE POSTULACIÓN AL CONCURSO</span></a></p>
						<p className='lg:pl-24 my-8'><a href="#" className='button inline-block'><Image src="/img/ico-descarga.svg" width={24} height={24} alt='descarga' /> <span className='ml-4'>BASES DEL CONCURSO</span></a></p>
						<p className='lg:pl-24 my-8'><a href="#" className='button inline-block'><Image src="/img/ico-descarga.svg" width={24} height={24} alt='descarga' /> <span className='ml-4'>CONOCE LOS LUGARES</span></a></p>
					</div>
					<div className='max-w-screen-md mx-8 lg:mx-auto mt-28'>
						<h2 className='font-hbold text-xl lg:text-4xl bullet flor-azul'>¡POSTULA AQUÍ!</h2>
						<p className='lg:pl-24 my-8'><a href="#" className='button inline-block'>POSTULAR</a></p>
					</div>
				</section>
			</main>

			<Footer bgClass="fondo-amarillo" />
        </>
    )
}
