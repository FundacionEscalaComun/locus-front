import Link from 'next/link'
import Image from 'next/image'

const Header = ({ ...props }) => (
	<header className='header fondo-azul flex'>
		<div className='container grid grid-cols-3 gap-8'>
			<h1 className='w-48 lg:w-80 relative'><Image src="/img/logos-locus.svg" layout='fill' objectFit='contain' alt='LOCUS' /></h1>
			<nav className='hidden lg:flex col-span-2'>
				<ul className='flex items-center justify-between gap-4 font-bold w-full'>
					<li><a href="#convocatorias">¡CONVOCATORIAS<br />ABIERTAS!</a></li>
					<li><a href="#sobre">SOBRE LOCUS</a></li>
					<li><a href="#programa">PROGRAMA</a></li>
					<li><a href="#equipo">EQUIPO</a></li>
					<li><a href="#redes">REDES SOCIALES</a></li>
				</ul>
			</nav>
		</div>
	</header>
)

export default Header
