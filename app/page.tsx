import Navar from './navbar'
import Footer from './footer'
import Hero from './hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Navar />
      <Hero />
      <Footer />
    </main>
  );
}
