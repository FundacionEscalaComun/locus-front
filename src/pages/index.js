import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Image from 'next/image'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Locus Festival Internacional Infancia y Adolescencia en la Ciudad</title>
            </Head>

            <header className='header fondo-azul flex'>
				<div className='container grid grid-cols-3 gap-8'>
					<h1 className='color-blanco'>LOCUS</h1>
					<nav className='flex col-span-2'>
						<ul className='flex items-center justify-between gap-4 font-bold w-full'>
							<li><a href="#convocatorias">¡CONVOCATORIAS<br />ABIERTAS!</a></li>
							<li><a href="#sobre">SOBRE LOCUS</a></li>
							<li><a href="#programa">PROGRAMA</a></li>
							<li><a href="#equipo">EQUIPO</a></li>
							<li><a href="#redes">REDES SOCIALES</a></li>
						</ul>
					</nav>
				</div>
			</header>
			<main>
				<section>Banner</section>

				<section className='color-azul fondo-amarillo' id='sobre'>
					<div className='max-w-screen-md mx-auto py-40'>
						<h2 className='font-hbold text-4xl'>SOBRE LOCUS</h2>
						<p className='my-4'><strong>LOCUS</strong> es un festival internacional dedicado a la inclusión de las ideas y
						participación de la infancia y adolescencia en la creación de su ciudad.
						Ellos también son ciudadanos activos. Hoy necesitamos de sus experiencias
						y miradas para el diseño y proyección de un futuro más amable, inclusivo,
						creativo y sustentable.</p>
						<p className='my-4'>Durante este 2022, invitaremos a jóvenes y profesionales a intervenir una
						selección de espacios públicos en la ciudad de Viña del Mar (Chile). Con un
						programa de workshops, concurso de arquitectura y encuentros con
						expertos, <strong>LOCUS</strong> será una rápida y masiva inmersión de la participación
						infantil en el diseño de sus ciudades.</p>
						<p className='my-4'>Síguenos en Instagram para conocer nuestra programación y participar de
						nuestras convocatorias y actividades. No te pierdas el festival <strong>LOCUS.
						¡La ciudad también es tuya!</strong></p>

					</div>
					<div className='container' id="convocatorias">
						<h2 className='font-hbold text-4xl'>CONGRESO EN LÍNEA</h2>
						<p><a href="#">Postular</a></p>

						<h2 className='font-hbold text-4xl'>ACTIVACIONES
						EN VIÑA CONCURSO
						GENIUS LOCI</h2>
						<p><a href="#">Postular</a></p>
					</div>
				</section>

				<section className='container py-40'>
					<h2 className='font-hbold text-4xl'>NOTICIAS</h2>
					<article>
						<div className='relative w-32 h-32'><Image src="/img/20220317_193439.jpg" layout='fill' objectFit='contain' alt='foto noticia' /></div>
						<p><Link href="/"><a>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING</a></Link></p>
					</article>
				</section>

				<section className='fondo-rosado py-40' id='equipo'>
					<div className='container'>
						<h2 className='font-hbold text-4xl'>EQUIPO</h2>
						<article>
							<div className='relative w-32 h-32'><Image src="/img/2.png" layout='fill' objectFit='contain' alt='foto' /></div>
							<h3>PIERA MEDINA</h3>
							<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING</p>
						</article>

						<h2 className='font-hbold text-4xl'>DISEÑO</h2>
						<article>
							<div className='relative w-32 h-32'><Image src="/img/2.png" layout='fill' objectFit='contain' alt='foto' /></div>
							<h3>NOMBRE APELLIDO</h3>
							<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING</p>
						</article>

						<h2 className='font-hbold text-4xl'>COMUNICACIONES</h2>
						<article>
							<div className='relative w-32 h-32'><Image src="/img/2.png" layout='fill' objectFit='contain' alt='foto' /></div>
							<h3>NOMBRE APELLIDO</h3>
							<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING</p>
						</article>
					</div>
				</section>

				<section className='container py-40' id='redes'>
					<h2 className='font-hbold text-4xl'>REDES SOCIALES</h2>
					<p>@festival.locus</p>
					<h3>FESTIVAL LOCUS</h3>

				</section>

				<section className='container'>
					<h2 className='font-hbold text-4xl'>ORGANIZA</h2>
					<div className='relative w-32 h-32'><Image src="/img/20220317_193439.jpg" layout='fill' objectFit='contain' alt='logo' /></div>
				</section>

				<section className='container'>
					<h2 className='font-hbold text-4xl'>COLABORAN</h2>
					<div className='relative w-32 h-32'><Image src="/img/20220317_193439.jpg" layout='fill' objectFit='contain' alt='logo' /></div>
					<p>La ejecución de este proyecto es posible gracias al financiamiento del Fondo
Organización de Festivales, Ferias, y Encuentros, del Ministerio de las Culturas, las Artes y el Patrimonio de Chile</p>
				</section>

				<section className='container'>
					<h2 className='font-hlight text-4xl'>¡CONVERSEMOS!</h2>
					<a href="mailto:hola@locusfest.cl" className='font-hbold text-4xl'>hola@locusfest.cl</a>
				</section>
			</main>

			<footer className='fondo-azul color-blanco py-40'>
				<div className='container flex justify-between'>
					<section>
						logo
					</section>
					<section className='flex flex-col gap-4'>
						<a href="#" className='font-bold uppercase'>Instagram</a>
						<a href="#" className='font-bold uppercase'>Youtube</a>
					</section>
					<section>
						<h2>¡CONVERSEMOS!</h2>
						<a href="mailto:hola@locusfest.cl" className='font-bold'>hola@locusfest.cl</a>
					</section>
				</div>
			</footer>
        </>
    )
}
