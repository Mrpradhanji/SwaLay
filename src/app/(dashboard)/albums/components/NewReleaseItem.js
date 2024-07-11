import React from 'react'
import Style from '../../../styles/NewReleaseItem.module.css'
import Link from 'next/link'
import Image from 'next/image'

const NewReleaseItem = ({ imageSrc, albumName , albumArtist}) => {
  return (
    <div className={`m-2 ${Style.newReleaseItem}`}>
    <Link href='/albums/viewalbum' >
        <Image
            // src='/images/album2.jpg'
            src={imageSrc}
            alt='album'
            width={200}
            height={200}
            className={Style.albumImage}
        />
        <div className=" p-1">
        <p className={`m-0 ${Style.albumName}`}>{albumName}</p>
        <p className={`m-0 ${Style.albumArtistName}`}>{albumArtist}</p>
        </div>
    </Link>
</div>
  )
}

export default NewReleaseItem