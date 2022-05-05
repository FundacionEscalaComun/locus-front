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

            <header className='fondo-azul'>
			Logo
				<nav>
					<ul>
						<li><a href="#">¡CONVOCATORIAS ABIERTAS!</a></li>
						<li><a href="#">SOBRE LOCUS</a></li>
						<li><a href="#">PROGRAMA</a></li>
						<li><a href="#">EQUIPO</a></li>
						<li><a href="#">REDES SOCIALES</a></li>
					</ul>
				</nav>
			</header>
			<main>
				<section>Banner</section>
				<section className='color-azul fondo-amarillo'>
					<h2 className='font-hbold'>SOBRE LOCUS</h2>
					<p><strong>LOCUS</strong> es un festival internacional dedicado a la inclusión de las ideas y
participación de la infancia y adolescencia en la creación de su ciudad.
Ellos también son ciudadanos activos. Hoy necesitamos de sus experiencias
y miradas para el diseño y proyección de un futuro más amable, inclusivo,
creativo y sustentable.</p>
<p>Durante este 2022, invitaremos a jóvenes y profesionales a intervenir una
selección de espacios públicos en la ciudad de Viña del Mar (Chile). Con un
programa de workshops, concurso de arquitectura y encuentros con
expertos, <strong>LOCUS</strong> será una rápida y masiva inmersión de la participación
infantil en el diseño de sus ciudades.</p>
<p>Síguenos en Instagram para conocer nuestra programación y participar de
nuestras convocatorias y actividades. No te pierdas el festival <strong>LOCUS.
¡La ciudad también es tuya!</strong></p>

<h2>CONGRESO EN LÍNEA</h2>
<p><a href="#">Postular</a></p>

<h2>ACTIVACIONES
EN VIÑA CONCURSO
GENIUS LOCI</h2>
<p><a href="#">Postular</a></p>
				</section>

				<section>
					<h2>NOTICIAS</h2>
					<article>
						<div className='relative w-32 h-32'><Image src="/img/20220317_193439.jpg" layout='fill' objectFit='contain' /></div>
						<p><Link href="/"><a>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING</a></Link></p>
					</article>
				</section>

				<section className='color-azul fondo-rosado'>
					<h2>EQUIPO</h2>
					<article>
						<div className='relative w-32 h-32'><Image src="/img/2.png" layout='fill' objectFit='contain' /></div>
						<h3>PIERA MEDINA</h3>
						<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING</p>
					</article>

					<h2>DISEÑO</h2>
					<article>
						<div className='relative w-32 h-32'><Image src="/img/2.png" layout='fill' objectFit='contain' /></div>
						<h3>NOMBRE APELLIDO</h3>
						<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING</p>
					</article>

					<h2>COMUNICACIONES</h2>
					<article>
						<div className='relative w-32 h-32'><Image src="/img/2.png" layout='fill' objectFit='contain' /></div>
						<h3>NOMBRE APELLIDO</h3>
						<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING</p>
					</article>
				</section>

				<section>
					<h2>REDES SOCIALES</h2>
					<p>@festival.locus</p>
					<h3>FESTIVAL LOCUS</h3>

				</section>

				<section>
					<h2>ORGANIZA</h2>
					<div className='relative w-32 h-32'><Image src="/img/20220317_193439.jpg" layout='fill' objectFit='contain' /></div>
				</section>

				<section>
					<h2>COLABORAN</h2>
					<div className='relative w-32 h-32'><Image src="/img/20220317_193439.jpg" layout='fill' objectFit='contain' /></div>
					<p>La ejecución de este proyecto es posible gracias al financiamiento del Fondo
Organización de Festivales, Ferias, y Encuentros, del Ministerio de las Culturas, las Artes y el Patrimonio de Chile</p>
				</section>

				<section>
					<h2>¡CONVERSEMOS!</h2>
					<a href="mailto:hola@locusfest.cl">hola@locusfest.cl</a>
				</section>
			</main>

			<footer>
				<section>
					logo
				</section>
				<section>
					<a href="#">Instagram</a>
					<a href="#">Youtube</a>
				</section>
				<section>
					<h2>¡CONVERSEMOS!</h2>
					<a href="mailto:hola@locusfest.cl">hola@locusfest.cl</a>
				</section>
			</footer>
        </>
    )
}
