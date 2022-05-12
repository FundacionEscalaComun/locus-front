import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Image from 'next/image'
import Header from '@/components/Header'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Locus Festival Internacional Infancia y Adolescencia en la Ciudad</title>
            </Head>

            <Header />
			<main>
				<section className='relative banner'>
					<Image src="/img/banner-img.png" layout='fill' objectFit='contain' alt='banner' />
				</section>

				<section className='color-azul fondo-amarillo' id='sobre'>
					<div className='max-w-screen-md mx-8 lg:mx-auto py-16 lg:py-40'>
						<h2 className='font-hbold text-3xl lg:text-5xl text-center lg:text-left'>SOBRE LOCUS</h2>
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
					<div className='container flex flex-col lg:flex-row justify-between pb-10 lg:pb-36' id="convocatorias">
						<div className='convocatorias-abiertas flex items-center justify-center text-center mb-10 lg:mb-0'>
							<h3 className='font-hbold text-lg lg:text-3xl'>¡CONVOCATORIAS<br /> ABIERTAS!</h3>
						</div>
						<div>
							<h2 className='font-hbold text-3xl lg:text-5xl leading-tight mb-4 bullet'>CONGRESO<br /> EN LÍNEA</h2>
							<p><a href="#" className='text-3xl uppercase underline'>Postular</a></p>

							<h2 className='font-hbold text-3xl lg:text-5xl leading-tight mt-12 mb-4 bullet'>ACTIVACIONES<br />
							EN VIÑA CONCURSO<br />
							GENIUS LOCI</h2>
							<p><a href="#" className='text-3xl uppercase underline'>Postular</a></p>
						</div>
					</div>
				</section>

				<section className='pt-20 lg:pt-80 lg:pb-40 fondo-amarillo fondo-figura-blanca'>
					<div className='container pt-40'>
						<h2 className='font-hbold text-3xl lg:text-5xl text-center lg:text-left'>NOTICIAS</h2>
						<div className='grid lg:grid-cols-3 gap-y-12 mt-10'>
							<article className='w-72'>
								<div className='relative h-64'><Image src="/img/20220317_193439.jpg" layout='fill' objectFit='contain' alt='foto noticia' /></div>
								<p><Link href="/"><a className='link'>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING</a></Link></p>
							</article>
							<article className='w-72 lg:justify-self-center'>
								<div className='relative h-64'><Image src="/img/20220317_193439.jpg" layout='fill' objectFit='contain' alt='foto noticia' /></div>
								<p><Link href="/"><a className='link'>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING</a></Link></p>
							</article>
							<article className='w-72 lg:justify-self-end'>
								<div className='relative h-64'><Image src="/img/20220317_193439.jpg" layout='fill' objectFit='contain' alt='foto noticia' /></div>
								<p><Link href="/"><a className='link'>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING</a></Link></p>
							</article>
							<article className='w-72'>
								<div className='relative h-64'><Image src="/img/20220317_193439.jpg" layout='fill' objectFit='contain' alt='foto noticia' /></div>
								<p><Link href="/"><a className='link'>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING</a></Link></p>
							</article>
						</div>
					</div>
				</section>

				<section className='pt-20 lg:pt-80 pb-8 fondo-blanco fondo-figura-rosa' id='equipo'>
					<div className='container pt-40'>
						<h2 className='font-hbold text-3xl lg:text-5xl mb-12 text-center lg:text-left'>EQUIPO</h2>
						<div className='flex flex-col lg:grid grid-cols-3 gap-y-12 justify-between text-center lg:text-left'>
							<article className='w-56 mx-auto lg:mx-0'>
								<div className='relative h-48'><Image src="/img/foto-piera.png" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-hbold mt-6 mb-3 text-xl'>PIERA MEDINA</h3>
								<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
							</article>
							<article className='w-56 mx-auto lg:mx-0 lg:justify-self-center'>
								<div className='relative h-48'><Image src="/img/foto-dani.png" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-hbold mt-6 mb-3 text-xl'>DANITZA VYMAZAL</h3>
								<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
							</article>
							<article className='w-56 mx-auto lg:mx-0 lg:justify-self-end'>
								<div className='relative h-48'><Image src="/img/foto-carole.png" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-hbold mt-6 mb-3 text-xl'>CAROLE GURDON</h3>
								<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
							</article>
							<article className='w-56 mx-auto lg:mx-0'>
								<div className='relative h-48'><Image src="/img/foto-eliana.png" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-hbold mt-6 mb-3 text-xl'>ELIANA STAITE</h3>
								<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
							</article>
							<article className='w-56 mx-auto lg:mx-0 justify-self-center'>
								<div className='relative h-48'><Image src="/img/foto-fernanda.png" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-hbold mt-6 mb-3 text-xl'>FERNANDA CHESTA</h3>
								<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
							</article>
						</div>

						<h2 className='font-hbold text-3xl lg:text-5xl mt-20 mb-10 text-center lg:text-left'>DISEÑO</h2>
						<div className='flex flex-col lg:grid grid-cols-3 gap-x-32 gap-y-12 justify-between text-center lg:text-left'>
							<article className='w-56 mx-auto lg:mx-0'>
								<h3 className='font-hbold mb-3 text-xl'>NOMBRE APELLIDO</h3>
								<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
							</article>
							<article className='w-56 mx-auto lg:mx-0'>
								<h3 className='font-hbold mb-3 text-xl'>NOMBRE APELLIDO</h3>
								<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
							</article>
							<article className='w-56 mx-auto lg:mx-0'>
								<h3 className='font-hbold mb-3 text-xl'>NOMBRE APELLIDO</h3>
								<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
							</article>
						</div>

						<h2 className='font-hbold text-3xl lg:text-5xl mt-20 mb-10 text-center lg:text-left'>COMUNICACIONES</h2>
						<div className='flex flex-col lg:grid grid-cols-3 gap-x-32 gap-y-12 justify-between text-center lg:text-left'>
							<article className='w-56 mx-auto lg:mx-0'>
								<h3 className='font-hbold mb-3 text-xl'>NOMBRE APELLIDO</h3>
								<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
							</article>
							<article className='w-56 mx-auto lg:mx-0'>
								<h3 className='font-hbold mb-3 text-xl'>NOMBRE APELLIDO</h3>
								<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
							</article>
							<article className='w-56 mx-auto lg:mx-0'>
								<h3 className='font-hbold mb-3 text-xl'>NOMBRE APELLIDO</h3>
								<p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
							</article>
						</div>
					</div>
				</section>

				<section className='pt-56 lg:pt-72 pb-16 lg:pb-40 fondo-rosado fondo-figura-blanca' id='redes'>
					<div className='container'>
						<h2 className='font-hbold text-3xl lg:text-5xl text-center lg:text-left'>REDES SOCIALES</h2>
						<div className='lg:hidden flex justify-center gap-8 my-8'>
							<a href="https://www.instagram.com/locusfest/" className='circulo-redes relative p-6'><div className='relative w-12 h-12'><Image src="/img/logos-ig-blanco.svg" layout='fill' objectFit='contain' alt='logo' /></div></a>
							<a href="#" className='circulo-redes relative p-6'><div className='relative w-12 h-12'><Image src="/img/logos-youtube-blanco.svg" layout='fill' objectFit='contain' alt='logo' /></div></a>
						</div>
						<div className='hidden lg:block'>
							<h3 className='font-hbold text-3xl lg:text-5xl mt-20 mb-10 flex items-center gap-12'>
								<div className='relative w-16 h-16'><Image src="/img/logos-ig.svg" layout='fill' objectFit='contain' alt='logo' /></div>
								@festival.locus
							</h3>
							<h3 className='font-hbold text-3xl lg:text-5xl mt-20 mb-10 flex items-center gap-12'>
								<div className='relative w-16 h-16'><Image src="/img/logos-youtube.svg" layout='fill' objectFit='contain' alt='logo' /></div>
								FESTIVAL LOCUS
							</h3>
						</div>
					</div>
				</section>

				<section className='container text-center'>
					<h2 className='font-hbold text-3xl lg:text-5xl'>ORGANIZA</h2>
					<div className='relative w-44 h-44 mx-auto my-10'><Image src="/img/logos-escala-comun.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				</section>

				<section className='max-w-screen-md mx-12 lg:mx-auto text-center mt-20'>
					<h2 className='font-hbold text-3xl lg:text-5xl'>COLABORAN</h2>
					<div className='flex flex-col lg:grid grid-cols-2 gap-10 my-12'>
						<div className='relative h-32'><Image src="/img/logos-pucv.svg" layout='fill' objectFit='contain' alt='logo' /></div>
						<div className='relative h-32'><Image src="/img/logos-usm.svg" layout='fill' objectFit='contain' alt='logo' /></div>
						<div className='relative h-32'><Image src="/img/logo-ead.svg" layout='fill' objectFit='contain' alt='logo' /></div>
						<div className='relative h-32'><Image src="/img/logos-arq-usm.svg" layout='fill' objectFit='contain' alt='logo' /></div>
						<div className='col-span-2 relative h-32'><Image src="/img/logos-fondart.svg" layout='fill' objectFit='contain' alt='logo' /></div>
					</div>
					<p className='text-left'>La ejecución de este proyecto es posible gracias al financiamiento del Fondo Organización de Festivales, Ferias, y Encuentros, del Ministerio de las Culturas, las Artes y el Patrimonio de Chile</p>
				</section>

				<section className='container text-center py-20'>
					<h2 className='font-hlight text-3xl lg:text-5xl'>¡CONVERSEMOS!</h2>
					<a href="mailto:hola@locusfest.cl" className='font-hbold text-3xl lg:text-5xl'>hola@locusfest.cl</a>
				</section>
			</main>

			<footer className='fondo-azul color-blanco py-40'>
				<div className='container flex justify-between'>
					<section>
						<p className='w-80 h-32 relative'><Image src="/img/logos-locus.svg" layout='fill' objectFit='contain' alt='LOCUS' /></p>
					</section>
					<section className='hidden lg:flex flex-col gap-4'>
						<a href="https://www.instagram.com/locusfest/" className='font-bold uppercase flex gap-4 items-center'>
							<div className='relative w-8 h-8'><Image src="/img/logos-ig-blanco.svg" layout='fill' objectFit='contain' alt='logo' /></div>
							Instagram
						</a>
						<a href="#" className='font-bold uppercase flex gap-4 items-center'>
							<div className='relative w-8 h-8'><Image src="/img/logos-youtube-blanco.svg" layout='fill' objectFit='contain' alt='logo' /></div>
							Youtube
						</a>
					</section>
				</div>
			</footer>
        </>
    )
}
