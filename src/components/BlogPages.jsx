import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

import post1 from '../assets/images/blog/post1.png'
import post2 from '../assets/images/blog/post2.png'
import post3 from '../assets/images/blog/post3.png'
import post4 from '../assets/images/blog/post4.jpg'
import post5 from '../assets/images/blog/post5.png'
import { Banner } from './Banner'

export const BlogPages = () => {
    return (
        <>
            <section className="blog">
                <div className="container grid-3">
                    <BlogCard title='Ultimate NFT collection' cover={post1} />
                    <BlogCard title='Ultimate NFT collection' cover={post2} />
                    <BlogCard title='Ultimate NFT collection' cover={post3} />
                    <BlogCard title='Ultimate NFT collection' cover={post4} />
                    <BlogCard title='Ultimate NFT collection' cover={post3} />
                    <BlogCard title='Ultimate NFT collection' cover={post5} />
                </div>
            </section>
        </>
    )
}

export const BlogCard = (props) => {
    return (
        <NavLink to='/single-page' className="card">
            <div className="img">
                <img src={props.cover} alt="" />
            </div>
            <h1>{props.title}</h1>
            <button>
                <span className='flex-b-g'>
                    Start using coinroll today <HiOutlineArrowNarrowRight size={25} />
                </span>
            </button>
        </NavLink>
    )
}

export const BlogSinglePages = () => {
    return (
        <section className="blog blogpage">
            <div className="container">
                <div className="card">
                    <div className="img">
                        <img src={post1} alt="Nft blog" />
                    </div>
                    <h1>Awesome NFT Collections - Rare and Exclusive NFTs CARD</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis mollitia, voluptate ratione quibusdam asperiores consequuntur earum cumque, dolore quis, consectetur itaque ab velit facilis tempora aperiam numquam quos sequi accusamus!</p>

                    <h3>We would love to hear from you</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis mollitia, voluptate ratione quibusdam asperiores consequuntur earum cumque, dolore quis, consectetur itaque ab velit facilis tempora aperiam numquam quos sequi accusamus!</p>
                </div>
            </div>
            <Banner />
        </section>
    )
}