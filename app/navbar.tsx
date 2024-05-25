import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='navbar bg-base-100'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <p className='text-xl font-bold'>Art Timeline</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
