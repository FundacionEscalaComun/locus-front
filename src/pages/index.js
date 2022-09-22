import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Mailchimp from '@/components/Mailchimp';
import Marquee from "react-fast-marquee";
import MarqueeContent from '@/components/MarqueeContent';
import MarqueeContentSub from '@/components/MarqueeContentSub';

export default function Home({noticias}) {
	const [swiperRef, setSwiperRef] = useState(null);
    return (
        <>
            <Head>
                <title>Locus Festival Internacional Infancia y Adolescencia en la Ciudad</title>
            </Head>

            <Header />
			<main>
				<section className='relative'>
					<div className='fondo-verde'>
						<Marquee gradient={false} className='fondo-verde'>
							<MarqueeContent />						
							<MarqueeContent />						
							<MarqueeContent />						
							<MarqueeContent />						
						</Marquee>
					</div>
					<div className='fondo-blanco'>
						<Marquee gradient={false} direction='right'>
							<MarqueeContentSub />						
							<MarqueeContentSub />						
							<MarqueeContentSub />						
						</Marquee>
					</div>
					<Swiper
						modules={[Pagination]}
						pagination={{ 
							clickable: true, 
						}}
						>
						<SwiperSlide>
							<div className='banner'>
								<Image src="/img/banner-inicio.png" layout='fill' objectFit='cover' alt='banner' />
							</div>
						</SwiperSlide>
						<SwiperSlide>
						<video playsInline controls className="banner" width="640" height="360">
							<source src="/videos/Lugar Locus 15.06.2022.mp4" type="video/mp4"/>
							Your browser does not support the video tag. I suggest you upgrade your browser.
						</video>
						</SwiperSlide>
						<SwiperSlide>
							<div className='banner'>
								<img src="/img/foto-slider.jpg" className='w-full' alt='banner' />
							</div>
						</SwiperSlide>
						<SwiperSlide>
						<video playsInline controls className="banner" width="640" height="360">
							<source src="/videos/LOCUS Workshop 1 Tesoreando 1minuto + logo La Reconquista.mp4" type="video/mp4"/>
							Your browser does not support the video tag. I suggest you upgrade your browser.
						</video>
						</SwiperSlide>
					</Swiper>
				</section>

				<section className='color-azul fondo-amarillo'>
					<div className='max-w-screen-md mx-8 lg:mx-auto pt-16 pb-8 lg:pt-20 lg:text-xl'>
						<a className="anchor" id="sobre"></a>
						<h2 className='font-hbold text-3xl lg:text-4xl text-center lg:text-left'>SOBRE LOCUS</h2>
						<p className='my-8'><strong>LOCUS</strong> es un festival internacional dedicado a la inclusión de las ideas y
						participación de la infancia y adolescencia en la creación de su ciudad.
						Ellos también son ciudadanos activos. Hoy necesitamos de sus experiencias
						y miradas para el diseño y proyección de un futuro más amable, inclusivo,
						creativo y sustentable.</p>
						<p className='my-8'>Durante este 2022, invitaremos a jóvenes y profesionales a intervenir una
						selección de espacios públicos en la ciudad de Viña del Mar (Chile). Con un
						programa de workshops, concurso de arquitectura y encuentros con
						expertos, <strong>LOCUS</strong> será una rápida y masiva inmersión de la participación
						infantil en el diseño de sus ciudades.</p>
						<p className='my-8'>Síguenos en Instagram <a href="https://www.instagram.com/locusfest/"><strong>@LOCUSFEST</strong></a> para conocer nuestra programación y
						participar de nuestras convocatorias y actividades. No te pierdas el festival <strong>LOCUS.</strong></p>
						<p className='my-8'>¡La ciudad también es tuya!</p>
					</div>
					<a className="anchor" id="convocatorias"></a>
					<div className='max-w-screen-md mx-8 lg:mx-auto flex flex-col justify-between pb-8'>
						<div>
							<p className='pl-16 lg:pl-24 text-lg lg:text-2xl uppercase bullet'>CONGRESO</p>
							<h2 className='pl-16 lg:pl-24 font-hbold text-xl lg:text-4xl leading-tight mb-6'>CIUDAD E INFANCIA EN LÍNEA</h2>
							<p className='pl-16 lg:pl-24'><a href='/descargas/congreso/parrilla-congreso.pdf' className='button text-sm font-semibold' target='_blank'>CONOCE EL PROGRAMA</a></p>
						</div>
						<div className='mt-14'>
							<p className='pl-16 lg:pl-24 text-lg lg:text-2xl uppercase bullet asterisco-azul'>INTERVENCIONES URBANAS</p>
							<h2 className='pl-16 lg:pl-24 font-hbold text-xl lg:text-4xl leading-tight mb-6'>¡CONOCELAS Y PARTICIPA DE LAS ACTIVIDADES EN VIÑA!</h2>
							<p className='pl-16 lg:pl-24'>
								<Link href='intervenciones-urbanas-en-vina-del-mar'><a className='button text-sm font-semibold mb-4'>CONOCE LOS LUGARES</a></Link>
								<a href='/descargas/intervenciones/cronograma-actividades.pdf' className='button text-sm font-semibold lg:ml-4 text-center' target='_blank'>CONOCE LAS ACTIVIDADES</a>
							</p>
						</div>
					</div>
				</section>

				<section className='fondo-amarillo fondo-figura-blanca' id='equipo'>
					<div className='container pt-40 pb-12'>
						<h2 className='text-3xl lg:text-4xl mb-12 ml-16'>LOCUS <span className='font-hbold'>NOTICIAS</span></h2>
						<div className='swiper-container font-bold mx-16 relative'>
							<Swiper
							onSwiper={setSwiperRef}
							navigation={{
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							}}
							modules={[Navigation]}
							slidesPerView={(typeof window !== 'undefined' && window.innerWidth < 1024)? 1 : 3}
							spaceBetween={30}
							>
							{noticias.map(noticia => 
								<SwiperSlide key={noticia.id}>
										<img src={noticia._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} className='w-full' alt='banner' />
										<h3 className='my-6 lg:pr-20' dangerouslySetInnerHTML={{__html: noticia.title.rendered }}></h3>
										<a href={noticia.acf.link} className='button small font-normal text-sm'>Ver más</a>
								</SwiperSlide>
							)}
							</Swiper>
							<div className="swiper-button-prev" onClick={() => swiperRef.slidePrev()}></div>
							<div className="swiper-button-next" onClick={() => swiperRef.slideNext()}></div>
						</div>
					</div>
				</section>

				<section className='pt-28 pb-16 lg:pb-20 fondo-blanco fondo-figura-blanca' id='redes'>
					<div className='max-w-screen-sm mx-8 lg:mx-auto'>
						<h2 className='font-hbold text-xl lg:text-4xl bullet flor-naranja'>¡SÍGUENOS EN<br />NUESTRAS REDES!</h2>
						<div className='lg:hidden flex justify-center gap-8 my-8'>
							<a href="https://www.instagram.com/locusfest/" className='relative'><div className='relative w-12 h-12'><Image src="/img/logos/logos-celu-16.svg" layout='fill' objectFit='contain' alt='logo Instagram' /></div></a>
							{/* <a href="#" className='relative'><div className='relative w-12 h-12'><Image src="/img/logos/logos-celu-17.svg" layout='fill' objectFit='contain' alt='logo Youtube' /></div></a> */}
							<a href="https://www.linkedin.com/company/locus-fest" className='relative'><div className='relative w-12 h-12'><Image src="/img/logos/logos-celu-18.svg" layout='fill' objectFit='contain' alt='logo Linkedin' /></div></a>
						</div>
						<div className='hidden lg:block my-8'>
							{/* <h3 className='font-hbold text-3xl lg:text-5xl mt-20 mb-10 flex items-center gap-12'>
								<div className='relative w-16 h-16'><Image src="/img/logos-youtube.svg" layout='fill' objectFit='contain' alt='logo' /></div>
								FESTIVAL LOCUS
							</h3> */}
							<a href="https://www.instagram.com/locusfest/"><h3 className='font-hbold text-2xl lg:text-3xl mt-20 mb-20 flex items-center gap-12'>
								<div className='relative w-16 h-16'><Image src="/img/logos-ig.svg" layout='fill' objectFit='contain' alt='logo' /></div>
								@locusfest
							</h3></a>
						</div>
						<a className="anchor" id="newsletter"></a>
						<h2 className='font-hbold text-xl lg:text-4xl bullet flor-azul color-naranja'>¡SUSCRÍBETE A<br />NUESTRO NEWSLETTER!</h2>
						<Mailchimp />
					</div>
				</section>
			</main>

			<Footer />
        </>
    )
}

export async function getStaticProps(context) {
	const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + '/posts?_embed&per_page=91&order=asc')
  const noticias = await res.json()
  return {
    props: {
			noticias,
		},
  }
}