import Image from 'next/image'

export default function Participant({src, children}) {
  return (
    <article className='lg:my-0 w-1/2 sm:w-1/4 p-4 sm:p-0'>
      <div className='relative h-28 sm:h-40'><Image src={src} layout='fill' objectFit='contain' alt='foto' /></div>
      <h3 className='font-bold mt-6 mb-2 text-xl'>{children}</h3>
    </article>
  )
}
