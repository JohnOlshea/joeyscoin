export const PortfolioPage = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <div className="">
            <div class="css-uv97xm">
              <p style={{ color: "#FFFFFF", fontweight: "600" }}>Collections</p>
            </div>
            <p
              style={{
                fontSize: "16px",
                fontweight: "400",
                marginBottom: "2.5rem",
                color: "#9295bf",
              }}
            >
              Discover NFT collections, ranked by Volume and Sales
            </p>
            <div className="">
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  style={{
                    background: "#ffffff25",
                    padding: "0.8rem 3rem 0.8rem 1rem",
                    borderRadius: "1rem",
                    cursor: "pointer",
                  }}
                >
                  Highest Volume
                </button>
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "2.25fr repeat(6, 1fr)", rowGap: "1rem", padding: "1rem 1.5rem", fontWeight: "400", fontSize: "10px", color: "#9295bf", textTransform: "uppercase"}}>
              <p>Collection</p>
              <p>Floor</p>
              <p>Owners</p>
              <p>Items</p>
              <p>Listed</p>
              <p>Sales (7D)</p>
              <p>Volume (7D)</p>
            </div>

            <div>
                <a href="#" style={{transitionProperty: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform", transitionDuration: "150ms", transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1);", cursor: "pointer", textDecoration: "none"}}>
                  <div style={{marginBottom: "1rem", padding: "1.5rem", borderRadius: "1.25rem", background: "#ffffff25", transition: "background-color 150ms ease-in-out 0s"}}>
                    <div style={{ display: "grid", rowGap: "1rem", gridTemplateColumns: "2.25fr repeat(6, 1fr)"}}>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <p style={{ color: "#FFF", fontSize: "14px" }}>
                                104
                            </p>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <p style={{ color: "#FFF", fontSize: "14px" }}>
                                18
                            </p>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <p style={{ color: "#FFF", fontSize: "14px" }}>
                                1000
                            </p>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <p style={{ color: "#FFF", fontSize: "14px" }}>
                                1000
                            </p>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <p style={{ color: "#FFF", fontSize: "14px" }}>
                                1000
                            </p>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <p style={{ color: "#FFF", fontSize: "14px" }}>
                                1000
                            </p>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <p style={{ color: "#FFF", fontSize: "14px" }}>
                                1000
                            </p>
                        </div>
                    </div>
                  </div>
                </a>
                <a href="#" style={{transitionProperty: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform", transitionDuration: "150ms", transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1);", cursor: "pointer", textDecoration: "none"}}>
                  <div style={{marginBottom: "1rem", padding: "1.5rem", borderRadius: "1.25rem", background: "#ffffff25", transition: "background-color 150ms ease-in-out 0s"}}>
                    <div style={{ display: "grid", rowGap: "1rem", gridTemplateColumns: "2.25fr repeat(6, 1fr)"}}>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <p style={{ color: "#FFF", fontSize: "14px" }}>
                                104
                            </p>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <p style={{ color: "#FFF", fontSize: "14px" }}>
                                18
                            </p>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <p style={{ color: "#FFF", fontSize: "14px" }}>
                                1000
                            </p>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <p style={{ color: "#FFF", fontSize: "14px" }}>
                                1000
                            </p>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <p style={{ color: "#FFF", fontSize: "14px" }}>
                                1000
                            </p>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <p style={{ color: "#FFF", fontSize: "14px" }}>
                                1000
                            </p>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <p style={{ color: "#FFF", fontSize: "14px" }}>
                                1000
                            </p>
                        </div>
                    </div>
                  </div>
                </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
