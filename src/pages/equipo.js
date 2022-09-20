import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Equipo() {
    return (
        <>
            <Head>
                <title>Locus Festival Internacional Infancia y Adolescencia en la Ciudad</title>
            </Head>

            <Header />
			<main>

      <section className='fondo-figura-blanca' id='equipo'>
					<div className='container pt-20'>
						<h2 className='font-hbold text-3xl lg:text-4xl mb-12 text-center'>EQUIPO</h2>
						<div className='lg:flex flex-wrap justify-center gap-y-20 text-center'>
							<article className='my-16 lg:my-0 lg:w-1/3'>
								<div className='relative h-48'><Image src="/img/fotos/foto-perfil-Piera.png" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-bold mt-6 mb-2 text-xl'>Piera Medina</h3>
								<p className='text-sm font-medium'>DIRECTORA GENERAL</p>
							</article>
							<article className='my-16 lg:my-0 lg:w-1/3'>
								<div className='relative h-48'><Image src="/img/fotos/foto-perfil-Danitza.png" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-bold mt-6 mb-2 text-xl'>Danitza Vymazal</h3>
								<p className='text-sm font-medium'>DIRECTORA DE PRODUCCIÓN</p>
							</article>
							<article className='my-16 lg:my-0 lg:w-1/3'>
								<div className='relative h-48'><Image src="/img/fotos/fotos-carole-gurdon.svg" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-bold mt-6 mb-2 text-xl'>Carole Gurdon</h3>
								<p className='text-sm font-medium'>DIRECTORA DE CONTENIDOS</p>
							</article>
							<article className='my-16 lg:my-0 lg:w-1/3'>
								<div className='relative h-48'><Image src="/img/fotos/fotos-macarena-cima.svg" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-bold mt-6 mb-2 text-xl'>Macarena Cima</h3>
								<p className='text-sm font-medium'>ASISTENTE DE PRODUCCIÓN</p>
							</article>
							<article className='my-16 lg:my-0 lg:w-1/3'>
								<div className='relative h-48'><Image src="/img/fotos/fotos-fernanda-chesta.svg" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-bold mt-6 mb-2 text-xl'>Fernanda Chesta</h3>
								<p className='text-sm font-medium'>ASISTENTE DE CONTENIDOS</p>
							</article>
						</div>
						</div>
						<div className='fondo-blanco pb-20'>
							<div className='container'>
								<h2 className='font-hbold text-xl mt-20 mb-4 text-center'>DISEÑO</h2>
								<div className='grid lg:grid-cols-3 gap-8 text-center font-semibold'>
									<p>Sergio Ramírez</p>
									<p>Valentina Alcántara</p>
									<p>Martín Pastenes</p>
								</div>

								<h2 className='font-hbold text-xl mt-20 mb-4 text-center'>AUDIOVISUAL</h2>
								<div className='grid gap-8 text-center'>
									<p className='font-semibold'>Los Navegantes Films</p>
								</div>
							</div>
						</div>
				</section>

			</main>

			<Footer bgClass="fondo-blanco" />
        </>
    )
}
