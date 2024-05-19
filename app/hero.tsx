import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="hero relative w-full style={{ height: 'calc(100vh - 4rem)' }">
      <Image
        src="https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg"
        width={1920}
        height={1080}
        alt="Art Timeline Background"
      />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 text-5xl sm:text-4xl md:text-5xl font-bold">Art Timeline</h1>
          <p className="mb-5 text-sm sm:text-base md:text-lg">Explore the Art of Time: Journey through centuries of creativity, from ancient masterpieces to modern expressions. Discover how art has shaped history and continues to inspire the world today. Dive into the 'Art Timeline' and let each stroke tell its story.</p>
          <Link href='/explore'>
            <button className="btn btn-primary w-full sm:w-auto h-10 sm:h-12 md:h-14 lg:h-16" aria-current="page">
                Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
