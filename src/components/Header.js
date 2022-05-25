import Link from 'next/link'
import Image from 'next/image'

const Header = ({ ...props }) => (
	<header className='header fondo-azul flex'>
		<div className='container grid grid-cols-3 gap-8'>
			<h1 className='w-32 relative'><Image src="/img/logos-locus.svg" layout='fill' objectFit='contain' alt='LOCUS' /></h1>
			<nav className='hidden lg:flex col-span-2'>
				<ul className='flex items-stretch justify-between gap-4 font-bold w-full'>
					<li className='flex items-stretch'><a href="#convocatorias">¡CONVOCATORIAS<br />ABIERTAS!</a></li>
					<li className='relative flex items-stretch'>
						<a href="#sobre">SOBRE LOCUS</a>
						<ul className='submenu'>
							<li><a href="#sobre">FAQ</a></li>
						</ul>
					</li>
					<li className='relative flex items-stretch'>
						<a href="#programa">PROGRAMA</a>
						<ul className='submenu'>
							<li><a href="#sobre">CONGRESO CIUDAD E INFANCIA</a></li>
							<li><a href="#sobre">INTERVENCIONES URBANAS</a></li>
						</ul>
					</li>
					<li className='flex items-stretch'><a href="#equipo">EQUIPO</a></li>
					<li className='flex items-stretch'><a href="#redes">REDES SOCIALES</a></li>
					<li className='flex items-stretch'><a href="#redes">NEWSLETTER</a></li>
				</ul>
			</nav>
		</div>
	</header>
)

export default Header
