import Hero from './hero'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <main className='flex-grow flex flex-col items-center justify-center'>
        <Hero />
      </main>
    </div>
  )
}
