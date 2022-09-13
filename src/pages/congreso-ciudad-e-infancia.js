import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";

export default function Congreso(props) {
	const [videos, setVideos] = useState(props.videos);
	const [activeTag, setActiveTag] = useState(null);

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
					<div className='max-w-screen-md mx-8 lg:mx-auto pt-16 pb-8 lg:pt-32 lg:text-xl'>
						<h2 className='font-hbold text-3xl lg:text-4xl text-center lg:text-left lg:mb-16 bullet'>CONGRESO CIUDAD E INFANCIA</h2>
						<p className='my-8'>El Congreso digital se plantea como un espacio de encuentro, discusión,
aprendizaje y divulgación en torno al tema de las infancias en la ciudad y el
lugar de los niñ@s y jóvenes en ellas.</p>
						<p className='my-8'>La convocatoria está abierta a arquitectos, diseñadores, urbanistas,
organizaciones, académicos, instituciones y expert@s en el tema de Chile y
el mundo, a compartir sus experiencias, iniciativas y proyectos en torno al
estudio y desarrollo de ciudades amigables con la infancia.</p>
						<p className='my-8'>El congreso se plantea como una plataforma colaborativa de recursos abiertos a todos para que el amplio abanico de experiencias con enfoque en la pertinencia infantil en la ciudad puedan darse a conocer y que tejemos en conjunto una red que fortalezca iniciativas y proyectos a lo largo de Chile y el mundo, y así poder descifrar los beneficios que trae el vínculo con la ciudad, los espacios públicos y la naturaleza, en el desarrollo de la niñez.</p>
						<p className='my-8 text-center'>Anímate a participar, ¡la ciudad también es tuya!</p>

					</div>
				</section>

				<section className='invitados-slider'>
					<Swiper
						modules={[Navigation]}
						navigation={true}
						>
						<SwiperSlide>
							<div className='slide color-blanco'>
								<Image src="/img/fotos/congreso/invitados-slide-ejemplo.jpg" layout='fill' objectFit='cover' alt='banner' />
								<div className='container pt-28 relative'>
									<h2 className='pl-16 lg:pl-24 font-hbold text-xl lg:text-4xl leading-tight bullet mb-12'>¡invitados<br />especiales!</h2>
									<h3 className='pl-8 lg:pl-12 font-hbold text-xl mb-2'>NIÑOS, NIÑAS<br />Y ADOLESCENTES</h3>
									<p className='pl-8 lg:pl-12 text-sm mb-6'>CHILE</p>
									<button className='ml-8 lg:ml-12 button xsmall fondo-blanco text-sm font-semibold cursor-pointer'>VER VIDEO</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slide'>
								<img src="/img/foto-slider.jpg" className='w-full' alt='banner' />
							</div>
						</SwiperSlide>
					</Swiper>
				</section>

				<section>
					<div className="container grid lg:grid-cols-3 gap-8 gap-y-16 my-12">
						<article>
								<Image src="/img/fotos/congreso/1-invitados-especiales-1.png" width={374} height={211} alt='banner' />
								<h3 className='font-hbold text-xl'>MARTA ROMÁN</h3>
								<p className='text-sm mb-6'>ESPAÑA</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer'>MÁS INFO</button>
						</article>
						<article>
								<Image src="/img/fotos/congreso/1-invitados-especiales-2.png" width={374} height={211} alt='banner' />
								<h3 className='font-hbold text-xl'>TIM GILL</h3>
								<p className='text-sm mb-6'>INGLATERRA</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer'>MÁS INFO</button>
						</article>
						<article>
								<Image src="/img/fotos/congreso/1-invitados-especiales-3.png" width={374} height={211} alt='banner' />
								<h3 className='font-hbold text-xl'>RODRIGO MAYORGA</h3>
								<p className='text-sm mb-6'>CHILE</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer'>MÁS INFO</button>
						</article>
						<article>
								<Image src="/img/fotos/congreso/1-invitados-especiales-4.png" width={374} height={211} alt='banner' />
								<h3 className='font-hbold text-xl'>CECILIA VACA-JONES</h3>
								<p className='text-sm mb-6'>ECUADOR</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer'>MÁS INFO</button>
						</article>
						<article>
								<Image src="/img/fotos/congreso/1-invitados-especiales-5.png" width={374} height={211} alt='banner' />
								<h3 className='font-hbold text-xl'>MATIAS KNUST</h3>
								<p className='text-sm mb-6'>INGLATERRA</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer'>MÁS INFO</button>
						</article>
						<article>
								<Image src="/img/fotos/congreso/1-invitados-especiales-6.png" width={374} height={211} alt='banner' />
								<h3 className='font-hbold text-xl'>FELIPE LECANNELIER</h3>
								<p className='text-sm mb-6'>CHILE</p>
								<button className='button xsmall text-sm font-semibold cursor-pointer'>MÁS INFO</button>
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
									<h3 className='font-hbold text-xl uppercase mt-3 mb-1'>{video.title.rendered}</h3>
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
							<p className='pl-16 lg:pl-24'><Link href='congreso-ciudad-e-infancia'><a className='button small text-sm font-semibold'><span className="align-middle"><Image src="/img/ico-descarga.svg" width={24} height={24} alt='descarga' /></span> <span className='ml-4'>DESCARGAR</span></a></Link></p>
						</div>
					</div>
				</section>

			</main>

			<Footer bgClass="fondo-rosado" />
        </>
    )
}

export async function getStaticProps(context) {
	const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + '/video?_embed')
  const videos = await res.json()

  return {
    props: {
			videos,
		},
  }
}