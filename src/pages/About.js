// src/pages/About.js
import React from 'react';

const About = (props) => {
  return (
    <>
      <div class="product-header">
        <div class="flex">
          <a href="/"><span class="las la-angle-left"></span></a>
        </div>
        <div class="categories section-wrapper" style={{backgroundColor: 'lightsalmon'}}>
          <p>
          <h2>VGG16 Image Classifier</h2>
          <small>Hendy A. Setiawan<br/>201843579010</small><br/>&nbsp; &mdash;<br/>
          </p>
          <h2>
          Implementasi Algoritma Convolutional Neural Network Untuk Pengenalan
          Pola Kain Desa Sade Berbasis Web
          </h2>
        </div>
      </div>
      <main>
        <div class="product-details section-wrapper">
          <h3>Dosen Pembimbing</h3>
          <small>2022</small>
          <div class="details">
            <div>
              Ni Wayan Parwati, M.Kom
            </div>
            <div>
              Mei Lestari, M.Kom
            </div>
            <div>
              <span class="las la-star"></span>
              Unindra PGRI, Jakarta
            </div>
          </div>
        </div>
        <div class="product-desc section-wrapper">
            <div class="flex">
                <h3>Details</h3>
            </div>
            <div class="description">
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century</p>
                <ul>
                    <li>Provides more vitamins than Orange</li>
                    <li>High levels of antioxidants</li>
                </ul>
            </div>
        </div>

      </main>
    </>
  )
};

export default About;