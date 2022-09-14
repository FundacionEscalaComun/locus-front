import Image from 'next/image'

export default function Participant({src, children}) {
  return (
    <article className='my-16 lg:my-0 lg:w-1/4'>
      <div className='relative h-40'><Image src={src} layout='fill' objectFit='contain' alt='foto' /></div>
      <h3 className='font-bold mt-6 mb-2 text-xl'>{children}</h3>
    </article>
  )
}
