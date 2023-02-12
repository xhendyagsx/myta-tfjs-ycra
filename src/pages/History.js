// src/pages/History.js
import React from 'react';

const History = (props) => {
return (
  <>
      <div class="items">
        <h2>&nbsp;</h2>
      </div>
      <main>
        <div class="product-details section-wrapper">
          <h2>History Prediksi</h2>
          <small>Note that the development build is not optimized.</small>
          <div class="details">
            <div>
              <b>Prediction Attempts:</b><br/><h2>83</h2>
            </div>
            <div>
            <b>Avg. Confidence:</b><br/><h2>41%</h2>
            </div>
            <div>
              <span class="las la-star"></span>
              <b>Avg. Pred. Time:</b><br/><h2>5379ms</h2>
            </div>
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
      </main>
  </>
  )
};

export default History;