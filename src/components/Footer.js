import Image from 'next/image'

const Footer = ({ ...props }) => (
	<footer className='fondo-azul color-blanco py-40'>
		<section className='container flex justify-start'>
			<div>
				<h2 className='text-xl'>ORGANIZA</h2>
				<div className='relative w-44 h-44 mx-auto my-10'><Image src="/img/logos-escala-comun.svg" layout='fill' objectFit='contain' alt='logo' /></div>
			</div>
			<div>
				<h2 className='text-xl'>FINANCIA</h2>
				<div className='col-span-2 relative h-32'><Image src="/img/logos-fondart.svg" layout='fill' objectFit='contain' alt='logo' /></div>
			</div>
		</section>

		<section className='container'>
			<h2 className='text-xl'>PATROCINAN</h2>
			<div className='flex justify-between'>
				<div className='relative h-32'><Image src="/img/logos-pucv.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				<div className='relative h-32'><Image src="/img/logos-usm.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				<div className='relative h-32'><Image src="/img/logo-ead.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				<div className='relative h-32'><Image src="/img/logos-arq-usm.svg" layout='fill' objectFit='contain' alt='logo' /></div>
			</div>
		</section>

		<div className='container flex justify-between'>
			<section>
				<p className='w-80 h-32 relative'><Image src="/img/logos-locus.svg" layout='fill' objectFit='contain' alt='LOCUS' /></p>
			</section>
			<section className='flex gap-10'>
				<a href="https://www.instagram.com/locusfest/" className='font-bold uppercase flex gap-4 items-center'>
					<div className='relative w-8 h-8'><Image src="/img/logos-ig-blanco.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				</a>
				<a href="#" className='font-bold uppercase flex gap-4 items-center'>
					<div className='relative w-8 h-8'><Image src="/img/logos-youtube-blanco.svg" layout='fill' objectFit='contain' alt='logo' /></div>
				</a>
			</section>
			<section className=''>
				<h2 className='font-hlight text-xl'>¡CONVERSEMOS!</h2>
				<a href="mailto:hola@locusfest.cl" className='font-hbold text-xl'>hola@locusfest.cl</a>
			</section>
		</div>
	</footer>
)

export default Footer
