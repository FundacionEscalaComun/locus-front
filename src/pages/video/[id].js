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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/iFJbOunLwWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </section>
			  </main>
      </>
    )
}
