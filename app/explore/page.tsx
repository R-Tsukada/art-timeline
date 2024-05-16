import Image from 'next/image'

export default function Explore() {
  type Artist = {
    id: number,
    artistDisplayName: string,
    artistBeginDate: number,
    deathYear: number,
    imageURL: string
  }

  const artistList: Artist[] = [
    {
      id: 1,
      artistDisplayName: 'Vincent van Gogh',
      artistBeginDate: 1853,
      deathYear: 1890,
      imageURL: 'https://images.metmuseum.org/CRDImages/ep/web-large/DP130999.jpg'
    },
    {
      id: 2,
      artistDisplayName: 'Rembrandt van Rijn',
      artistBeginDate: 1881,
      deathYear: 1973,
      imageURL: 'https://images.metmuseum.org/CRDImages/ep/web-large/DP145909.jpg'
    },
    {
      id: 3,
      artistDisplayName: 'Johannes Vermeer',
      artistBeginDate: 1452,
      deathYear: 1519,
      imageURL: 'https://images.metmuseum.org/CRDImages/ep/web-large/DP145924.jpg'
    }
  ]

  return (
    <div className='max-w-screen-lg mx-auto p-5'>
      <h2 className='text-2xl text-center font-semibold mb-6'>Discover the Ages: Explore Masterpieces by Artist</h2>
      <p className='m-6 text-pretty'>Select an Artist: Explore the masterpieces crafted by renowned artists and dive deep into their unique styles and contributions to the world of art.</p>
      <div className='flex justify-between w-full'>
        {artistList.map((artist, index) => (
          <div className="card w-96 bg-base-100 shadow-xl m-6" key={index}>
            <Image
              src={artist.imageURL}
              alt={artist.artistDisplayName}
              width={400}
              height={400}
            />
            <div className="card-body">
              <h2 className="card-title">{artist.artistDisplayName}</h2>
              <p>{artist.artistBeginDate} - {artist.deathYear}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Get Start</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
