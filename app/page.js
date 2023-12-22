"use client";
import styles from "./page.module.css";
import React from "react";
import axios from "axios";
import Image from "next/image";
import Logo from "../components/Logo";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";

export default function Home() {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let response = await axios.get("https://www.jsonkeeper.com/b/MDXW");
      setMenuData(response.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

  console.log(menuData);

  return (
    <main className={styles.main}>
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-12">
            <Logo />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="NavBar">
              <NavBar />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <Carousel />
          </div>
        </div>
        <div className="row text-center mt-5" id="Menu">
          <div className="col-7">
            <h1>Menu</h1>
            <Accordion menuData={menuData} />
          </div>
          <div className="col-5 mt-5">
            <div className="text-center">
              <Image
                src="/img/breakfast-image.jpg"
                alt="breakfast-image"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>
        </div>
        <div className="row my-5" id="About">
          <div className="col-2"></div>
          <div className="col-8 text-center">
            <h1>About Us</h1>
            <h4>
              🌟 Welcome to Brunch.js – where the art of coding meets the
              delight of dining!
            </h4>
            <div>
              As proud locals and former software developers, we&apos;ve
              transformed our passion for writing Javascript code into a unique
              culinary experience. At Brunch.js, we started our journey in the
              digital realm, once software aficionados navigating the intricate
              paths of code. The initial reluctance to embrace React was real,
              but over the years, our evolution has mirrored the growth of this
              powerful technology. Today, we proudly marry our tech-savvy roots
              with the innovation of React to bring you a brunch and breakfast
              haven like no other.
              <h4>Our Origin Story:</h4>
              From Code to Cuisine In the early days, we were immersed in the
              world of 1s and 0s, crafting lines of code that powered digital
              experiences. React, initially a challenge, soon became our trusted
              ally. The more we delved into its intricacies, the more we
              discovered its purpose and unparalleled functionality.
              <h4>Why Brunch.js?</h4>
              Brunch.js is more than just a restaurant; it&apos;s a celebration
              of technology and taste. We&apos;ve taken the best practices from
              our coding days and applied them to our culinary craft. Immerse
              yourself in an atmosphere where the essence of Javascript meets
              the sizzle of a skillet.
              <h4>Our Commitment</h4>
              
              Locally owned and operated, Brunch.js is driven by a commitment to
              quality and innovation. We don&apos;t just serve meals; we curate
              experiences. Each dish is a blend of flavors carefully
              orchestrated, much like the lines of code that once filled our
              screens. Join us on this gastronomic journey where the language of
              React is spoken in both code and cuisine.
              <h5>
                Brunch.js – where every bite tells a story, and every line of
                code is a step towards perfection.
              </h5>
            </div>
          </div>
        </div>
        <h1 className="text-center" id="Contact">
          Contact Us
        </h1>
        <div className="row">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
