import React from 'react'

import authorImg1 from '../components/assets/images/authorImg1.png'
import authorImg2 from '../components/assets/images/authorImg2.jfif'
import authorImg3 from '../components/assets/images/authorImg3.jfif'

export const TrendingAuthor = () => {
  return (
    <div>
        <section className="author">
            <div className="container">
                <h2>Trending Author</h2>
                <br />
                <br />
                <br />
                <div className="grid-3">
                    <TrendingAuthorCard img={authorImg1} name='@YungKwin' />
                    <TrendingAuthorCard img={authorImg2} name='@MorisCat' />
                    <TrendingAuthorCard img={authorImg3} name='@Dunkam' />
                </div>
            </div>
        </section>
    </div>
  )
}

export const TrendingAuthorCard = ({img, name}) => {
  return (
    <div className="card">
        <div className="img">
            <img src={img} alt="Trending author" />
        </div>
        <label htmlFor="">{name}</label>
    </div>
  )
}
