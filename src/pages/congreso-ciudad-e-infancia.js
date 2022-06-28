import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Congreso() {
    return (
        <>
            <Head>
                <title>Locus Festival Internacional Infancia y Adolescencia en la Ciudad</title>
            </Head>

            <Header />
			<main>

				<section className='color-azul fondo-amarillo' id='sobre'>
					<div className='max-w-screen-md mx-8 lg:mx-auto pt-16 pb-8 lg:pt-32 lg:text-xl'>
						<h2 className='font-hbold text-3xl lg:text-4xl text-center lg:text-left lg:mb-16 bullet'>CONGRESO CIUDAD E INFANCIA</h2>
						<p className='my-8'>El Congreso digital se plantea como un espacio de encuentro, discusión,
aprendizaje y divulgación en torno al tema de las infancias en la ciudad y el
lugar de los niñ@s y jóvenes en ellas.</p>
						<p className='my-8'>La convocatoria está abierta a arquitectos, diseñadores, urbanistas,
organizaciones, académicos, instituciones y expert@s en el tema de Chile y
el mundo, a compartir sus experiencias, iniciativas y proyectos en torno al
estudio y desarrollo de ciudades amigables con la infancia, y los hallazgos
que han realizado en torno a las siguientes temáticas:</p>
						<ul className='font-bold list-disc pl-4'>
							<li>Espacios públicos y movilidad</li>
							<li>Medioambiente y planificación urbana sustentable</li>
							<li>Género y cuidados</li>
							<li>Salud y bienestar</li>
							<li>Juego y diseño urbano</li>
							<li>Educación y formación ciudadana</li>
						</ul>
						<p className='my-8'>El congreso se plantea como una plataforma colaborativa de recursos abiertos a todos para que el amplio abanico de experiencias con enfoque en la pertinencia infantil en la ciudad puedan darse a conocer y que tejemos en conjunto una red que fortalezca iniciativas y proyectos a lo largo de Chile y el mundo, y así poder descifrar los beneficios que trae el vínculo con la ciudad, los espacios públicos y la naturaleza, en el desarrollo de la niñez.</p>
						<p className='my-8'>Anímate a participar, ¡la ciudad también es tuya!</p>

						<h2 className='font-hbold text-xl lg:text-4xl mb-6 bullet'>BASES Y FORMULARIO<br />DE POSTULACIÓN CONGRESO<br />DIGITAL CIUDAD E INFANCIA</h2>
						<div className='lg:grid grid-cols-2'>
							<p className='pl-16 lg:pl-24 my-6'><a href="/descargas/congreso/Bases convocatoria_Congreso LOCUS_plazos ampliados.pdf" className='text-lg lg:text-2xl uppercase' target="_blank">Bases</a></p>
							<p className='pl-16 lg:pl-24 my-6'><a href="/descargas/congreso/Instrucciones postulación_Congreso LOCUS.pdf" className='text-lg lg:text-2xl uppercase' target="_blank">Instrucciones</a></p>
						</div>
						<div className='lg:grid grid-cols-2'>
							<p className='pl-16 lg:pl-24 my-6'><a href="/descargas/congreso/Formulario de postulación _Congreso LOCUS.docx" className='text-lg lg:text-2xl uppercase' target="_blank">Formulario de postulación</a></p>
							<p className='pl-16 lg:pl-24 my-6'><a href="https://forms.gle/febU4qjGHoMpAdJHA" className='text-lg lg:text-2xl uppercase' target="_blank"><strong>Postular aquí</strong></a></p>
						</div>

						<h2 className='font-hbold text-xl lg:text-4xl mt-12 bullet'>PLANIFICA AQUÍ TU PARTICIPACIÓN</h2>
						<p className='pl-16 lg:pl-24 mt-10 text-center text-3xl'>30 DE JUNIO</p>
						<p className='pl-16 lg:pl-24 mt-2 text-center font-hbold'>PLAZO PARA ENVIAR PREGUNTAS AL MAIL</p>
						<p className='pl-16 lg:pl-24 mt-2 text-center font-hbold'>congreso@locusfest.cl</p>

						<p className='pl-16 lg:pl-24 mt-10 text-center text-3xl'>15 DE JULIO</p>
						<p className='pl-16 lg:pl-24 mt-2 text-center font-hbold'>CIERRE DE LA CONVOCATORIA</p>

						<p className='pl-16 lg:pl-24 mt-10 text-center text-3xl'>1 DE AGOSTO</p>
						<p className='pl-16 lg:pl-24 mt-2 text-center font-hbold'>SELECCIÓN DE LOS PARTICIPANTES</p>
					</div>
				</section>

			</main>

			<Footer bgClass="fondo-amarillo" />
        </>
    )
}
