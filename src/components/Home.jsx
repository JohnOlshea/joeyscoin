import React from 'react'
import { BiBitcoin } from 'react-icons/bi'
import { MdExplore } from 'react-icons/md'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

import { SliderContent } from './SliderContent'

import user1 from '../components/assets/images/user-1.jpg'
import user2 from '../components/assets/images/user-2.jpg'
import user3 from '../components/assets/images/user-3.jpg'

export const HomePage = () => {
  return (
    <>
      <Home />
      <SliderContent />
    </>
  )
}

export const Home = () => {
  return (
    <>
      <section className='home'>
        <div className="container">
          <div className="left w-50">
            <h1>
              JoeysCoin <span>NFTs</span> <br />
              Collection. Place
              <br />
              Your First Bid
            </h1>
            <button className='flex-b-g'>
              Start using Coinroll today <HiOutlineArrowNarrowRight size={25} /> </button>
          </div>
          <div className="right">
            <div className="card">
              <div className="flex">
                <div className="user-img">
                  <img src={user1} alt="user" />
                  <img src={user2} alt="" />
                  <img src={user3} alt="" />
                </div>
                <label>1679+ users</label>
              </div>
              <br />
              <h3>$5,020,680</h3>
              <h5>+$1,400,100 +73.5%</h5>
              <div className="flex">
                <BiBitcoin size={25} />
                <MdExplore size={25} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

