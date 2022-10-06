import Head from 'next/head'
import Header from '@/components/Header'

export default function Video({title, youtubeId, published}) {
    return (
      <>
        <Head>
            <title>{title} - LOCUS</title>
        </Head>

        <Header />
			  <main className='video flex items-center justify-center'>
          <section className='w-full'>
            <div className='container'>
              {published
              ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtubeId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              : <p className='text-center color-blanco'>Video no disponible.</p>
              }
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
    params:{
      slug: video.slug.toString(),
    }
  }))
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
	const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + '/video?slug=' + context.params.slug + '&t=' + Math.round(new Date().getTime()/1000))
  const videos = await res.json()
  const published = typeof videos[0].acf.fecha_publicacion !== 'undefined' && videos[0].acf.fecha_publicacion !== '' && new Date() >= new Date(videos[0].acf.fecha_publicacion);
  const youtubeId = published? videos[0].acf.id_youtube.replace('https://youtu.be/', '').trim() : ''

  return {
    props: {
      title: videos[0].title.rendered,
			youtubeId,
      published,
		},
  }
}
