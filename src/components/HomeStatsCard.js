'use client'

import { useContext } from "react"
import Style from "../app/styles/HomeStatsCard.module.css"
import UserContext from "@/context/userContext"

const HomeStatsCard = () => {

  const context = useContext(UserContext);
  let userName = 'Guest'
  if (context && context.user) {
    userName = context.user.username;
  }


  return (
    <div className={Style.statsContainer} >

      <div className={Style.greetContainer}>
        <h1 className={Style.heading}>Welcome, {userName}</h1>
        <p className={Style.para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>

      <div className={Style.statusCardContainer}>
        <div className={Style.statusCard}>
          <div className={Style.statCardDetails}>
            <p className={Style.statNumber}>30</p>
            <p className={Style.statLabel}>Albums</p>
          </div>
          <i className={`bi bi-vinyl ${Style.statIcon}`}></i>
        </div>


        <div className={Style.statusCard}>
          <div className={Style.statCardDetails}>
            <p className={Style.statNumber}>50</p>
            <p className={Style.statLabel}>Tracks</p>
          </div>
          <i className={`bi bi-music-note ${Style.statIcon}`}></i>
        </div>

        <div className={Style.statusCard}>
          <div className={Style.statCardDetails}>
            <p className={Style.statNumber}>10</p>
            <p className={Style.statLabel}>Labels</p>

          </div>
          <i className={`bi bi-person-circle ${Style.statIcon}`}></i>
        </div>

      </div>

    </div>
  )
}

export default HomeStatsCard