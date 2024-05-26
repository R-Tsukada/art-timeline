'use client'

import { usePathname } from 'next/navigation'

export default function Artist() {
  const pathname = usePathname()
  const artistId: number = Number(pathname.split('/').pop())
  return (
    <div className='flex flex-col justify-center max-w-screen-lg mx-auto p-5'>
      <h2 className='text-center'>Hello World{artistId}</h2>
    </div>
  )
}
