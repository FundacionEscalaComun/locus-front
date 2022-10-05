import Head from 'next/head'
import Header from '@/components/Header'
import { slides } from '@/lib/invitados'

export default function Video({title, youtubeId}) {
    return (
      <>
        <Head>
            <title>{title} - LOCUS</title>
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
  const paths = slides.map(video => ({
    params:{
      slug: video.slug,
    }
  }))
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  const video = slides.find(slide => slide.slug === context.params.slug)
  console.log(video)
  let youtubeId = video.youtube.replace('https://youtu.be/', '')

  return {
    props: {
			title: video.name,
			youtubeId,
		},
  }
}
