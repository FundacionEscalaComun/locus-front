import React, { useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
	let menuIsOpen = false;

	useEffect(() => {
		if(typeof document !== 'undefined') {
			document.querySelectorAll('nav a').forEach(function(element) {
				element.addEventListener('click', closeMenu);
			});
		   }
	}, []);

	const toggleMenu = () => {
		if(menuIsOpen) {
			closeMenu();
		} else {
			 document.getElementById('menu').style.display = 'block';
			 menuIsOpen = true;
		}
	}

	const closeMenu = () => {
		document.getElementById('menu').style.display = 'none';
		menuIsOpen = false;
	}

	return (
		<header className='header fondo-azul lg:flex'>
			<div className='container flex justify-between items-center lg:grid grid-cols-3 gap-8'>
				<h1 className='w-16 h-16 mt-4 relative'><Link href='/'><a><Image src="/img/logos/web-locus-logo-header.svg" layout='fill' objectFit='contain' alt='LOCUS' /></a></Link></h1>
				<div className='block lg:hidden w-8 h-8 relative' onClick={toggleMenu}><Image src="/img/menu.svg" layout='fill' objectFit='contain' alt='LOCUS' /></div>
				{/* menu lg */}
				<nav className='hidden lg:flex col-span-2'>
					<ul className='flex items-stretch justify-between gap-4 font-bold w-full'>
						<li className='flex items-stretch'><Link href='/#convocatorias'><a>¡CONVOCATORIAS<br />ABIERTAS!</a></Link></li>
						<li className='relative flex items-stretch'><Link href='/#sobre'><a>SOBRE LOCUS</a></Link></li>
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
			{/* menu móvil */}
			<nav id="menu" className='hidden pl-8 pt-12 pb-12'>
				<ul className='flex flex-col gap-4 font-bold w-full'>
					<li className=''><Link href='/#convocatorias'><a>¡CONVOCATORIAS ABIERTAS!</a></Link></li>
					<li className=''><Link href='/#sobre'><a>SOBRE LOCUS</a></Link></li>
					<li className=''>
						<Link href='/#programa'><a>PROGRAMA</a></Link>
						<ul className='pl-4'>
							<li className='my-4'><Link href='/congreso-ciudad-e-infancia'><a>CONGRESO CIUDAD E INFANCIA</a></Link></li>
							<li className='mt-4'><Link href='/intervenciones-urbanas-en-vina-del-mar'><a>INTERVENCIONES URBANAS</a></Link></li>
						</ul>
					</li>
					<li className=''><Link href='/#equipo'><a>EQUIPO</a></Link></li>
					<li className=''><Link href='/#redes'><a>REDES SOCIALES</a></Link></li>
					<li className=''><Link href='/#redes'><a>NEWSLETTER</a></Link></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
