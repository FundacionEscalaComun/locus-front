import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Video() {
    return (
      <>
        <Head>
            <title>Locus Festival Internacional Infancia y Adolescencia en la Ciudad</title>
        </Head>

        <Header />
			  <main>
          <section>
            <div className='container pt-20'>
              <h2 className='font-hbold text-3xl lg:text-4xl mb-12 text-center'>VIDEO</h2>
            </div>
          </section>
			  </main>
			  <Footer bgClass="fondo-blanco" />
      </>
    )
}
