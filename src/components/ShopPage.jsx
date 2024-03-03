import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import nft10 from "./assets/images/nft10.jpg";
import post1 from "./assets/images/blog/post1.png";
import post2 from "./assets/images/blog/post2.png";
import post3 from "./assets/images/blog/post3.png";
import post4 from "./assets/images/blog/post4.jpg";
import post5 from "./assets/images/blog/post5.png";

import shopBanner from "./assets/images/shop-banner.avif";

export const ShopPage = () => {
  return (
    <>
      <section style={{margin: "80px 0"}}>
        <div className="container">
          <div className="css-ef717n">
            <img
              style={{ borderRadius: "1rem", verticalAlign: "top" }}
              src={shopBanner}
              alt="Shop banner"
            />
          </div>

          <div style={{margin: "2rem 0"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <img src={nft10} style={{width: "5.5rem", height: "5.5rem", borderRadius: "0.3rem", objectFit: "cover"}} alt="" />
                    <div style={{marginLeft: "1rem"}}>
                        <p style={{fontSize: "14px", color: "#9295bf"}}>FEATURED LAUNCH</p>
                        <h2 style={{color: "#fff", fontSize: "33px", fontWeight: "500"}}>Voidcaller</h2>
                    </div>
                </div>
                <button className="btn" style={{display: "flex", alignItems: "center", cursor: "pointer", border: "1px solid #ffffff38", borderRadius: "1rem", height: "54px", padding: "0 1.5rem"}}>
                    <span style={{marginRight: "0.8rem"}}>View Launch</span> <HiOutlineArrowNarrowRight size={25} />
                </button>
            </div>
          </div>

          <div style={{marginBottom: "2rem"}}>
            <div style={{display: "flex", alignItems: "center"}}>
              <div style={{padding: "0px 1rem", height: "3rem", color: "#fff", display: "flex", alignItems: "center"}}>All</div>
              <div style={{padding: "0px 1rem", height: "3rem", color: "#9295bf", display: "flex", alignItems: "center"}}>
                Live 1
              </div>
              <div style={{padding: "0px 1rem", height: "3rem", color: "#9295bf", display: "flex", alignItems: "center"}}>
                Upcoming 1
              </div>
              <div style={{padding: "0px 1rem", height: "3rem", color: "#9295bf", display: "flex", alignItems: "center"}}>
                Released 23
              </div>
            </div>
          </div>
        </div>
        <div className="container grid-3">
          
          <ShopCard cover={post1} />
          <ShopCard cover={post2} />
          <ShopCard cover={post3} />
          <ShopCard cover={post4} />
          <ShopCard cover={post5} />
          
        </div>
      </section>
    </>
  );
};

export const ShopCard = ({cover}) => {
  return (
    <>
          <Link to="/single-page" className="shop-card" style={{borderRadius: "0.7rem", cursor: "pointer", overflow: "hidden"}}>
            <div className="shop-card_image" style={{display: "flex", overflow: "hidden"}}>
                <img src={cover} alt="" />
            </div>
            <div className="shop-card_content">
                <div>
                    <p style={{color: "#fff"}}>Chuck NFT</p>
                    <p style={{color: "#fff", fontSize: "14px"}}>
                        <span style={{color: "#9295bf"}}>Launching</span> Feb 8, 8:00 PM
                    </p>
                </div>
                <div>
                    <span style={{color: "#fff", fontSize: "12px", border: "1px solid #ffffff38", borderRadius: "0.5rem", padding: "0.5rem 1rem"}}>1 day 8 hours</span>
                </div>
            </div>
          </Link>
    </>
  )
}
