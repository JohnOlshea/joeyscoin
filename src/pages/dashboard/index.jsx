import React from 'react'
import { Link } from 'react-router-dom'
import { MdExplore } from 'react-icons/md'

import logo from '../../assets/images/logo.png';
import profile from '../../assets/images/profile.jpg';

export const Dashboard = () => {
  return (


    <div className="dashboard-wrapper">

      <nav className="our-nav flex-div">
        <div className="nav-icon">
        <MdExplore size={25} />
        </div>
        <div className="nav-left flex-div">
          <div className="search-box flex-div">
            <MdExplore size={25} />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="nav-middle flex-div">
          <div className="amount-eth flex-div">
          <MdExplore size={25} />
            <p>134,78 ETH</p>
          </div>
          <div className="notif flex-div">
            <MdExplore size={25} />
          </div>
        </div>
        <div className="nav-right flex-div">
          <div className="profil flex-div">
            <p>Welcome John Fisher</p>
            <img src={profile} alt="My Profile" />
          </div>
        </div>
      </nav>


      <div className="side-bar">
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>
        <div className="shorcut-links">
          <Link to="/"><MdExplore size={25} /></Link>
        </div>
      </div>


    </div>
  )
}
