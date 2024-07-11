import React from 'react'
import Style from '../../../styles/ViewAlbums.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"


// import MusicPlayer from '../components/MusicPlayer'

const albums = () => {
    return (
        <div>
            <div className={Style.albumContainer}>

                <div className={Style.albumThumbnailContainer}>
                    <Image src="/images/album2.jpg" alt='album thumbnail'
                        width={450}
                        height={450}
                        className={Style.albumThumbnail}
                    />
                </div>

                <div className={Style.albumDetails}>
                    <div className={Style.albumGenre}>
                        <span>Music</span>
                    </div>
                    <h2 className={Style.albumTitle}>Album details</h2>
                    <p className={`${Style.albumArtist} mb-2`}>Singer Name</p>
                    <p className={Style.albumInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque debitis eveniet dolorem asd. At sed illum officiis eveniet amet temporibus totam quasi commodi ad non alias</p>

                    <div className='flex'>
                        <div className={`mt-4 mb-2 ${Style.albumEditBtn} p-3`}>Edit Album</div>
                        <Link href={'/'} className={`mt-4 ms-5 mb-2 btn ${Style.albumAddTrack} p-3`}>Add track</Link>
                    </div>

                </div>
            </div>


            <div className={` mt-3 ${Style.trackContainer}`}>
                <div className={`p-1 ${Style.tracksContainer}`}>
                    {/* <h5 className={Style.subheading}><i className="bi bi-music-note"></i> Tracks</h5> */}
                    <div className={`mt-3 ${Style.trackDetailsTop}`}>
                        <h5 className={Style.subheading}> Tracks</h5>
                        <Link href="/" className={buttonVariants({ variant: "default" })}><i className="bi bi-plus-circle mr-2"></i> Add Track</Link>
                    </div>
                    <ul className={`mt-3 ${Style.trackList}`}>

                        <li className={`mb-4 ${Style.trackItem}`}>
                            <span className={`me-2 ${Style.trackItemNumber}`}>01.</span>
                            <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
                            <div className={Style.trackItemInfo}>
                                <div>
                                    <p className={` ${Style.trackItemTrackName}`}>song name here</p>
                                    <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
                                </div>
                                <div className={Style.controllers}>
                                <span className="me-2 inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Genre</span>
                                    <span><i className={`bi bi-stopwatch ${Style.stopwatchIcon}`}></i> 2.30</span>
                                    <i className="bi bi-play-fill"></i>
                                </div>

                            </div>
                        </li>
                        <li className={`mb-4 ${Style.trackItem}`}>
                            <span className={`me-2 ${Style.trackItemNumber}`}>02.</span>
                            <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
                            <div className={Style.trackItemInfo}>
                                <div>
                                    <p className={` ${Style.trackItemTrackName}`}>Another song </p>
                                    <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
                                </div>
                                <div className={Style.controllers}>
                                <span className="me-2 inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Genre</span>
                                    <span><i className={`bi bi-stopwatch ${Style.stopwatchIcon}`}></i> 2.30</span>
                                    <i className="bi bi-play-fill"></i>
                                </div>

                            </div>
                        </li>
                        <li className={`mb-4 ${Style.trackItem}`}>
                            <span className={`me-2 ${Style.trackItemNumber}`}>03.</span>
                            <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
                            <div className={Style.trackItemInfo}>
                                <div>
                                    <p className={` ${Style.trackItemTrackName}`}>song name here</p>
                                    <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
                                </div>
                                <div className={Style.controllers}>
                                <span className="me-2 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Genre</span>
                                    <span><i className={`bi bi-stopwatch ${Style.stopwatchIcon}`}></i> 2.30</span>
                                    <i className="bi bi-play-fill"></i>
                                </div>

                            </div>
                        </li>
                        <li className={`mb-4 ${Style.trackItem}`}>
                            <span className={`me-2 ${Style.trackItemNumber}`}>01.</span>
                            <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
                            <div className={Style.trackItemInfo}>
                                <div>
                                    <p className={` ${Style.trackItemTrackName}`}>song name here</p>
                                    <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
                                </div>
                                <div className={Style.controllers}>
                                <span className="me-2 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Genre</span>
                                    <span><i className={`bi bi-stopwatch ${Style.stopwatchIcon}`}></i> 2.30</span>
                                    <i className="bi bi-play-fill"></i>
                                </div>

                            </div>
                        </li>
                        <li className={`mb-4 ${Style.trackItem}`}>
                            <span className={`me-2 ${Style.trackItemNumber}`}>02.</span>
                            <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
                            <div className={Style.trackItemInfo}>
                                <div>
                                    <p className={` ${Style.trackItemTrackName}`}>Another song </p>
                                    <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
                                </div>
                                <div className={Style.controllers}>
                                <span className="me-2 inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">Genre</span>
                                    <span><i className={`bi bi-stopwatch ${Style.stopwatchIcon}`}></i> 2.30</span>
                                    <i className="bi bi-play-fill"></i>
                                </div>

                            </div>
                        </li>
                        <li className={`mb-4 ${Style.trackItem}`}>
                            <span className={`me-2 ${Style.trackItemNumber}`}>03.</span>
                            <div className={`me-3 ${Style.trackItemIconBox}`}><i className="bi bi-music-note"></i></div>
                            <div className={Style.trackItemInfo}>
                                <div>
                                    <p className={` ${Style.trackItemTrackName}`}>song name here</p>
                                    <p className={`${Style.trackItemTrackSingerName}`}>singer name</p>
                                </div>
                                <div className={Style.controllers}>
                                <span className="me-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Genre</span>
                                    <span><i className={`bi bi-stopwatch ${Style.stopwatchIcon}`}></i> 2.30</span>
                                    <i className="bi bi-play-fill"></i>
                                </div>

                            </div>
                        </li>


                    </ul>
                </div>
                <div className={`p-1 ${Style.trackDetails}`}>
                    {/* <h5 className={Style.subheading}><i className="bi bi-music-note-list"></i> Track Details</h5> */}
                    <div className={Style.trackDetailsTop}>
                        <h5 className={`mt-3 ${Style.subheading}`}> Track Details</h5>
                        <div className={Style.trackDetailsIconGroup}>
                            <i className="bi bi-link-45deg"></i>
                            <i className="bi bi-pencil-square"></i>
                            <i className="bi bi-download"></i>
                            <i className="bi bi-trash"></i>
                        </div>
                    </div>
                    <div className={`p-3 mt-2 ${Style.currentTrackDetails} `}>
                        {/* <p className={`mb-3 ${Style.trackInfoTrackName}`}><span className={Style.trackNameLable}>Track Name: </span> Lost in Mountain</p> */}
                        <p className={`mb-3 ${Style.trackInfoTrackName}`}><i className={`bi bi-music-note-list ${Style.trackNameIcon}`}></i> Lost in Mountain</p>
                        <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Mood</span>
                        <span className="ms-3 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Genre</span>

                        <div className="mt-3">
                            <Tabs defaultValue="account" className="w-100">
                                <TabsList>
                                    <TabsTrigger value="account">Track Info</TabsTrigger>
                                    <TabsTrigger value="password">Publishing Info</TabsTrigger>
                                </TabsList>
                                <TabsContent value="account">
                                    <div className="border-solid border-2 p-2">
                                        <ul>
                                            <li><span>Singer</span></li>
                                            <li><span>Other singer:</span></li>
                                            <li><span>Producer:</span></li>
                                            <li><span>Other producer:</span></li>
                                            <li><span>Lyricst:</span></li>
                                        </ul>
                                    </div>

                                </TabsContent>
                                <TabsContent value="password">Change your password here.</TabsContent>
                            </Tabs>
                        </div>

                        {/* <div className={`mt-4 flex  ${Style.socialGroup}`}> */}
                        <div className={`mt-4 flex `}>
                            <Link href={"/"}>
                                <Image src={"/images/image.png"} width={50} height={50} alt='music platfrom' />
                            </Link>
                            <Link href={"/"} className='ms-3'>
                                <Image src={"/images/spotify.png"} width={50} height={50} alt='music platfrom' />
                            </Link>
                        </div>

                    </div>
                </div>

            </div>

            <div className={Style.MusicPlayerBox}>
                {/* <MusicPlayer /> */}
                <div className={Style.MusicPlayercontainer}>

                    <div className={Style.trackControllerButtonGroup}>
                        <i className="bi bi-rewind-fill ms-2"></i>
                        <div className={`mx-5 ${Style.trackControllerMusicPlayRound}`}>
                            <i className="bi bi-play-fill"></i>
                        </div>
                        <i className="me-2 bi bi-fast-forward-fill"></i>
                    </div>


                    <div className={Style.rangeContainer}>
                        <span className='me-3'>3.10</span>
                        <input type="range" name='progress' min="0" max="100" step="1" className={Style.progress} id="myRange" />
                        <span className='ms-3'>1.10</span>
                    </div>

                    <p className={`m-0 ${Style.playingTrack}`}>Track Name</p>


                </div>
            </div>

        </div>

    )
}

export default albums