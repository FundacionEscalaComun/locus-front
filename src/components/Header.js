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
						<Link href='/#sobre'><a>SOBRE LOCUS</a></Link>
						<ul className='submenu'>
							<li><a href="#sobre">FAQ</a></li>
						</ul>
					</li>
					<li className='relative flex items-stretch'>
						<Link href='/#programa'><a>PROGRAMA</a></Link>
						<ul className='submenu'>
							<li><Link href='/congreso-ciudad-e-infancia'><a>CONGRESO CIUDAD E INFANCIA</a></Link></li>
							<li><Link href='/intervenciones-urbanas-en-vina-del-mar'><a>INTERVENCIONES URBANAS</a></Link></li>
						</ul>
					</li>
					<li className='flex items-stretch'><Link href='/#equipo'><a>EQUIPO</a></Link></li>
					<li className='flex items-stretch'><Link href='/#redes'><a>REDES SOCIALES</a></Link></li>
					<li className='flex items-stretch'><Link href='/#redes'><a>NEWSLETTER</a></Link></li>
				</ul>
			</nav>
		</div>
	</header>
)

export default Header
