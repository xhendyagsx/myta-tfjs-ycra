// src/pages/Home.js
import React from 'react';

const Home = (props) => {
    return (
      <>
      <div class="items">
        <h2>&nbsp;</h2>
      </div>
      <main>
        <div class="product-details section-wrapper">
          <div class="details">
            <div>
              <br/>
              <h1>wastra&nbsp;&nbsp;</h1>
              <br/>
            </div>
            <div>
              <p align='left'>
              wastra merupakan bahasa Sansekerta dari kata kain dalam bahasa Indonesia.
              </p>
            </div>
          </div>
          <div class="items">
            <div class="item">
              <div class="item-img" style={{backgroundColor: 'lightgrey'}}></div>
                <h4>Batang Empat</h4>
            </div>
            <div class="item">
              <div class="item-img" style={{backgroundColor: 'lightgrey'}}></div>
                <h4>Kembang Komak</h4>
              </div>
            <div class="item">
              <div class="item-img" style={{backgroundColor: 'lightgrey'}}></div>
                <h4>Ragi Genep</h4>
            </div>
            <div class="item">
              <div class="item-img" style={{backgroundColor: 'lightgrey'}}></div>
                <h4>Selolot</h4>
            </div>
            <div class="item">
              <div class="item-img" style={{backgroundColor: 'lightgrey'}}></div>
                <h4>Tapok Kamalo</h4>
            </div>
          </div>
        </div>
        <div class="promo">
      <div class="items promo-items">
        <div class="promo-item" style={{backgroundColor: 'lightgrey'}}>
          <div class="promo-img" style={{backgroundColor: 'white', borderRadius: '15px 35px'}}></div>
          <div class="promo-info">
            <h3>30% Discount</h3>
            <p>Order on app and get discount</p>
            <a href="/">Get app now!</a>
          </div>
        </div>
        <div class="promo-item" style={{backgroundColor: 'lightgrey'}}>
          <div class="promo-img" style={{backgroundColor: 'white', borderRadius: '15px 35px'}}></div>
          <div class="promo-info">
            <h3>30% Discount</h3>
            <p>Order on app and get discount</p>
            <a href="/">Get app now!</a>
          </div>
        </div>
      </div>
    </div>

    <div class="promo">
      <div class="flex-header">
        <h3>Popular deals</h3>
        <a href="/">See all</a>
      </div>
      <div class="items">
        <div class="popular-item">
          <div class="popular-img" style={{backgroundColor: 'lightgrey'}}></div>
        </div>
        <div class="popular-item">
          <div class="popular-img" style={{backgroundColor: 'lightgrey'}}></div>
        </div>
        <div class="popular-item">
          <div class="popular-img" style={{backgroundColor: 'lightgrey'}}></div>
        </div>
        <div class="popular-item">
          <div class="popular-img" style={{backgroundColor: 'lightgrey'}}></div>
        </div>
      </div>

      <div class="product-desc section-wrapper">
            <div class="flex">
                <h3>History</h3>
            </div>
            <div class="description" style={{backgroundColor: 'lightgrey'}}>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in 
                    laying out print, graphic or web designs. The passage is attributed to 
                    an unknown typesetter in the 15th century
                </p>
                <ul>
                    <li>Provides more vitamins than Orange</li>
                    <li>High levels of antioxidants</li>
                </ul>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum. Consectetur adipisicing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
      </div>

      </div>
      </main>


  </>
)
};

export default Home;