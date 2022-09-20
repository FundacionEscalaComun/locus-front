import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";

export default function Congreso(props) {
	const [videos, setVideos] = useState(props.videos);
	const [activeTag, setActiveTag] = useState(null);
	const [swiperRef, setSwiperRef] = useState(null);
	const sliderContainerRef = useRef(null);

	function goToSlider(slide) {
		swiperRef.slideTo(slide);
		window.scrollTo(0, sliderContainerRef.current.offsetTop);
	}

	function filterVideos(tag) {
		setActiveTag(tag);
		if(tag === null) {
			setVideos(props.videos);
		} else {
			setVideos(props.videos.filter(video => video.tags.includes(tag)));
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
					<div className='max-w-screen-md mx-8 lg:mx-auto pt-16 lg:pt-32 lg:text-xl'>
						<h2 className='font-hbold text-3xl lg:text-4xl text-center lg:text-left lg:mb-16 bullet'>CONGRESO CIUDAD E INFANCIA</h2>
						<p className='my-8'>El Congreso digital se plantea como un espacio de encuentro, discusión,
aprendizaje y divulgación en torno al tema de las infancias en la ciudad y el
lugar de los niñ@s y jóvenes en ellas.</p>
						<p className='my-8'>La convocatoria está abierta a arquitectos, diseñadores, urbanistas,
organizaciones, académicos, instituciones y expert@s en el tema de Chile y
el mundo, a compartir sus experiencias, iniciativas y proyectos en torno al
estudio y desarrollo de ciudades amigables con la infancia.</p>
						<p className='my-8'>El congreso se plantea como una plataforma colaborativa de recursos abiertos a todos para que el amplio abanico de experiencias con enfoque en la pertinencia infantil en la ciudad puedan darse a conocer y que tejemos en conjunto una red que fortalezca iniciativas y proyectos a lo largo de Chile y el mundo, y así poder descifrar los beneficios que trae el vínculo con la ciudad, los espacios públicos y la naturaleza, en el desarrollo de la niñez.</p>
						<p className='mt-8 text-center'>Anímate a participar, ¡la ciudad también es tuya!</p>

					</div>
				</section>

				<section ref={sliderContainerRef} className='invitados-slider overflow-hidden w-full color-blanco relative'>
					<div className="triangulo-amarillo"></div>
					<Swiper
						onSwiper={setSwiperRef}
						modules={[Navigation]}
						navigation={{
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
						}}
						>
						<SwiperSlide>
							<div className='slide'>
								<Image src="/img/fotos/congreso/5-invitados-especiales-banner-1.jpg" layout='fill' objectFit='cover' alt='banner' />
								<div className='container pt-28 relative'>
									<h2 className='pl-16 lg:pl-24 font-hbold text-xl lg:text-4xl leading-tight bullet estrella-blanca mb-12'>¡invitados<br />especiales!</h2>
									<h3 className='pl-8 lg:pl-12 font-hbold text-xl mb-2 w-72'>ENTREVISTA A LOS JÓVENES EN EL WORKSHOP LOCUS</h3>
									<p className='pl-8 lg:pl-12 text-sm mb-6'>CHILE</p>
									<button className='ml-8 lg:ml-12 button xsmall fondo-blanco text-sm font-semibold cursor-pointer'>VER VIDEO</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slide'>
								<Image src="/img/fotos/congreso/5-invitados-especiales-banner-2.jpg" layout='fill' objectFit='cover' alt='banner' />
								<div className='container pt-28 relative'>
									<h2 className='pl-16 lg:pl-24 font-hbold text-xl lg:text-4xl leading-tight bullet estrella-blanca mb-12'>¡invitados<br />especiales!</h2>
									<h3 className='pl-8 lg:pl-12 font-hbold text-xl mb-2 w-72'>MARTA ROMÁN</h3>
									<p className='pl-8 lg:pl-12 text-sm mb-6'>ESPAÑA</p>
									<p className='pl-8 lg:pl-12 text-sm mb-6 w-96'>Marta Román es geógrafa de la infancia. Su trabajo va dirigido a que niñas y niños puedan recuperar las calles y plazas donde jugar, encontrarse con sus iguales, formar parte de la sociedad y crecer con autonomía. Es socia consultora de Gea21 y ha escrito varios libros sobre esta temática, entre los que destaca: "¡Hagan sitio, por favor! La reintroducción de la infancia en la ciudad"</p>
									<button className='ml-8 lg:ml-12 button xsmall fondo-blanco text-sm font-semibold cursor-pointer'>VER VIDEO</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slide'>
								<Image src="/img/fotos/congreso/5-invitados-especiales-banner-3.jpg" layout='fill' objectFit='cover' alt='banner' />
								<div className='container pt-28 relative'>
									<h2 className='pl-16 lg:pl-24 font-hbold text-xl lg:text-4xl leading-tight bullet estrella-blanca mb-12'>¡invitados<br />especiales!</h2>
									<h3 className='pl-8 lg:pl-12 font-hbold text-xl mb-2 w-72'>TIM GILL</h3>
									<p className='pl-8 lg:pl-12 text-sm mb-6'>INGLATERRA</p>
									<p className='pl-8 lg:pl-12 text-sm mb-6 w-96'>Tim Gill es académico, escritor y consultor
independiente, vive en Londres y es defensor
mundial del juego al aire libre y la movilidad
infantil. Es autor de "Urban Playground: How
child-friendly planning and design can save
cities" y "No Fear: Growing up in a risk-averse
society".</p>
									<button className='ml-8 lg:ml-12 button xsmall fondo-blanco text-sm font-semibold cursor-pointer'>VER VIDEO</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slide'>
								<Image src="/img/fotos/congreso/5-invitados-especiales-banner-4.jpg" layout='fill' objectFit='cover' alt='banner' />
								<div className='container pt-28 relative'>
									<h2 className='pl-16 lg:pl-24 font-hbold text-xl lg:text-4xl leading-tight bullet estrella-blanca mb-12'>¡invitados<br />especiales!</h2>
									<h3 className='pl-8 lg:pl-12 font-hbold text-xl mb-2 w-72'>CECILIA VACA JONES</h3>
									<p className='pl-8 lg:pl-12 text-sm mb-6'>ECUADOR</p>
									<p className='pl-8 lg:pl-12 text-sm mb-6 w-96'>Cecilia Vaca-Jones es consultora en materia de
políticas sociales, ex-Directora Ejecutiva de la
Fundación Bernard van Leer. Ex Ministra
Coordinadora de Desarrollo Social en Ecuador.
Posee amplia experiencia en la gestión de
políticas y programas de desarrollo social. En
su trayectoria profesional el principal enfoque
de Cecilia ha sido mejorar las condiciones de
vida de la niñez, las mujeres y las poblaciones
indígenas. Máster en Ciudades de London
School of Economics. Máster en Políticas
Sociales para el Desarrollo Sostenible de la
Universidad de Bolonia. Licenciada en
Relaciones Internacionales de la Pontificia
Universidad Católica de Ecuador.</p>
									<button className='ml-8 lg:ml-12 button xsmall fondo-blanco text-sm font-semibold cursor-pointer'>VER VIDEO</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slide'>
								<Image src="/img/fotos/congreso/5-invitados-especiales-banner-7.jpg" layout='fill' objectFit='cover' alt='banner' />
								<div className='container pt-28 relative'>
									<h2 className='pl-16 lg:pl-24 font-hbold text-xl lg:text-4xl leading-tight bullet estrella-blanca mb-12'>¡invitados<br />especiales!</h2>
									<h3 className='pl-8 lg:pl-12 font-hbold text-xl mb-2 w-72'>RODRIGO MAYORGA</h3>
									<p className='pl-8 lg:pl-12 text-sm mb-6'>CHILE</p>
									<p className='pl-8 lg:pl-12 text-sm mb-6 w-96'>Rodrigo Mayorga es historiador, profesor y
antropólogo educacional. Es académico UC,
investigador postdoctoral del Centro de
Justicia Educacional, y Director General de la
Fundación “Momento Constituyente”, cuyo
objetivo es entregar educación constituyente,
contribuyendo al debate público y a los
procesos de construcción colectiva que Chile
vive hoy.</p>
									<button className='ml-8 lg:ml-12 button xsmall fondo-blanco text-sm font-semibold cursor-pointer'>VER VIDEO</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slide'>
								<Image src="/img/fotos/congreso/5-invitados-especiales-banner-5.jpg" layout='fill' objectFit='cover' alt='banner' />
								<div className='container pt-28 relative'>
									<h2 className='pl-16 lg:pl-24 font-hbold text-xl lg:text-4xl leading-tight bullet estrella-blanca mb-12'>¡invitados<br />especiales!</h2>
									<h3 className='pl-8 lg:pl-12 font-hbold text-xl mb-2 w-72'>MATÍAS KNUST</h3>
									<p className='pl-8 lg:pl-12 text-sm mb-6'>CHILE</p>
									<p className='pl-8 lg:pl-12 text-sm mb-6 w-96'>Matias Knust es sociólogo de las infancias y
director de la Fundación CIFREP. Sociólogo por
la Universidad Alberto Hurtado y Magíster en
estudios de la infancia por la Universidad de
Ciencias y Tecnología de Noruega (NTNU). Hoy
es miembro del Núcleo de Investigación en
Primera Infancia y Política Pública de la
Universidad de Chile.</p>
									<button className='ml-8 lg:ml-12 button xsmall fondo-blanco text-sm font-semibold cursor-pointer'>VER VIDEO</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slide'>
								<Image src="/img/fotos/congreso/5-invitados-especiales-banner-6.jpg" layout='fill' objectFit='cover' alt='banner' />
								<div className='container pt-28 relative'>
									<h2 className='pl-16 lg:pl-24 font-hbold text-xl lg:text-4xl leading-tight bullet estrella-blanca mb-12'>¡invitados<br />especiales!</h2>
									<h3 className='pl-8 lg:pl-12 font-hbold text-xl mb-2 w-72'>FELIPE LECANNELIER</h3>
									<p className='pl-8 lg:pl-12 text-sm mb-6'>CHILE</p>
									<p className='pl-8 lg:pl-12 text-sm mb-6 w-96'>Felipe es psicólogo clínico de formación,
magíster en Epistemología y Filosofía de las
Ciencias de la Universidad de Chile, y doctor en
Psicología de la Universidad Autónoma de
Madrid. Se ha especializado en temas relativos
al apego infantil, el trauma, infancia y salud
mental. Actualmente se desempeña como
académico de la Facultad de Medicina de la
Universidad de Chile, asesor nacional e
internacional, y es autor de libros como
“A.M.A.R Hacia un cuidado respetuoso de
apego en la infancia”, “El trauma oculto en la
infancia” y “Volver a Mirar”.</p>
									<button className='ml-8 lg:ml-12 button xsmall fondo-blanco text-sm font-semibold cursor-pointer'>VER VIDEO</button>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
					<div className="arrows">
						<div className="container relative">
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>
						</div>
					</div>
				</section>

				<section>
					<div className="container grid lg:grid-cols-3 gap-8 gap-y-16 my-12">
						<article>
								<Image src="/img/fotos/congreso/1-invitados-especiales-1.png" width={374} height={211} alt='banner' />
								<h3 className='font-hbold text-xl'>MARTA ROMÁN</h3>
								<p className='text-sm mb-6'>ESPAÑA</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer' onClick={() => goToSlider(1)}>MÁS INFO</button>
						</article>
						<article>
								<Image src="/img/fotos/congreso/1-invitados-especiales-2.png" width={374} height={211} alt='banner' />
								<h3 className='font-hbold text-xl'>TIM GILL</h3>
								<p className='text-sm mb-6'>INGLATERRA</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer' onClick={() => goToSlider(2)}>MÁS INFO</button>
						</article>
						<article>
								<Image src="/img/fotos/congreso/1-invitados-especiales-4.png" width={374} height={211} alt='banner' />
								<h3 className='font-hbold text-xl'>CECILIA VACA-JONES</h3>
								<p className='text-sm mb-6'>ECUADOR</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer' onClick={() => goToSlider(3)}>MÁS INFO</button>
						</article>
						<article>
								<Image src="/img/fotos/congreso/1-invitados-especiales-3.png" width={374} height={211} alt='banner' />
								<h3 className='font-hbold text-xl'>RODRIGO MAYORGA</h3>
								<p className='text-sm mb-6'>CHILE</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer' onClick={() => goToSlider(4)}>MÁS INFO</button>
						</article>
						<article>
								<Image src="/img/fotos/congreso/1-invitados-especiales-5.png" width={374} height={211} alt='banner' />
								<h3 className='font-hbold text-xl'>MATIAS KNUST</h3>
								<p className='text-sm mb-6'>CHILE</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer' onClick={() => goToSlider(5)}>MÁS INFO</button>
						</article>
						<article>
								<Image src="/img/fotos/congreso/1-invitados-especiales-6.png" width={374} height={211} alt='banner' />
								<h3 className='font-hbold text-xl'>FELIPE LECANNELIER</h3>
								<p className='text-sm mb-6'>CHILE</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer' onClick={() => goToSlider(6)}>MÁS INFO</button>
						</article>
					</div>
				</section>

				<section>
					<div className='max-w-screen-md mx-8 lg:mx-auto mt-28'>
						<h2 className='pl-16 lg:pl-24 font-hbold text-xl lg:text-4xl leading-tight bullet'>EXPLORA POR ÁREAS TEMÁTICAS</h2>
					</div>
					<div className='container flex flex-wrap justify-center gap-4 mt-12'>
						<button className={'button xsmall text-sm font-semibold cursor-pointer' + (activeTag === null && ' fondo-rosa')} onClick={() => filterVideos(null)}>VER TODO</button>
						<button className={'button xsmall text-sm font-semibold cursor-pointer' + (activeTag === 3 && ' fondo-rosa')} onClick={() => filterVideos(3)}>ESPACIOS PÚBLICOS Y MOVILIDAD</button>
						<button className={'button xsmall text-sm font-semibold cursor-pointer' + (activeTag === 4 && ' fondo-rosa')} onClick={() => filterVideos(4)}>MEDIOAMBIENTE Y PLANIFICACIÓN URBANA SUSTENTABLE</button>
						<button className={'button xsmall text-sm font-semibold cursor-pointer' + (activeTag === 5 && ' fondo-rosa')} onClick={() => filterVideos(5)}>GÉNEROS Y CUIDADOS</button>
						<button className={'button xsmall text-sm font-semibold cursor-pointer' + (activeTag === 6 && ' fondo-rosa')} onClick={() => filterVideos(6)}>SALUD Y BIENESTAR</button>
						<button className={'button xsmall text-sm font-semibold cursor-pointer' + (activeTag === 7 && ' fondo-rosa')} onClick={() => filterVideos(7)}>JUEGO Y DISEÑO URBANO</button>
						<button className={'button xsmall text-sm font-semibold cursor-pointer' + (activeTag === 8 && ' fondo-rosa')} onClick={() => filterVideos(8)}>EDUCACIÓN Y FORMACIÓN CIUDADANA</button>
					</div>
					<div className="container grid lg:grid-cols-3 gap-8 gap-y-16 my-12">
						{videos.map(video => 
							<article key={video.id}>
									<img src={video._embedded['wp:featuredmedia']['0'].source_url} width={374} height={211} alt='foto' />
									<h3 className='font-hbold text-xl uppercase mt-3 mb-1' dangerouslySetInnerHTML={{__html: video.title.rendered }}></h3>
									<p className='text-xs mb-1 uppercase'>{video.acf.cargo}</p>
									<p className='text-sm mb-6'>{video.acf.descripcion}</p>
									<a href={'/video/' + video.id} className='button xsmall text-sm font-semibold cursor-pointer'>VER VIDEO</a>
							</article>
						)}
					</div>
				</section>

				<section className='fondo-blanco fondo-figura-rosa pt-48 pb-12'>
					<div className='max-w-screen-md mx-8 lg:mx-auto flex flex-col justify-between pb-8'>
						<div>
							<p className='pl-16 lg:pl-24 text-lg lg:text-2xl uppercase bullet'>CONGRESO</p>
							<h2 className='pl-16 lg:pl-24 font-hbold text-xl lg:text-4xl leading-tight mb-6'>CIUDAD E INFANCIA EN LÍNEA</h2>
							<p className='pl-16 lg:pl-24'><Link href='congreso-ciudad-e-infancia'><a className='button text-sm font-semibold'>CONOCE EL PROGRAMA</a></Link></p>
						</div>
					</div>
				</section>

			</main>

			<Footer bgClass="fondo-rosado" />
        </>
    )
}

export async function getStaticProps(context) {
	const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + '/video?_embed&per_page=90&order=asc')
  const videos = await res.json()
  return {
    props: {
			videos,
		},
  }
}