import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Video({youtubeId}) {
    return (
      <>
        <Head>
            <title>Locus Festival Internacional Infancia y Adolescencia en la Ciudad</title>
        </Head>

        <Header />
			  <main className='video flex items-center justify-center'>
          <section className='w-full'>
            <div className='container'>
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtubeId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </section>
			  </main>
      </>
    )
}

export async function getStaticPaths() {
	const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + '/video?_embed&per_page=96&order=asc&t=' + Math.round(new Date().getTime()/1000))
  let videos = await res.json()
  const paths = videos.map(video => ({
    params:{id:video.id.toString()}
  }))
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
	const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + '/video/' + context.params.id + '?t=' + Math.round(new Date().getTime()/1000))
  let video = await res.json()
  let youtubeId = video.acf.id_youtube.replace('https://youtu.be/', '')

  return {
    props: {
			youtubeId,
		},
  }
}
