import Image from 'next/image'

const Footer = (props) => (
	<footer className={((props.bgClass)? props.bgClass : 'fondo-blanco') + ' fondo-figura-azul color-blanco pt-28'}>
		<section className='container lg:flex justify-start gap-16'>
			<div>
				<h2 className='text-lg mb-8'>ORGANIZA</h2>
				<div className='relative w-28 h-28'><Image src="/img/logos/web-logo-escala-comun.svg" layout='fill' objectFit='contain' alt='logo' /></div>
			</div>
			<div className='mt-8 lg:mt-0'>
				<h2 className='text-lg mb-8'>FINANCIA</h2>
				<div className='flex justify-between lg:gap-16'>
					<div className='col-span-2 relative w-28 h-28'><Image src="/img/logos/web-logo-ministerio-cultura.svg" layout='fill' objectFit='contain' alt='logo' /></div>
					<div className='col-span-2 relative w-28 h-28 ml-8 lg:ml-0'><Image src="/img/logos/Olivo-logo-blanco.png" layout='fill' objectFit='contain' alt='logo' /></div>
					<div className='col-span-2 relative w-28 h-28 ml-8 lg:ml-0'><Image src="/img/logos/femsa.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				</div>
			</div>
		</section>

		<section className='container'>
			<h2 className='text-lg mt-12 mb-8'>PATROCINAN</h2>
			<div className='grid grid-cols-2 lg:flex lg:flex-wrap justify-between gap-x-16 gap-y-4'>
				<div className='relative h-28 w-28 lg:w-36'><Image src="/img/logos/logo-muni-viña.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				<div className='relative h-28 w-32 lg:w-40'><Image src="/img/logos/web-logo-escuela-arq-diseño-valparaiso.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				<div className='relative h-28 w-16 lg:w-20'><Image src="/img/logos/web-logo-arq-usm.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				<div className='relative h-28 w-32 lg:w-40'><Image src="/img/logos/web-logo-unicef.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				<div className='relative h-28 w-28 lg:w-32'><Image src="/img/logos/web-logo-catolica-valparaiso.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				<div className='relative h-28 w-28 lg:w-36'><Image src="/img/logos/web-logo-federico-santa-maria.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				<div className='relative h-28 w-28 lg:w-36'><Image src="/img/logos/pichintun.svg" layout='fill' objectFit='contain' alt='logo' /></div>
			</div>
		</section>

		<section className='container lg:flex justify-start gap-16'>
			<div>
				<h2 className='text-lg mt-12 mb-8'>AUSPICIO</h2>
				<div className='flex flex-wrap'>
					<div className='relative h-16 w-20 lg:w-28'><Image src="/img/logos/ambrosoli.svg" layout='fill' objectFit='contain' alt='logo' /></div>
					<div className='relative h-16 w-32 lg:w-40 ml-16'><Image src="/img/logos/mustakis.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				</div>
			</div>
			<div className='mt-8 lg:mt-0'>
				<h2 className='text-lg mt-12 mb-8'>MEDIA PARTNERS</h2>
				<div className='flex flex-wrap'>
					<div className='relative h-16 w-24 lg:w-32'><Image src="/img/logos/radio-valparaiso-logo.svg" layout='fill' objectFit='contain' alt='logo' /></div>
					<div className='relative h-16 w-28 lg:w-36 ml-16'><Image src="/img/logos/el-martutino-logo.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				</div>
			</div>
			
		</section>

		<div className='container flex flex-col lg:flex-row justify-between items-center lg:items-start gap-y-16 lg:lap-y-0 mt-16 lg:mt-28'>
			<section>
				<p className='w-64 lg:w-80 h-32 relative'><Image src="/img/logos/web-logo-locus-frase.svg" layout='fill' objectFit='contain' alt='LOCUS' /></p>
			</section>
			<section className='flex gap-10'>
				<a href="https://www.instagram.com/locusfest/" className='font-bold uppercase flex gap-4 items-center'>
					<div className='relative w-10 h-10'><Image src="/img/logos/web-logo-instagram.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				</a>
				{/* <a href="#" className='font-bold uppercase flex gap-4 items-center'>
					<div className='relative w-10 h-10'><Image src="/img/logos/web-logo-youtube.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				</a> */}
				<a href="https://www.linkedin.com/company/locus-fest" className='font-bold uppercase flex gap-4 items-center'>
					<div className='relative w-10 h-10'><Image src="/img/logos/web-logo-linkedin.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				</a>
			</section>
			<section className=''>
				<h2 className='font-hlight text-2xl'>¡CONVERSEMOS!</h2>
				<a href="mailto:hola@locusfest.cl" className='font-hbold text-2xl'>hola@locusfest.cl</a>
			</section>
		</div>

		<div className='text-center text-xs pt-12 pb-10'>SITIO WEB DESARROLLADO POR ANDRÉS VALENZUELA</div>
	</footer>
)

export default Footer
