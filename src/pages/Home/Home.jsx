import React from "react";
import { Helmet } from "react-helmet";
import styles from "../Home/home.module.css";
//Start of Images Import
import Banner1 from "../../assets/Banner1.jpg";
import Banner2 from "../../assets/Banner2.jpg";

//End of Images Import

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home - We're All In Time - WAIT</title>
        <meta name="description" content="Homepage of WAIT Clothing" />
        <meta
          name="keywords"
          content="Home, Wait Clothing, WAIT, We're All in Time"
        />
      </Helmet>

      <main>
        <section className="Hero">
          <div className="carousel-container">
            <ul className={styles.carousel}>
              <li>
                <img src={Banner1} alt="" className={styles.banners} />
              </li>
              {/* <li>
                <img src={Banner2} alt="" className={styles.banners}/>
              </li> */}
            </ul>
          </div>
        </section>

        <section className="Categories">
          <div className={styles.heads}>
            <h1>All Products</h1>
            <div className="shop">
              <a href="">Shop All!</a>
            </div>
          </div>
        </section>

  
      </main>
    </>
  );
}
