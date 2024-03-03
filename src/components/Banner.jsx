import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

export const Banner = () => {
  return (
    <>
        <section className="banner">
            <div className="container">
                <div className="box box1">
                    <div className="w-50">
                        <h1>NFT Collectibles - Rare & Exclusive Card NFTs</h1>
                        <button className="flex-b-g">
                            Start using coinroll <HiOutlineArrowNarrowRight />
                        </button>
                    </div>
                </div>
                <div className="boxes flex-b-g">
                    <div className="box box2">
                        <h1>Filter by Type, Artist & Currency</h1>
                        <button className="flex-b-g">
                            Start using coinroll <HiOutlineArrowNarrowRight />
                        </button>
                    </div>
                    <div
                        className="box box3" 
                        style={{display: "flex", flexDirection: "column", backgroundPosition: "bottom", backgroundSize: "cover"}}
                    >
                        <h1>Artists & Bids on a single platform</h1>
                        <button style={{flex: "1", justifyContent: "flex-start", alignItems: "flex-end"}} className="flex-b-g">
                            Start using coinroll <HiOutlineArrowNarrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
