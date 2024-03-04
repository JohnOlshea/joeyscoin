import React from 'react'
import { Link } from 'react-router-dom'
import { MdExplore } from 'react-icons/md'

import mainNft from '../../assets/images/main-nft.jpg';
import logo from '../../assets/images/logo.png';
import profile from '../../assets/images/profile.jpg';
import creator1 from '../../assets/images/creator1.jpg';

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

      <div className="dashboard-container">

        <div className="large-container">
          <div className="main-container">
            <div className="nft">
              <img src={mainNft} alt="NFT-1" />
            </div>
            <div className="nft-text">
              <div className="creator creator-1 flex-div">
                <img src={creator1} />
                <p>Gigs Pieter</p>
              </div>
              <h1 className="title-nft">Organism Life Art</h1>
              <div className="detail-nft flex-div">
                <div className="current-bid">
                  <p>Current Bid</p>
                  <h1>3,55 ETH</h1>
                  <p>47587,93 USD</p>
                </div>
                <div className="sale-detail">
                  <p>Sale Endings In</p>
                  <h1>67 : 45 : 39</h1>
                  <span>
                    <p>Hours</p>
                    <p>Mins</p>
                    <p>Sec</p>
                  </span>
                </div>
              </div>
              <div className="option-nft flex-div">
                <a href="#"><MdExplore size={25} /></a>
                <div className="button-1">
                  <button>View Art</button>
                </div>
                <div className="button-2">
                  <button>Place a Bid</button>
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>

    </div>
  )
}
