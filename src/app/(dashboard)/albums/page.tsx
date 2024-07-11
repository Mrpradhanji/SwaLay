import React from 'react'
// import Style from '../'
import Style from '../../styles/Albums.module.css'


// import MusicPlayer from './components/MusicPlayer'
import NewReleaseItem from './components/NewReleaseItem'
import MusicListItem from './components/MusicListItem'
// import DataTableUi from '../components/DataTable'

const albums = () => {
    return (
        <div className=' w-100'>
            <div className={Style.topbar}>
                <div className={Style.tagLineBox}>
                    <p className={Style.titleLabel}>Swalay Talent on core</p>
                    <p className={Style.taglineLabel}>Swalay Talent on core Tag line for music for indepent artist</p>
                </div>
                <div className={Style.exportBtnGroup}>
                    <button className={`me-2 ${Style.ytExportButton}`}><i className={`bi bi-youtube ${Style.youtubeIcon} me-1`}></i> Exports</button>
                    <button className={`me-2 ${Style.importButton}`}> Exports</button>
                    <button className={Style.importButton}>+ Add New Album</button>
                </div>

            </div>

            {/* new releases  */}
            <div className={`mt-3 mb-3 ${Style.newReleseContainer}`}>
                <div className={` mb-3 ${Style.spaceBetween}`}>
                    <h3 className={Style.titleHeading}>New releases</h3>
                    <div className={Style.slideController}>
                        <i className="bi bi-chevron-left mr-3"></i>
                        <i className="bi bi-chevron-right"></i>
                    </div>
                </div>
                <div className={Style.albumContainer}>
                    {/* <NewReleaseItem imageSrc={'/images/album2.jpg'} albumName={"album n"}/> */}
                    <NewReleaseItem imageSrc={'/images/album3.jpg'} albumName={"Pain"} albumArtist="Ryan Jones" />
                    <NewReleaseItem imageSrc={'/images/album4.jpg'} albumName={"Paradise"} albumArtist="Max jack" />
                    <NewReleaseItem imageSrc={'/images/album5.jpg'} albumName={"Ocen"} albumArtist="Brandon Johns" />
                    <NewReleaseItem imageSrc={'/images/album6.webp'} albumName={"Headin to the sky"} albumArtist="lone wolf" />
                    <NewReleaseItem imageSrc={'/images/album7.jpg'} albumName={"Trap Remix"} albumArtist="Dj Bablu" />
                    <NewReleaseItem imageSrc={'/images/album8.jpg'} albumName={"Moutain"} albumArtist="Snow Leapord" />
                    <NewReleaseItem imageSrc={'/images/album9.jpeg'} albumName={"Hiraeth"} albumArtist="uchiha madara" />
                    
                </div>
            </div>

            {/* all music list  */}

            <div className={` mt-3 ${Style.musicListContainer}`}>
                <div className={` mb-3 ${Style.spaceBetween}`}>
                    <h3 className={Style.titleHeading}>All releases</h3>
                    <div className={Style.slideController}>
                        <i className="bi bi-sort-alpha-down mr-3"></i>
                        <i className="bi bi-sort-alpha-down-alt"></i>
                    </div>
                </div>

                <div className={Style.musicList}>

                    <MusicListItem srno={1} albumName={"Pain"} singer={"Ryan Jones"} totalTrack={1} status={"live"} />
                    <MusicListItem srno={2} albumName={"Ocen"} singer={"Bradon jhons"} totalTrack={2} status={"submitted"} />
                    <MusicListItem srno={3} albumName={"Moutian"} singer={"Snow leapord"} totalTrack={1} status={"processing"} />
                    <MusicListItem srno={3} albumName={"Paradise"} singer={"Max jack"} totalTrack={1} status={"rejected"} />

                </div>


            </div>

        
            

            {/* ui design  */}
            {/* https://dribbble.com/shots/17297650-Myuzige-Music-Streaming-Dashboard */}

        </div>

    )
}

export default albums