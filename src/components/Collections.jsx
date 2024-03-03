import React from 'react'

import covImg1 from './assets/images/covImg1.png'
import covImg2 from './assets/images/covImg2.png'
import covImg3 from './assets/images/covImg3.png'
import userImg1 from './assets/images/authorImg1.png'
import userImg2 from './assets/images/authorImg2.jfif'
import userImg3 from './assets/images/authorImg3.jfif'

export const Collections = () => {
  return (
    <div>
        <section className="collections">
            <div className="container">
                <div className="text">
                    <h2>Trending Collections</h2>
                    <label htmlFor="">Lorem ipsum's donor</label>
                </div>
                <div className="grid-3">
                    <CollectionsCard cover={covImg1} name='Marco Dre' user='_gas0line' img={userImg1} />
                    <CollectionsCard cover={covImg2} name='Marco Dre' user='_gas0line' img={userImg2} />
                    <CollectionsCard cover={covImg3} name='Marco Dre' user='_gas0line' img={userImg3} />
                </div>
            </div>
        </section>
    </div>
  )
}

export const CollectionsCard = (props) => {
  return (
    <div className="card">
        <div className="imgs">
            <div className="img">
                <img src={props.cover} alt="" />
            </div>
            <img className='user' src={props.img} alt="" />
        </div>
        <div className="content">
            <h3>{props.name}</h3>
            <p>{props.user}</p>
        </div>
    </div>
  )
}
