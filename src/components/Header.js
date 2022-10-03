import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { getEnVivo, getEnVivoUrl } from '@/lib/envivo';

const Header = () => {
	const [enVivo, setEnVivo] = useState(false);
	const [enVivoUrl, setEnVivoUrl] = useState(false);
	let menuIsOpen = false;

	useEffect(() => {
		if(typeof document !== 'undefined') {
			document.querySelectorAll('nav a').forEach(function(element) {
				element.addEventListener('click', closeMenu);
			});
		}
		// Revisar cada 5 segundos si está en vivo
		setEnVivo(getEnVivo());
		setEnVivoUrl(getEnVivoUrl());
		const interval = setInterval(() => setEnVivo(getEnVivo()), 5000);
		return () => {
			clearInterval(interval);
		};
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
		<header className={enVivo? 'header header-envivo fondo-azul lg:flex' : 'header fondo-azul lg:flex'}>
			<div className='container flex justify-between items-center lg:grid grid-cols-4 lg:items-stretch gap-8'>
				<h1 className='w-16 h-16 mt-3 relative hidden lg:block'><Link href='/'><a><Image src={enVivo? "/img/logos/en-vivo-22.svg" : "/img/logos/web-locus-logo-header.svg"} layout='fill' objectFit='contain' alt='LOCUS' /></a></Link></h1>
				<h1 className='w-16 h-16 mt-3 relative lg:hidden'><Link href='/'><a><Image src="/img/logos/web-locus-logo-header.svg" layout='fill' objectFit='contain' alt='LOCUS' /></a></Link></h1>
				<div className='block lg:hidden w-8 h-8 relative' onClick={toggleMenu}><Image src="/img/menu.svg" layout='fill' objectFit='contain' alt='LOCUS' /></div>
				{/* menu lg */}
				<nav className='hidden lg:flex col-span-3 fondo-azul'>
					<ul className='flex items-stretch justify-between gap-4 font-bold w-full'>
						{enVivo? 
							<li className='envivo flex items-stretch'><a href={enVivoUrl}>· ¡AHORA EN VIVO!</a></li>
						: 
							<li className='flex items-stretch'></li>
						}
						<li className='relative flex items-stretch'><Link href='/#sobre'><a>SOBRE LOCUS</a></Link></li>
						<li className='relative flex items-stretch'>
							<Link href='/#programa'><a>PROGRAMA</a></Link>
							<ul className='submenu'>
								<li><Link href='/congreso-ciudad-e-infancia'><a>CONGRESO CIUDAD E INFANCIA</a></Link></li>
								<li><Link href='/intervenciones-urbanas-en-vina-del-mar'><a>INTERVENCIONES URBANAS</a></Link></li>
							</ul>
						</li>
						<li className='flex items-stretch'><Link href='/equipo'><a>EQUIPO</a></Link></li>
						<li className='flex items-stretch'><Link href='/#redes'><a>REDES SOCIALES</a></Link></li>
						<li className='flex items-stretch'><Link href='/#newsletter'><a>NEWSLETTER</a></Link></li>
					</ul>
				</nav>
			</div>
			{/* menu móvil */}
			<nav id="menu" className='hidden pl-8 pt-8 pb-8'>
				<ul className='font-bold w-full'>
					{enVivo && <li className='my-4'><a href={enVivoUrl}>· ¡AHORA EN VIVO!</a></li>}
					<li className='my-4'><Link href='/#sobre'><a>SOBRE LOCUS</a></Link></li>
					<li className='my-4'>
						<Link href='/#programa'><a>PROGRAMA</a></Link>
						<ul className='pl-4'>
							<li className='my-4'><Link href='/congreso-ciudad-e-infancia'><a>CONGRESO CIUDAD E INFANCIA</a></Link></li>
							<li className='mt-4'><Link href='/intervenciones-urbanas-en-vina-del-mar'><a>INTERVENCIONES URBANAS</a></Link></li>
						</ul>
					</li>
					<li className='my-4'><Link href='/equipo'><a>EQUIPO</a></Link></li>
					<li className='my-4'><Link href='/#redes'><a>REDES SOCIALES</a></Link></li>
					<li className='my-4'><Link href='/#newsletter'><a>NEWSLETTER</a></Link></li>
				</ul>
			</nav>
			{/* vivo móvil */}
			<div className={'lg:hidden envivo justify-center py-3 mt-3' + (enVivo? '' : ' hidden')}>
				<a href='https://www.youtube.com/channel/UCRmTw_smpU6YTDwr2ISIAVg'>· ¡AHORA EN VIVO!</a>
			</div>
		</header>
	)
}

export default Header
