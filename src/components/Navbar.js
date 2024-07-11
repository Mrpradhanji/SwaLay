'use client'
import React, { useContext, useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css"
import Link from 'next/link';
import { apiPost } from '@/helpers/axiosRequest';
import { useRouter } from 'next/navigation';
import UserContext from '@/context/userContext';


const Navbar = () => {

  const router = useRouter()
  const context = useContext(UserContext)

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };


  const onLogout = async () => {

    console.log("click lgout");
    try {
      const res = await apiPost('/api/user/logout')
      console.log(res);
      // router.push('/')
      context.setUser(undefined)
      router.refresh()

    } catch (error) {
      console.log("er");
      console.log(error);
      setTimeout(() => {
        console.log("sdf");
      }, 5000);
    }
    

    

  };



  return (
    <div>
      <header className="header">
        <div className="header__container">
          {/* <img src="assets/img/perfil.jpg" alt="" className="header__img" /> */}

          <a href="/" className="header__logo">SwaLay</a>

          <div className="header__search">
            <input type="search" placeholder="Search" className="header__input" />
            <i className='bx bx-search header__icon'></i>
          </div>

          <div className="header__toggle">
            <i className={`bi ${showMenu ? 'bi-x' : 'bi-list'}`} id="header-toggle" onClick={toggleMenu} ></i>
          </div>
        </div>
      </header>

      {/* <div className="nav " id="navbar"> */}
      <div className={`nav ${showMenu ? 'show-menu' : ''}`} id="navbar">
        <nav className="nav__container">
          <div>
            <a href="/" className="nav__link nav__logo">
              <i className='bx bxs-disc nav__icon' ></i>
              <span className="nav__logo-name">SwaLay</span>
            </a>

            <div className="nav__list">
              <div className="nav__items">

             
                <a href="/" className="nav__link active" onClick={handleLinkClick}>
                  <i className="bi bi-house-door nav__icon"></i>
                  <span className="nav__name">Home</span>
                </a>
                <Link href={"/albums"} className="nav__link " onClick={handleLinkClick}>
                  <i className="bi bi-vinyl nav__icon"></i>
                  <span className="nav__name">Albums</span>
                </Link>
                <a href="/payments" className="nav__link " onClick={handleLinkClick}>
                  <i className="bi bi-cash nav__icon"></i>
                  <span className="nav__name">Payment</span>
                </a>
                <a href="/lyrics" className="nav__link " onClick={handleLinkClick}>
                  <i className="bi bi-music-note-list nav__icon"></i>
                  <span className="nav__name">Lyrics Review</span>
                </a>
                <a href="/copyrights" className="nav__link " onClick={handleLinkClick}>
                  <i className="bi bi-youtube nav__icon"></i>
                  <span className="nav__name ">Copyright</span>
                </a>
                <a href="/lables" className="nav__link " onClick={handleLinkClick}>
                  <i className="bi bi-layers nav__icon"></i>
                  <span className="nav__name">Labels</span>
                </a>
                <a href="/artists" className="nav__link " onClick={handleLinkClick}>
                  <i className="bi bi bi-mic nav__icon"></i>
                  <span className="nav__name">Artist Relocation</span>
                </a>
                <a href="/instagram" className="nav__link " onClick={handleLinkClick}>
                  <i className="bi bi-instagram nav__icon"></i>
                  <span className="nav__name">Instagram</span>
                </a>

                <div className="nav__dropdown">
                  <a href="/profile" className="nav__link">
                    <i className="bi bi-person nav__icon"></i>
                    <span className="nav__name">Profile</span>
                    <i className="bi bi-chevron-down nav__icon nav__dropdown-icon"></i>
                  </a>

                  <div className="nav__dropdown-collapse">
                    <div className="nav__dropdown-content">
                      <a href="/" className="nav__dropdown-item">Passwords</a>
                      <a href="/" className="nav__dropdown-item">Mail</a>
                      <a href="/" className="nav__dropdown-item">Accounts</a>
                    </div>
                  </div>
                </div>

                <a href="/" className="nav__link">
                  <i className='bx bx-message-rounded nav__icon' ></i>
                  <span className="nav__name">Messages</span>
                </a>
              </div>

              {/* <div className="nav__items">
                <h3 className="nav__subtitle">Menu</h3>

                <div className="nav__dropdown">
                  <a href="/" className="nav__link" onClick={handleLinkClick}>
                    <i className='bx bx-bell nav__icon' ></i>
                    <span className="nav__name">Notifications</span>
                    <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                  </a>

                  <div className="nav__dropdown-collapse">
                    <div className="nav__dropdown-content">
                      <a href="/" className="nav__dropdown-item">Blocked</a>
                      <a href="/" className="nav__dropdown-item">Silenced</a>
                      <a href="/" className="nav__dropdown-item">Publish</a>
                      <a href="/" className="nav__dropdown-item">Program</a>
                    </div>
                  </div>

                </div>

                <a href="/" className="nav__link" onClick={handleLinkClick}>
                  <i className='bx bx-compass nav__icon' ></i>
                  <span className="nav__name">Explore</span>
                </a>
                <a href="/" className="nav__link" onClick={handleLinkClick}>
                  <i className='bx bx-bookmark nav__icon' ></i>
                  <span className="nav__name">Saved</span>
                </a>
              </div> */}


            </div>
          </div>

          <div className="nav__link nav__logout" onClick={onLogout}>
            <i className="bi bi-box-arrow-left nav__icon"></i>
            <span className="nav__name">Log Out</span>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar