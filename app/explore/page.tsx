'use client'
import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'

export default function Explore() {
  const [artistId, setArtistId] = useState<number>(0)

  type Artist = {
    id: number,
    artistDisplayName: string,
    artistBeginDate: number,
    deathYear: number,
    imageURL: string,
    selected: boolean
  }

  const initialArtistList: Artist[] = [
    {
      id: 1,
      artistDisplayName: 'Vincent van Gogh',
      artistBeginDate: 1853,
      deathYear: 1890,
      imageURL: 'https://images.metmuseum.org/CRDImages/ep/web-large/DP130999.jpg',
      selected: false
    },
    {
      id: 2,
      artistDisplayName: 'Rembrandt van Rijn',
      artistBeginDate: 1881,
      deathYear: 1973,
      imageURL: 'https://images.metmuseum.org/CRDImages/ep/web-large/DP145909.jpg',
      selected: false
    },
    {
      id: 3,
      artistDisplayName: 'Johannes Vermeer',
      artistBeginDate: 1452,
      deathYear: 1519,
      imageURL: 'https://images.metmuseum.org/CRDImages/ep/web-large/DP145924.jpg',
      selected: false
    }
  ]

  const [artistList, setArtistList] = useState<Artist[]>(initialArtistList)

  const handleArtistClick = (id: number) => {
    const updatedArtistList = artistList.map((artist: Artist) => {
      return { ...artist, selected: artist.id === id }
    })
    setArtistId(id)
    setArtistList(updatedArtistList)
  }

  return (
    <div className='max-w-screen-lg mx-auto p-5'>
      <h2 className='text-2xl text-center font-semibold mb-6'>Discover the Ages: Explore Masterpieces by Artist</h2>
      <p className='m-6 text-pretty'>Select an Artist: Explore the masterpieces crafted by renowned artists and dive deep into their unique styles and contributions to the world of art.</p>
      <div className='flex justify-between w-full'>
        {artistList.map((artist, index) => (
          <div
            key={index}
            className={clsx(
              "card w-96 bg-base-100 shadow-xl m-6",
            {
              'bg-blue-100': artist.selected
            }
            )}
          >
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
                <button className="btn btn-primary" onClick={() => handleArtistClick(artist.id)}>Select</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
