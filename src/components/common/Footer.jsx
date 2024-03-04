import React from 'react'
import { BsApple } from 'react-icons/bs'
import { AiOutlineGoogle } from 'react-icons/ai'

import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="container flex-b">
                    <div className="left">
                        <div className="logo">
                            <img src={logo} alt="Coinroll" />
                        </div>
                        <h5>Download app for FREE</h5>
                        <div className="app flex">
                            <div className="box flex">
                                <div>
                                    <BsApple />
                                </div>
                                <div className="text flex">
                                    <span></span>
                                    <label htmlFor="">App store</label>
                                </div>
                            </div>
                            <div className="box flex">
                                <div>
                                    <AiOutlineGoogle />
                                </div>
                                <div className="text flex">
                                    <span></span>
                                    <label htmlFor="">Play store</label>
                                </div>
                            </div>
                        </div>
                        <label className="info" htmlFor="">*Currently Available In The U.S. And Canada</label>
                    </div>
                    <div className="right">
                        <h3>🖐️ We Would Like To Be In Touch.</h3>
                        <ul className="grid-4">
                            <li>
                                <h4>Discover</h4>
                                <NavLink to='#'>Contact</NavLink>
                                <NavLink to='#'>Portfolio</NavLink>
                                <NavLink to='#'>Blog</NavLink>
                                <NavLink to='#'>Our Team </NavLink>
                            </li>
                            <li>
                                <h4>Discover</h4>
                                <NavLink to='#'>Contact</NavLink>
                                <NavLink to='#'>Portfolio</NavLink>
                                <NavLink to='#'>Blog</NavLink>
                                <NavLink to='#'>Our Team </NavLink>
                            </li>
                            <li>
                                <h4>Discover</h4>
                                <NavLink to='#'>Contact</NavLink>
                                <NavLink to='#'>Portfolio</NavLink>
                                <NavLink to='#'>Blog</NavLink>
                                <NavLink to='#'>Our Team </NavLink>
                            </li>
                            <li>
                                <h4>Discover</h4>
                                <NavLink to='#'>Contact</NavLink>
                                <NavLink to='#'>Portfolio</NavLink>
                                <NavLink to='#'>Blog</NavLink>
                                <NavLink to='#'>Our Team </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
