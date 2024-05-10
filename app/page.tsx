import Navbar from './navbar'
import Footer from './footer'
import Hero from './hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
