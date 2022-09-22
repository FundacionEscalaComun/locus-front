import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
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
	const [isMobile, setIsMobile] = useState(false);
	const sliderContainerRef = useRef(null);
	const slides = props.slides;

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

	useEffect(() => {
		setIsMobile(typeof window !== 'undefined' && window.innerWidth < 1024);
	}, [])

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
						{slides.map((slide, index) => 
							<SwiperSlide key={slide.name}>
								<div className='slide'>
									<div className='w-56 mx-auto lg:hidden'>
										<h2 className='pl-16 font-hbold text-xl leading-tight bullet estrella-blanca mb-6 mt-8'>¡invitados<br />especiales!</h2>
										<Image src={slide.imgm} width={232} height={244} layout='responsive' alt='foto' />
									</div>
									{!isMobile &&
										<Image src={slide.imgd} layout='fill' objectFit='cover' alt='foto' />
									}
									<div className='container pt-8 lg:pt-28 pb-8 relative text-center lg:text-left'>
										<h2 className='hidden lg:block pl-16 lg:pl-24 font-hbold text-xl lg:text-4xl leading-tight bullet estrella-blanca mb-12'>¡invitados<br />especiales!</h2>
										<h3 className='lg:pl-12 font-hbold text-xl mb-2 lg:w-72'>{slide.name}</h3>
										<p className='lg:pl-12 text-sm mb-6'>{slide.country}</p>
										<p className='lg:pl-12 text-sm mb-6 lg:w-96 text-left'>{slide.desc}</p>
										{slide.published
										? <Link href={'/invitado/' + index}><a className='lg:ml-12 button xsmall fondo-blanco text-sm font-semibold'>VER VIDEO</a></Link>
										: <span className='lg:ml-12 button xsmall fondo-blanco text-sm font-semibold'>PRONTO DISPONIBLE</span>
										}
									</div>
								</div>
							</SwiperSlide>
						)}
					</Swiper>
					<div className="arrows">
						<div className="container relative">
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>
						</div>
					</div>
				</section>

				<section>
					<div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16 my-12">
						<article className='relative'>
								<Image src="/img/fotos/congreso/1-invitados-especiales-1.png" width={374} height={211} alt='banner' />
								{slides[1].new && <span className='tag-new'><Image src="/img/web-locus-2.svg" width={16} height={16} alt='bullet' /> &nbsp;&nbsp;NUEVO</span>}
								<h3 className='font-hbold text-xl'>MARTA ROMÁN</h3>
								<p className='text-sm mb-6'>ESPAÑA</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer' onClick={() => goToSlider(1)}>MÁS INFO</button>
						</article>
						<article className='relative'>
								<Image src="/img/fotos/congreso/1-invitados-especiales-2.png" width={374} height={211} alt='banner' />
								{slides[2].new && <span className='tag-new'><Image src="/img/web-locus-2.svg" width={16} height={16} alt='bullet' /> &nbsp;&nbsp;NUEVO</span>}
								<h3 className='font-hbold text-xl'>TIM GILL</h3>
								<p className='text-sm mb-6'>INGLATERRA</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer' onClick={() => goToSlider(2)}>MÁS INFO</button>
						</article>
						<article className='relative'>
								<Image src="/img/fotos/congreso/1-invitados-especiales-4.png" width={374} height={211} alt='banner' />
								{slides[3].new && <span className='tag-new'><Image src="/img/web-locus-2.svg" width={16} height={16} alt='bullet' /> &nbsp;&nbsp;NUEVO</span>}
								<h3 className='font-hbold text-xl'>CECILIA VACA-JONES</h3>
								<p className='text-sm mb-6'>ECUADOR</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer' onClick={() => goToSlider(3)}>MÁS INFO</button>
						</article>
						<article className='relative'>
								<Image src="/img/fotos/congreso/1-invitados-especiales-3.png" width={374} height={211} alt='banner' />
								{slides[4].new && <span className='tag-new'><Image src="/img/web-locus-2.svg" width={16} height={16} alt='bullet' /> &nbsp;&nbsp;NUEVO</span>}
								<h3 className='font-hbold text-xl'>RODRIGO MAYORGA</h3>
								<p className='text-sm mb-6'>CHILE</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer' onClick={() => goToSlider(4)}>MÁS INFO</button>
						</article>
						<article className='relative'>
								<Image src="/img/fotos/congreso/1-invitados-especiales-5.png" width={374} height={211} alt='banner' />
								{slides[5].new && <span className='tag-new'><Image src="/img/web-locus-2.svg" width={16} height={16} alt='bullet' /> &nbsp;&nbsp;NUEVO</span>}
								<h3 className='font-hbold text-xl'>MATIAS KNUST</h3>
								<p className='text-sm mb-6'>CHILE</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer' onClick={() => goToSlider(5)}>MÁS INFO</button>
						</article>
						<article className='relative'>
								<Image src="/img/fotos/congreso/1-invitados-especiales-6.png" width={374} height={211} alt='banner' />
								{slides[6].new && <span className='tag-new'><Image src="/img/web-locus-2.svg" width={16} height={16} alt='bullet' /> &nbsp;&nbsp;NUEVO</span>}
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
					<div className='container flex flex-wrap justify-center mt-12'>
						<button className={'button xsmall m-2 text-sm font-semibold cursor-pointer' + (activeTag === null && ' fondo-rosa')} onClick={() => filterVideos(null)}>VER TODO</button>
						<button className={'button xsmall m-2 text-sm font-semibold cursor-pointer' + (activeTag === 3 && ' fondo-rosa')} onClick={() => filterVideos(3)}>ESPACIOS PÚBLICOS Y MOVILIDAD</button>
						<button className={'button xsmall m-2 text-sm font-semibold cursor-pointer' + (activeTag === 4 && ' fondo-rosa')} onClick={() => filterVideos(4)}>MEDIOAMBIENTE Y PLANIFICACIÓN URBANA SUSTENTABLE</button>
						<button className={'button xsmall m-2 text-sm font-semibold cursor-pointer' + (activeTag === 5 && ' fondo-rosa')} onClick={() => filterVideos(5)}>GÉNEROS Y CUIDADOS</button>
						<button className={'button xsmall m-2 text-sm font-semibold cursor-pointer' + (activeTag === 6 && ' fondo-rosa')} onClick={() => filterVideos(6)}>SALUD Y BIENESTAR</button>
						<button className={'button xsmall m-2 text-sm font-semibold cursor-pointer' + (activeTag === 7 && ' fondo-rosa')} onClick={() => filterVideos(7)}>JUEGO Y DISEÑO URBANO</button>
						<button className={'button xsmall m-2 text-sm font-semibold cursor-pointer' + (activeTag === 8 && ' fondo-rosa')} onClick={() => filterVideos(8)}>EDUCACIÓN Y FORMACIÓN CIUDADANA</button>
					</div>
					<div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16 my-12">
						{videos.map(video => 
							<article key={video.id} className='relative'>
									<img src={video._embedded['wp:featuredmedia']['0'].source_url} width={374} height={211} alt='foto' />
									{video.new && <span className='tag-new'><Image src="/img/web-locus-2.svg" width={16} height={16} alt='bullet' /> &nbsp;&nbsp;NUEVO</span>}
									<h3 className='font-hbold text-xl uppercase mt-3 mb-1' dangerouslySetInnerHTML={{__html: video.title.rendered }}></h3>
									<p className='text-xs mb-1 uppercase'>{video.acf.cargo}</p>
									<p className='text-sm mb-6'>{video.acf.descripcion}</p>
									{video.published
										? <Link href={'/video/' + video.id}><a className='button xsmall text-sm font-semibold'>VER VIDEO</a></Link>
										: <span className='button xsmall text-sm font-semibold'>PRONTO DISPONIBLE</span>
									}
							</article>
						)}
					</div>
				</section>

				<section className='fondo-blanco fondo-figura-rosa pt-48 pb-12'>
					<div className='sm:max-w-md lg:max-w-screen-md mx-8 sm:mx-auto flex flex-col justify-between pb-8'>
						<div>
							<p className='pl-16 lg:pl-24 text-lg lg:text-2xl uppercase bullet'>CONGRESO</p>
							<h2 className='pl-16 lg:pl-24 font-hbold text-xl lg:text-4xl leading-tight mb-6'>CIUDAD E INFANCIA EN LÍNEA</h2>
							<p className='pl-16 lg:pl-24'><a href='/descargas/congreso/parrilla-congreso.pdf' className='button text-sm font-semibold' target='_blank'>CONOCE EL PROGRAMA</a></p>
						</div>
					</div>
				</section>

			</main>

			<Footer bgClass="fondo-rosado" />
        </>
    )
}

export async function getStaticProps(context) {
	const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + '/video?_embed&per_page=96&order=asc&t=' + Math.round(new Date().getTime()/1000))
  let videos = await res.json()
	videos.forEach((video, index) => {
		videos[index].published = new Date() >= new Date(video.acf.fecha_publicacion);
		var nextDay = new Date(video.acf.fecha_publicacion);
		nextDay.setDate(nextDay.getDate() + 1);
		videos[index].new = new Date() >= new Date(video.acf.fecha_publicacion) && new Date() < nextDay;
	})

	const slides = [
		{
			name: 'ENTREVISTA A LOS JÓVENES EN EL WORKSHOP LOCUS',
			country: 'CHILE',
			desc: '',
			imgd: '/img/fotos/congreso/5-invitados-especiales-banner-1.jpg',
			imgm: '/img/fotos/congreso/invitados-especiales-7.png',
			published: false,
			new: false,
		},
		{
			name: 'MARTA ROMÁN',
			country: 'ESPAÑA',
			desc: 'Marta Román es geógrafa de la infancia. Su trabajo va dirigido a que niñas y niños puedan recuperar las calles y plazas donde jugar, encontrarse con sus iguales, formar parte de la sociedad y crecer con autonomía. Es socia consultora de Gea21 y ha escrito varios libros sobre esta temática, entre los que destaca: "¡Hagan sitio, por favor! La reintroducción de la infancia en la ciudad"',
			imgd: '/img/fotos/congreso/5-invitados-especiales-banner-2.jpg',
			imgm: '/img/fotos/congreso/invitados-especiales-1.png',
			published: false,
			new: false,
		},
		{
			name: 'TIM GILL',
			country: 'INGLATERRA',
			desc: 'Tim Gill es académico, escritor y consultor independiente, vive en Londres y es defensor mundial del juego al aire libre y la movilidad infantil. Es autor de "Urban Playground: How child-friendly planning and design can save cities" y "No Fear: Growing up in a risk-averse society".',
			imgd: '/img/fotos/congreso/5-invitados-especiales-banner-3.jpg',
			imgm: '/img/fotos/congreso/invitados-especiales-5.png',
			published: false,
			new: false,
		},
		{
			name: 'CECILIA VACA JONES',
			country: 'ECUADOR',
			desc: 'Cecilia Vaca-Jones es consultora en materia de políticas sociales, ex-Directora Ejecutiva de la Fundación Bernard van Leer. Ex Ministra Coordinadora de Desarrollo Social en Ecuador. Posee amplia experiencia en la gestión de políticas y programas de desarrollo social. En su trayectoria profesional el principal enfoque de Cecilia ha sido mejorar las condiciones de vida de la niñez, las mujeres y las poblaciones indígenas. Máster en Ciudades de London School of Economics. Máster en Políticas Sociales para el Desarrollo Sostenible de la Universidad de Bolonia. Licenciada en Relaciones Internacionales de la Pontificia Universidad Católica de Ecuador.', 
			imgd: '/img/fotos/congreso/5-invitados-especiales-banner-4.jpg',
			imgm: '/img/fotos/congreso/invitados-especiales-4.png',
			published: false,
			new: false,
		},
		{
			name: 'RODRIGO MAYORGA',
			country: 'CHILE',
			desc: 'Rodrigo Mayorga es historiador, profesor y antropólogo educacional. Es académico UC, investigador postdoctoral del Centro de Justicia Educacional, y Director General de la Fundación “Momento Constituyente”, cuyo objetivo es entregar educación constituyente, contribuyendo al debate público y a los procesos de construcción colectiva que Chile vive hoy',
			imgd: '/img/fotos/congreso/5-invitados-especiales-banner-7.jpg',
			imgm: '/img/fotos/congreso/invitados-especiales-3.png',
			published: false,
			new: false,
		},
		{
			name: 'MATÍAS KNUST',
			country: 'CHILE',
			desc: 'Matias Knust es sociólogo de las infancias y director de la Fundación CIFREP. Sociólogo por la Universidad Alberto Hurtado y Magíster en estudios de la infancia por la Universidad de Ciencias y Tecnología de Noruega (NTNU). Hoy es miembro del Núcleo de Investigación en Primera Infancia y Política Pública de la Universidad de Chile.',
			imgd: '/img/fotos/congreso/5-invitados-especiales-banner-5.jpg',
			imgm: '/img/fotos/congreso/invitados-especiales-2.png',
			published: false,
			new: false,
		},
		{
			name: 'FELIPE LECANNELIER',
			country: 'CHILE',
			desc: 'Felipe es psicólogo clínico de formación, magíster en Epistemología y Filosofía de las Ciencias de la Universidad de Chile, y doctor en Psicología de la Universidad Autónoma de Madrid. Se ha especializado en temas relativos al apego infantil, el trauma, infancia y salud mental. Actualmente se desempeña como académico de la Facultad de Medicina de la Universidad de Chile, asesor nacional e internacional, y es autor de libros como “A.M.A.R Hacia un cuidado respetuoso de apego en la infancia”, “El trauma oculto en la infancia” y “Volver a Mirar”.',
			imgd: '/img/fotos/congreso/5-invitados-especiales-banner-6.jpg',
			imgm: '/img/fotos/congreso/invitados-especiales-6.png',
			published: false,
			new: false,
		},
	]

  return {
    props: {
			videos,
			slides,
		},
  }
}