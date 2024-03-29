import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Participant from '@/components/Participant'
import { useState } from 'react'

export default function Intervenciones() {
	const [actParroquia, setActParroquia] = useState(false);
	const [actEstacion, setActEstacion] = useState(false);
	const [actSkatepark, setActSkatepark] = useState(false);
	const [actPalacio, setActPalacio] = useState(false);

	return (
		<>
			<Head>
					<title>Intervenciones urbanas en Viña del Mar - LOCUS</title>
			</Head>

			<Header />
			<main>

				<section className='color-azul fondo-amarillo' id='sobre'>
					<div className='max-w-screen-md mx-8 lg:mx-auto pt-16 pb-8 lg:pt-32 lg:text-xl'>
						<h2 className='font-hbold text-xl lg:text-4xl mb-4 lg:mb-8 bullet'>INTERVENCIONES<br />URBANAS EN VIÑA DEL MAR</h2>

						<p className='pl-16 lg:pl-24'>
							<a href='/descargas/intervenciones/Actividades.pdf' className='button text-sm font-semibold text-center' target='_blank'><span className='descarga'>DESCARGA EL PROGRAMA</span></a>
						</p>

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
					</div>
					<div className="fondo-blanco">

						<div className='max-w-screen-md mx-8 lg:mx-auto'>
							<div>
								<h2 className='font-hbold text-xl lg:text-4xl bullet flor-rosada'>PLAZA PARROQUIA</h2>
								<p className='pl-16 lg:pl-24 text-lg lg:text-2xl mt-1'>EDUARDO GROVE ENTRE MONTAÑA Y ALVAREZ</p>
								<div className='flex flex-wrap gap-y-8 text-center mt-8'>
									<Participant src='/img/fotos/intervenciones/1pia-schauder.png'>Pia<br /> Schauder</Participant>
									<Participant src='/img/fotos/intervenciones/1oscar-andrade.png'>Oscar<br /> Andrade</Participant>
								</div>
								<h3 className='font-bold mt-8 text-xl'>Proyecto</h3>
								<p className='mb-8'>
									Ludo a la Quinta
								</p>
								<h3 className='font-bold mt-8 text-xl'>Equipo</h3>
								<p className='mb-8'>
									Transversal
								</p>
								<h3 className='font-bold mt-8 text-xl'>Instagram</h3>
								<p className='mb-8'>
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
								<p className='my-8'>
									<Image src="/img/fotos/intervenciones/01-plaza-parroquia.jpg" layout='responsive' width={806} height={571} alt='banner' />
								</p>
							</div>

							<div className="mt-16 color-azul hidden lg:block">
								<h2 className='font-hbold text-xl lg:text-4xl bullet flor-rosada'>ACTIVIDADES</h2>
								<p className='pl-16 lg:pl-24 text-lg lg:text-2xl mt-1'>PLAZA PARROQUIA</p>
								<table className='tabla-actividades mt-12'>
									<thead>
										<tr>
											<th></th>
											<th className='borde'>MARTES 4</th>
											<th className='borde'>MIÉRCOLES 5</th>
											<th className='borde'>JUEVES 6</th>
											<th className='borde'>VIERNES 7</th>
											<th className='borde'>SÁBADO 8</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th>AM<br />10:00<br />13:00</th>
											<td className='borde'>TALLER DE BURBUJAS GIGANTES</td>
											<td className='borde'>TALLER DE BURBUJAS GIGANTES</td>
											<td className='borde'>MUSEO ITINERANTE ARTEQUIN MUJERES EN EL ARTE</td>
											<td className='borde'>MUSEO ITINERANTE ARTEQUIN MUJERES EN EL ARTE</td>
											<td className='borde'>TALLER DE BURBUJAS GIGANTES</td>
										</tr>
										<tr>
											<th></th>
											<td className='borde'>SUSURRO Y CUENTO LANZAMIENTO</td>
											<td className='borde'></td>
											<td className='borde'>MUSEO ITINERANTE ARTEQUIN / ARTES VISUALES Y MEDIO AMBIENTE</td>
											<td className='borde'></td>
											<td className='borde'></td>
										</tr>
										<tr>
											<th className='borde'></th>
											<td className='borde'><strong>11:00</strong> TALLER DE ARTE</td>
											<td className='borde'></td>
											<td className='borde'><strong>12:00</strong> MÚSICA BANDA EL TROLE</td>
											<td className='borde'></td>
											<td className='borde'></td>
										</tr>
										<tr>
											<th>PM<br />15:00<br />18:00</th>
											<td className='borde'>TALLER DE BURBUJAS GIGANTES</td>
											<td className='borde'>TALLER DE BURBUJAS GIGANTES</td>
											<td className='borde'>MUSEO ITINERANTE ARTEQUIN MUJERES EN EL ARTE</td>
											<td className='borde'>MUSEO ITINERANTE ARTEQUIN MUJERES EN EL ARTE</td>
											<td className='borde'></td>
										</tr>
										<tr>
											<th></th>
											<td className='borde'></td>
											<td className='borde'>TALLER DE MEDIO AMBIENTE</td>
											<td className='borde'>MUSEO ITINERANTE ARTEQUIN / ARTES VISUALES Y MEDIO AMBIENTE</td>
											<td className='borde'></td>
											<td className='borde'></td>
										</tr>
									</tbody>
								</table>
								<div className='text-center mt-12'>
									<button className='button small fondo-fucsia text-sm font-semibold text-center' onClick={() => setActParroquia(!actParroquia)}>INFO ACTIVIDADES</button>
								</div>
								<table className={'tabla-actividades mt-12' + (actParroquia? '' : ' hidden')}>
									<thead>
										<tr>
											<th className='borde-fucsia'>ACTIVIDAD</th>
											<th className='borde-fucsia'>DESCRIPCIÓN</th>
											<th className='borde-fucsia'>EDADES</th>
										</tr>
									</thead>
									<tbody>
									<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>TALLER DE BURBUJAS GIGANTES EN LA CIUDAD</td>
											<td className='borde-fucsia'>Taller de burbujas gigantes para niños desde los 3 años.</td>
											<td className='borde-fucsia'>Desde los 3 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>TALLER DE ARTE</td>
											<td className='borde-fucsia'>Taller de ceramica o grabado dictado por Bellas Artes de Viña del Mar</td>
											<td className='borde-fucsia'>Desde los 6 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>SUSURROS Y CUENTOS EN LA CIUDAD</td>
											<td className='borde-fucsia'>Susurraremos por la ciudad y terminaresmos con un gran cuento.</td>
											<td className='borde-fucsia'>Todo público</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>TALLER MEDIO AMBIENTE / DEPTO MEDIO AMBIENTE VIÑA DEL MAR</td>
											<td className='borde-fucsia'>Ven a conocer la flora de la Comuna. Taller de la I. Municipalidad de Viña del Mar.</td>
											<td className='borde-fucsia'>Desde los 6 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>MUSEO ITINERANTE ARTEQUIN / ARTES VISUALES Y MEDIO AMBIENTE</td>
											<td className='borde-fucsia'>Ven a conocer el museo en la ciudad, tendremos actividades para niños desde los 3 años.</td>
											<td className='borde-fucsia'>Desde los 3 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>MUSEO ITINERANTE ARTEQUIN / MUJERES EN EL ARTE</td>
											<td className='borde-fucsia'>Ven a conocer el museo en la ciudad, tendremos actividades para niños</td>
											<td className='borde-fucsia'>Desde los 3 años</td>
										</tr>
									</tbody>
								</table>
							</div>

							<div className='mt-32'>
								<h2 className='font-hbold text-xl lg:text-4xl bullet flor-rosada'>SALIDA ESTACIÓN METRO VIÑA</h2>
								<p className='pl-16 lg:pl-24 text-lg lg:text-2xl mt-1'>ÁLVAREZ CON EDUARDO GROVE</p>
								<div className='flex flex-wrap gap-y-8 text-center mt-8'>
									<Participant src='/img/fotos/intervenciones/2simoneta-ferrada.png'>Simonetta<br /> Ferrada</Participant>
									<Participant src='/img/fotos/intervenciones/2sofia-berthelon.png'>Sofía<br /> Berthelon</Participant>
								</div>
								<h3 className='font-bold mt-8 text-xl'>Proyecto</h3>
								<p className='mb-8'>
									Paseo de los Colores
								</p>
								<h3 className='font-bold mt-8 text-xl'>Equipo</h3>
								<p className='mb-8'>
									Cromáticas
								</p>
								<h3 className='font-bold mt-8 text-xl'>Instagram</h3>
								<p className='mb-8'>
									<a href='https://www.instagram.com/simonetta.fd/'>@SIMONETTA.FD</a>
									<a href='https://www.instagram.com/a.noram/' className='ml-4'>@A.NORAM</a>
								</p>
								<p className='my-8'>
								En la salida del Metro, aparece el Genius Loci a través de una invitación a
	tod@s a salir del metro y recorrer su entorno a través de colores y diferentes
	formas de detenerse en este espacio de paso.
								</p>
								<p className='my-8'>
								Aquí podrás encontrar Islas móviles que se irán cambiando todos los días
	para sentarse afuera del metro de formas diferentes que te sorprenderán
	todos los días del festival. También podrás ver la ciudad a través de un espejo
	de agua o un cubículo de colores, que harán de este espacio, un espacio
	diferente en estos 5 días.
								</p>
								<p className='my-8'>
									<Image src="/img/fotos/intervenciones/02-metro-viña.jpg" layout='responsive' width={807} height={570} alt='banner' />
								</p>
							</div>

							<div className="mt-16 color-azul hidden lg:block">
								<h2 className='font-hbold text-xl lg:text-4xl bullet flor-rosada'>ACTIVIDADES</h2>
								<p className='pl-16 lg:pl-24 text-lg lg:text-2xl mt-1'>SALIDA ESTACIÓN METRO VIÑA</p>
								<table className='tabla-actividades mt-12'>
									<thead>
										<tr>
											<th></th>
											<th className='borde'>MARTES 4</th>
											<th className='borde'>MIÉRCOLES 5</th>
											<th className='borde'>JUEVES 6</th>
											<th className='borde'>VIERNES 7</th>
											<th className='borde'>SÁBADO 8</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th>AM<br />10:00<br />13:00</th>
											<td className='borde'>MUSEO ITINERANTE ARTEQUIN MUJERES EN EL ARTE</td>
											<td className='borde'>MUSEO ITINERANTE ARTEQUIN MUJERES EN EL ARTE</td>
											<td className='borde'>SUSURROS Y CUENTOS EN LA CIUDAD</td>
											<td className='borde'>BIBLIO ITINERANTE</td>
											<td className='borde'>TALLER ESCALADA INFANTIL / BOULDER MÓVIL</td>
										</tr>
										<tr>
											<th></th>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'>MUSEO ITINERANTE ARTEQUIN / ARTES VISUALES Y MEDIO AMBIENTE</td>
											<td className='borde'></td>
										</tr>
										<tr>
											<th className='borde'></th>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'>SUSURROS Y CUENTOS EN LA CIUDAD</td>
											<td className='borde'></td>
										</tr>
										<tr>
											<th>PM<br />15:00<br />18:00</th>
											<td className='borde'>MUSEO ITINERANTE ARTEQUIN / MUJERES EN EL ARTE</td>
											<td className='borde'>MUSEO ITINERANTE ARTEQUIN / MUJERES EN EL ARTE</td>
											<td className='borde'>TALLER ESCALADA INFANTIL / BOULDER MÓVIL</td>
											<td className='borde'>MUSEO ITINERANTE ARTEQUIN / ARTES VISUALES Y MEDIO AMBIENTE</td>
											<td className='borde'></td>
										</tr>
										<tr>
											<th></th>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'>TALLER ESCALADA INFANTIL / BOULDER MÓVIL</td>
											<td className='borde'></td>
										</tr>
									</tbody>
								</table>
								<div className='text-center mt-12'>
									<button className='button small fondo-fucsia text-sm font-semibold text-center' onClick={() => setActEstacion(!actEstacion)}>INFO ACTIVIDADES</button>
								</div>
								<table className={'tabla-actividades mt-12' + (actEstacion? '' : ' hidden')}>
									<thead>
										<tr>
											<th className='borde-fucsia'>ACTIVIDAD</th>
											<th className='borde-fucsia'>DESCRIPCIÓN</th>
											<th className='borde-fucsia'>EDADES</th>
										</tr>
									</thead>
									<tbody>
									<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>SUSURROS Y CUENTOS EN LA CIUDAD</td>
											<td className='borde-fucsia'>Susurraremos por la ciudad y terminaresmos con un gran cuento.</td>
											<td className='borde-fucsia'>Todo público</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>MUSEO ITINERANTE ARTEQUIN / ARTES VISUALES Y MEDIO AMBIENTE</td>
											<td className='borde-fucsia'>Ven a conocer el museo en la ciudad, tendremos actividades para niños desde los 3 años.</td>
											<td className='borde-fucsia'>Desde los 3 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>MUSEO ITINERANTE ARTEQUIN / MUJERES EN EL ARTE</td>
											<td className='borde-fucsia'>Ven a conocer el museo en la ciudad, tendremos actividades para niños</td>
											<td className='borde-fucsia'>Desde los 3 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>BIBLIO ITINERANTE</td>
											<td className='borde-fucsia'>La biblioteca se abre a la ciudad con un espacio para la lectura con muchos libros interantes para la Infacia y adolescencia. Espacio de la I. Municipalidad de Viña del Mar</td>
											<td className='borde-fucsia'>Todo público</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>TALLER ESCALADA INFANTIL / BOULDER MÓVIL</td>
											<td className='borde-fucsia'>La ciudad tambien es para el deporte, ven a una taller de escalada en el boulder móvil de Tornamesa.</td>
											<td className='borde-fucsia'>Desde los 6 años</td>
										</tr>
									</tbody>
								</table>
							</div>

							<div className='mt-32'>
								<h2 className='font-hbold text-xl lg:text-4xl bullet flor-rosada'>TERRENO EFE</h2>
								<p className='pl-16 lg:pl-24 text-lg lg:text-2xl mt-1'>TERRENO ENTRE ALVAREZ Y VIANA CON CALLE DE ACCESO A ESTACIÓN</p>
								<div className='flex flex-wrap gap-y-8 text-center mt-8'>
									<Participant src='/img/fotos/intervenciones/3alejandra-saldias.png'>Alejandro<br /> Saldias</Participant>
									<Participant src='/img/fotos/intervenciones/3catalina-noguera.png'>Catalina<br /> Noguera</Participant>
									<Participant src='/img/fotos/intervenciones/3felipe-aranda.png'>Felipe<br /> Aranda</Participant>
								</div>
								<h3 className='font-bold mt-8 text-xl'>Proyecto</h3>
								<p className='mb-8'>
									Escaleno
								</p>
								<h3 className='font-bold mt-8 text-xl'>Equipo</h3>
								<p className='mb-8'>
									SIT.URB
								</p>
								<h3 className='font-bold mt-8 text-xl'>Instagram</h3>
								<p className='mb-8'>
									<a href='https://www.instagram.com/sit.urb/'>@SIT.URB</a>
								</p>
								<p className='my-8'>
								En el terreno EFE aparece el Genius Loci transformando por 5 días este
	terreno vacío en un espacio de juego con estructuras que permitirán vivir
	nuevos estímulos para los sentidos.
								</p>
								<p className='my-8'>
								Se ofrecen nuevas formas capaces de dar un escondite, generar túneles
	para pasar, nuevas sombras para descubrir, estructuras perforadas que
	permiten ser traspasadas o escaladas, y algunos elementos que permitirán
	ver otro movimiento y sonido en este espacio.
								</p>
								<p className='my-8'>
									<Image src="/img/fotos/intervenciones/03-escaleno.jpg" layout='responsive' width={807} height={429} alt='banner' />
								</p>
							</div>

							<div className='mt-32'>
								<h2 className='font-hbold text-xl lg:text-4xl bullet flor-rosada'>SKATEPARK SAUSALITO</h2>
								<p className='pl-16 lg:pl-24 text-lg lg:text-2xl mt-1'>RIBERA NORPONIENTE Y DE LA LAGUNA SAUSALITO</p>
								<div className='sm:flex flex-wrap gap-y-8 text-center mt-8'>
									<Participant src='/img/fotos/intervenciones/logo-skate-park-46.svg'>Club Skate<br /> Viña del Mar</Participant>
								</div>
								<h3 className='font-bold mt-8 text-xl'>Lugar</h3>
								<p className='mb-8'>
									Skatepark Sausalito<br />(Ribera NorPoniente de la Laguna Sausalito)
								</p>
								<h3 className='font-bold mt-8 text-xl'>Proyecto</h3>
								<p className='mb-8'>
									Dona tu tabla y aprende
								</p>
								<h3 className='font-bold mt-8 text-xl'>Equipo</h3>
								<p className='mb-8'>
									Club de Skate Viña del Mar
								</p>
								<h3 className='font-bold mt-8 text-xl'>Instagram</h3>
								<p className='mb-8'>
									<a href='https://www.instagram.com/clubskatevinadelmar/'>@CLUBSKATEVINADELMAR</a>
								</p>
								<p className='my-8'>
								En el skatepark aparece el Genius Loci mejorando los espacios con material reciclado (tablas usadas de skate), para generar columpios y otros juegos entre los árboles, para generar un espacio no solo para los skaters, sino para todas sus familias. Aquí podrás disfrutar de zona de descanso y juego para mirar la laguna. Además se renovarán las pinturas de los bowls, para demarcar zonas según dificultad.
								</p>
								<p className='my-8'>
								El equipo trabajará la intervención en talleres con niñas y niños para pintar un mural con Payo y trabajará con el apoyo de la Fundación Deporte libre.
								</p>
								<p className='my-8'>
									<Image src="/img/fotos/intervenciones/04-skatepark-sausalito.jpg" layout='responsive' width={806} height={363} alt='banner' />
								</p>
							</div>

							<div className="mt-16 color-azul hidden lg:block">
								<h2 className='font-hbold text-xl lg:text-4xl bullet flor-rosada'>ACTIVIDADES</h2>
								<p className='pl-16 lg:pl-24 text-lg lg:text-2xl mt-1'>SKATEPARK SAUSALITO</p>
								<table className='tabla-actividades mt-12'>
									<thead>
										<tr>
											<th></th>
											<th className='borde'>MARTES 4</th>
											<th className='borde'>MIÉRCOLES 5</th>
											<th className='borde'>JUEVES 6</th>
											<th className='borde'>VIERNES 7</th>
											<th className='borde'>SÁBADO 8</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th>AM<br />10:00<br />13:00</th>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'><strong>10:00</strong> MÚSICA EN LA LAGUNA</td>
										</tr>
										<tr>
											<th></th>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'><strong>10:00</strong> TALLER DE SKATE</td>
										</tr>
										<tr>
											<th></th>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'>TALLER DE BURBUJAS GIGANTES</td>
										</tr>
										<tr>
											<th className='borde'></th>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'>TALLER DE MÁSCARAS FANTÁSTICAS</td>
										</tr>
										<tr>
											<th>PM<br />15:00<br />18:00</th>
											<td className='borde'><strong>16:00</strong> TALLER DE SKATE</td>
											<td className='borde'><strong>16:00</strong> TALLER DE ROLLER URBANO</td>
											<td className='borde'><strong>16:00</strong> TALLER DE SKATE</td>
											<td className='borde'><strong>16:00</strong> TALLER DE ROLLER URBANO</td>
											<td className='borde'></td>
										</tr>
										<tr>
											<th></th>
											<td className='borde'></td>
											<td className='borde'><strong>16:00</strong> TALLER DE MURALISMO CON PAYO</td>
											<td className='borde'><strong>16:00</strong> TALLER DE MURALISMO CON PAYO</td>
											<td className='borde'><strong>16:00</strong> TALLER DE MURALISMO CON PAYO</td>
											<td className='borde'></td>
										</tr>
										<tr>
											<th></th>
											<td className='borde'></td>
											<td className='borde'><strong>17:00</strong> PRESENTACIÓN DE GUITARRA / MÚSICA DEL CONSERVATORIO</td>
											<td className='borde'></td>
											<td className='borde'><strong>16:30</strong> MÚSICA EN LA LAGUNA</td>
											<td className='borde'></td>
										</tr>
									</tbody>
								</table>
								<div className='text-center mt-12'>
									<button className='button small fondo-fucsia text-sm font-semibold text-center' onClick={() => setActSkatepark(!actSkatepark)}>INFO ACTIVIDADES</button>
								</div>
								<table className={'tabla-actividades mt-12' + (actSkatepark? '' : ' hidden')}>
									<thead>
										<tr>
											<th className='borde-fucsia'>ACTIVIDAD</th>
											<th className='borde-fucsia'>DESCRIPCIÓN</th>
											<th className='borde-fucsia'>EDADES</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>TALLER SKATE / ESCUELA DE SKATE SAUSALITO</td>
											<td className='borde-fucsia'>Trae tu tabla y aprende en el mejor lugar de tu ciudad. Taller de la I. Municipalidad de Viña del Mar.</td>
											<td className='borde-fucsia'>Desde los 7 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>TALLER DE ROLLER URBANO / CLUB TACONES BANDIDOS</td>
											<td className='borde-fucsia'>Trae tus roller y aprende en el mejor lugar de tu ciudad Taller de la I. Municipalidad de Viña del Mar</td>
											<td className='borde-fucsia'>Desde los 7 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>TALLER DE MURALISMO CON PAYO / PAYOSHOCHTING (30NNA)</td>
											<td className='borde-fucsia'>¡Ven a pintar un mural con Payo en el mejor Skatepark de Viña del Mar!</td>
											<td className='borde-fucsia'>Desde los 7 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>TALLER DE MASCARAS FANTÁSTICAS / GRUPO 12NA</td>
											<td className='borde-fucsia'>Ven a hacer tu mascara con materiales reciclados para la fiesta de cierre.</td>
											<td className='borde-fucsia'>Desde los 6 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>MÚSICA EN LA LAGUNA</td>
											<td className='borde-fucsia'>Ven a disfrutar de la música en el borde de la laguna Sausalito.</td>
											<td className='borde-fucsia'>Todo público</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>TALLER DE BURBUJAS GIGANTES EN LA CIUDAD</td>
											<td className='borde-fucsia'>Taller de burbujas gigantes para niños desde los 3 años.</td>
											<td className='borde-fucsia'>Desde los 3 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>MUSICA DEL CONSERVATORIO</td>
											<td className='borde-fucsia'>Ven a disfrutar de un presentación del Conservatorio Izidor Handler. Presentado por la I. Municipalidad de Viña del Mar.</td>
											<td className='borde-fucsia'>Todo público</td>
										</tr>
									</tbody>
								</table>
							</div>

							<div className='mt-32'>
								<h2 className='font-hbold text-xl lg:text-4xl bullet flor-rosada'>PLAZA PALACIO CARRASCO</h2>
								<p className='pl-16 lg:pl-24 text-lg lg:text-2xl mt-1'>4 NORTE CON LIBERTAD</p>
								<div className='flex flex-wrap gap-y-8 text-center mt-8'>
									<Participant src='/img/fotos/intervenciones/4daniela-baeza.png'>Daniela<br /> Baeza</Participant>
									<Participant src='/img/fotos/intervenciones/4franco-marrese.png'>Franco<br /> Marrese</Participant>
									<Participant src='/img/fotos/intervenciones/4isidro-cuadra.png'>Isidro<br /> Cuadra</Participant>
									<Participant src='/img/fotos/intervenciones/4mauricio-rebolledo.png'>Mauricio<br /> Rebolledo</Participant>
									<Participant src='/img/fotos/intervenciones/4soledad-diaz.png'>Soledad<br /> Diaz</Participant>
									<Participant src='/img/fotos/intervenciones/4vale-diaz.png'>Vale<br /> Diaz</Participant>
								</div>
								<h3 className='font-bold mt-8 text-xl'>Proyecto</h3>
								<p className='mb-8'>
									El fantástico Mundo Marino
								</p>
								<h3 className='font-bold mt-8 text-xl'>Equipo</h3>
								<p className='mb-8'>
									ARQ GREEN DBP - Fundación Aldea
								</p>
								<h3 className='font-bold mt-8 text-xl'>Instagram</h3>
								<p className='mb-8'>
									<a href='https://www.instagram.com/arqgreen_dbp/'>@ARQGREEN_DBP</a>
									<a href='https://www.instagram.com/somos_aldea/' className='ml-4'>@SOMOS_ALDEA</a>
								</p>
								<p className='my-8'>
								En la plaza del palacio aparece el Genius Loci a través de elementos
	abstractos que traen algo del mar a la superficie. El mar, sus olas, las redes
	de pescadores, cuerdas, ballenas y vértebras de animales marinos, todos
	ellos incorporados en un nuevo mundo mágico que ampliará la creatividad
	e imaginación de cada niñ@. 
								</p>
								<p className='my-8'>
								Es un espacio pensado para la primera infancia (0 a 6 años) pero que
	podremos disfrutarlo tod@s.
								</p>
								<p className='my-8'>
								Aquí podrán jugar por ejemplo en una vértebra de ballena, sentándose
	en ella, corriendo entre ellas, saltándolas, y muchas formas más que nacerán
	desde la inocencia del juego, además encontrarán lápices de colores para
	dejar su sello plasmado en todos los recorridos del juego y así, día a día irá
	recobrando un nuevo color y vida creado por sus pequeños habitantes.
								</p>
								<p className='my-8'>
									<Image src="/img/fotos/intervenciones/05-plaza-palacio-carrasco.jpg" layout='responsive' width={806} height={452} alt='banner' />
								</p>
							</div>

							<div className="mt-16 color-azul hidden lg:block">
								<h2 className='font-hbold text-xl lg:text-4xl bullet flor-rosada'>ACTIVIDADES</h2>
								<p className='pl-16 lg:pl-24 text-lg lg:text-2xl mt-1'>PLAZA PALACIO CARRASCO</p>
								<table className='tabla-actividades mt-12'>
									<thead>
										<tr>
											<th></th>
											<th className='borde'>MARTES 4</th>
											<th className='borde'>MIÉRCOLES 5</th>
											<th className='borde'>JUEVES 6</th>
											<th className='borde'>VIERNES 7</th>
											<th className='borde'>SÁBADO 8</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th>AM<br />10:00<br />13:00</th>
											<td className='borde'>MUSEO ITINERANTE ARTEQUIN / ARTES VISUALES Y MEDIO AMBIENTE</td>
											<td className='borde'>MUSEO ITINERANTE ARTEQUIN / ARTES VISUALES Y MEDIO AMBIENTE</td>
											<td className='borde'>TALLER DE BURBUJAS GIGANTES</td>
											<td className='borde'>TALLER DE BURBUJAS GIGANTES</td>
											<td className='borde'>TALLER DE BURBUJAS GIGANTES</td>
										</tr>
										<tr>
											<th></th>
											<td className='borde'><strong>11:00</strong> TALLER DE ARTE GRABADO</td>
											<td className='borde'><strong>11:00</strong> TALLER DE ARTE PINTURA</td>
											<td className='borde'>TALLER DE MÁSCARAS FANTÁSTICAS</td>
											<td className='borde'>TALLER DE CONSTRUCCIÓN DE CORPÓREOS</td>
											<td className='borde'>TALLER DE CONSTRUCCIÓN DE CORPÓREOS</td>
										</tr>
										<tr>
											<th></th>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'>FERIA DE ARTE SONORO</td>
											<td className='borde'>TALLER MEDIO AMBIENTE</td>
											<td className='borde'>BIBLIO ITINERANTE</td>
										</tr>
										<tr>
											<th></th>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'><strong>10:00 y 11:00</strong> TALLER MUSICOTERAPIA</td>
										</tr>
										<tr>
											<th className='borde'></th>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'><strong>12:00</strong> MÚSICA EN LA PLAZA</td>
										</tr>
										<tr>
											<th>PM<br />15:00<br />18:00</th>
											<td className='borde'>MUSEO ITINERANTE ARTEQUIN / ARTES VISUALES Y MEDIO AMBIENTE</td>
											<td className='borde'>MUSEO ITINERANTE ARTEQUIN / ARTES VISUALES Y MEDIO AMBIENTE</td>
											<td className='borde'>TALLER DE BURBUJAS GIGANTES</td>
											<td className='borde'>TALLER DE CONSTRUCCIÓN DE CORPÓREOS</td>
											<td className='borde'></td>
										</tr>
										<tr>
											<th></th>
											<td className='borde'><strong>17:00</strong> PRESENTACIÓN DE PIANO - MÚSICA DEL CONSERVATORIO</td>
											<td className='borde'></td>
											<td className='borde'>TALLER DE MÁSCARAS FANTÁSTICAS</td>
											<td className='borde'>TALLER DE BURBUJAS GIGANTES</td>
											<td className='borde'></td>
										</tr>
										<tr>
											<th></th>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'>FERIA DE ARTE SONORO</td>
											<td className='borde'><strong>17:00</strong> YOGA FAMILIAR</td>
											<td className='borde'></td>
										</tr>
										<tr>
											<th></th>
											<td className='borde'></td>
											<td className='borde'></td>
											<td className='borde'><strong>16:00</strong> LA RECONQUISTA PEATONAL</td>
											<td className='borde'></td>
											<td className='borde'></td>
										</tr>
									</tbody>
								</table>
								<div className='text-center mt-12'>
									<button className='button small fondo-fucsia text-sm font-semibold text-center' onClick={() => setActPalacio(!actPalacio)}>INFO ACTIVIDADES</button>
								</div>
								<table className={'tabla-actividades mt-12' + (actPalacio? '' : ' hidden')}>
									<thead>
										<tr>
											<th className='borde-fucsia'>ACTIVIDAD</th>
											<th className='borde-fucsia'>DESCRIPCIÓN</th>
											<th className='borde-fucsia'>EDADES</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>MUSEO ITINERANTE ARTEQUIN / ARTES VISUALES Y MEDIO AMBIENTE</td>
											<td className='borde-fucsia'>Ven a conocer el museo en la ciudad, tendremos actividades para niños desde los 3 años.</td>
											<td className='borde-fucsia'>Desde los 3 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>TALLER MEDIO AMBIENTE / DEPTO MEDIO AMBIENTE VIÑA DEL MAR</td>
											<td className='borde-fucsia'>Ven a conocer la flora de la Comuna. Taller de la I. Municipalidad de Viña del Mar.</td>
											<td className='borde-fucsia'>Desde los 6 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>TALLER DE CONSTRUCCIÓN DE CORPÓREOS URBANOS / GRUPO 12NA</td>
											<td className='borde-fucsia'>Construyamos con elementos reciclados y de manera colectiva un cuerpo que será un personaje del festival.</td>
											<td className='borde-fucsia'>Desde los 8 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>MUSICA DEL CONSERVATORIO</td>
											<td className='borde-fucsia'>Ven a disfrutar de un presentación del Conservatorio Izidor Handler. Presentado por la I. Municipalidad de Viña del Mar.</td>
											<td className='borde-fucsia'>Todo público</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>BIBLIO ITINERANTE</td>
											<td className='borde-fucsia'>La biblioteca se abre a la ciudad con un espacio para la lectura con muchos libros interantes para la Infacia y adolescencia. Espacio de la I. Municipalidad de Viña del Mar</td>
											<td className='borde-fucsia'>Todo público</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>MÚSICA EN LA PLAZA</td>
											<td className='borde-fucsia'>Ven a disfrutar de la música en tú ciudad.</td>
											<td className='borde-fucsia'>Todo público</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>TODO ES RONDA: TALLER DE MUSICOTERAPIA PARA PRIMERA INFANCIA</td>
											<td className='borde-fucsia'>Ven a distrutar una actividad musical para bebés/niñ@s de 0 a 3 años junto a mamá/papá o cuidador cercano.</td>
											<td className='borde-fucsia'>Hasta los 3 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>FERIA DE ARTE SONORO / TSONAMI</td>
											<td className='borde-fucsia'>Te invitamos a disfrutar el fenómeno de la escucha y el sonido a través de actividades lúdicas.</td>
											<td className='borde-fucsia'>Todo público</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>YOGA PARA NIÑOS@S</td>
											<td className='borde-fucsia'>Disfruta haciendo yoga en plena ciudad; trae ropa cómoda, un mat, y ganas de moverte.</td>
											<td className='borde-fucsia'>De 6 a 12 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>YOGA FAMILIAR</td>
											<td className='borde-fucsia'>Disfruta haciendo yoga en plena ciudad; trae ropa cómoda, un mat, y ganas de moverte.</td>
											<td className='borde-fucsia'>De 3 a 6 años y la familias</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>TALLER DE MÁSCARAS FANTÁSTICAS / GRUPO 12NA</td>
											<td className='borde-fucsia'>Ven a hacer tu mascara con materiales reciclados para la fiesta de cierre.</td>
											<td className='borde-fucsia'>Desde los 6 años</td>
										</tr>
										<tr>
											<td className='borde-fucsia color-fucsia font-semibold'>LA RECONQUISTA PEATONAL</td>
											<td className='borde-fucsia'>Volvamos a caminar y explorar nuestra ciudad, porque la Ciudad También es tuya. Taller de caminata exploratoria guiada con material de registro.</td>
											<td className='borde-fucsia'>Desde los 7 años</td>
										</tr>
									</tbody>
								</table>
							</div>

						</div>
					</div>
				</section>

				<section className='fondo-blanco fondo-figura-rosa pt-48 pb-12'>
					<div className='sm:max-w-md lg:max-w-screen-md mx-8 sm:mx-auto flex flex-col justify-between pb-8'>
						<div>
							<p className='pl-16 lg:pl-24 text-lg lg:text-2xl uppercase bullet'>INTERVENCIONES URBANAS</p>
							<h2 className='pl-16 lg:pl-24 font-hbold text-xl lg:text-4xl leading-tight mb-6'>¡CONOCELAS Y PARTICIPA DE LAS ACTIVIDADES EN VIÑA!</h2>
							<p className='pl-16 lg:pl-24'>
								{/* <Link href='intervenciones-urbanas-en-vina-del-mar'><a className='button text-sm font-semibold mb-4'>CONOCE LOS LUGARES</a></Link> */}
								<a href='/descargas/intervenciones/Actividades.pdf' className='button text-sm font-semibold text-center' target='_blank'><span className='descarga'>DESCARGA EL PROGRAMA</span></a>
							</p>
						</div>
					</div>
				</section>

			</main>

			<Footer bgClass="fondo-rosado" />
        </>
    )
}
