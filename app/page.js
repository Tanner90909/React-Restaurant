"use client"
import styles from './page.module.css'
import React from 'react'
import axios from 'axios'
import Logo from '../components/Logo'
import Accordion from '../components/Accordion'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default function Home() {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
  async function fetchData() {
  let response = await axios.get('https://www.jsonkeeper.com/b/MDXW');
  setMenuData(response.data)
  console.log(response.data)
  };
  fetchData()
}, []);

console.log(menuData);

  return (
    <main className={styles.main}>
      <div className='container mt-5'>
        <div className='row text-center'>
          <div className='col-12'>
            <Logo />
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-12'>
            <div className='NavBar'>
              <NavBar />
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-12'>
            <Carousel />
          </div>
        </div>
        <div className='row text-center mt-5' id="Menu">
          <div className='col-7'>
            <h1>Menu</h1>
            <Accordion menuData={menuData}/>
          </div>
          <div className='col-5 mt-5'>
            <div className='text-center'><img src="/img/breakfast-image.jpg" alt="breakfast-image" priority /></div>
          </div>
        </div>
        <div className='row my-5' id="About">
          <div className='col-12 text-center'>
            <h1>About Us</h1>
            <p>Welcome to Brunch.js! We are a locally owned and operated brunch and breakfast Restaurant. 
            We were previously software developers who loved writing code in Javascript and hated learning to code with React. 
            However, now that we have been in business for many years using React we have grown to appreciate its purpose and functionality.</p>
          </div>
        </div>
        <h1 className='text-center' id="Contact">Contact Us</h1>
        <div className='row'>
          <div className='col-12'>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  )
}
