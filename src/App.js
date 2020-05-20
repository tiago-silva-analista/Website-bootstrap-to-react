import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header'
import Banner from './Components/Banner'
import {About} from './Components/About'
import {Services} from './Components/Services'
import {Portfolio} from './Components/Portfolio'
import {Testimonial} from './Components/Testimonial'

function App() {
  return (
    <div>
      <Header Title="Developer Tiago - Analista"/>
      <Banner />     
      <About />      
      <Services />      
      <Portfolio />
      <Testimonial />

      <section id="Contact" class="content-section">
        <div class="container">
          <div class="block-heading">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="contact-wrapper">
                <div class="address-block border-bottom">
                  <h3 class="add-title">Headquaters</h3>
                  <div class="c-detail">
                    <span class="c-icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span><span class="c-info">&nbsp;35 Street - Cheyenne, CO 80810</span>
                  </div>
                  <div class="c-detail">
                    <span class="c-icon"><i class="fa fa-phone" aria-hidden="true"></i></span><span class="c-info">+123 4567 898</span>
                  </div>
                  <div class="c-detail">
                    <span class="c-icon"><i class="fa fa-envelope" aria-hidden="true"></i></span><span class="c-info">email@yourdomain.com</span>
                  </div>
                </div>
                <div class="address-block">
                  <h3 class="add-title">Branch</h3>
                  <div class="c-detail">
                    <span class="c-icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span><span class="c-info">&nbsp;98 Berry - Cheyenne, CO 80810</span>
                  </div>
                  <div class="c-detail">
                    <span class="c-icon"><i class="fa fa-phone" aria-hidden="true"></i></span><span class="c-info">+123 4567 8987</span>
                  </div>
                  <div class="c-detail">
                    <span class="c-icon"><i class="fa fa-envelope" aria-hidden="true"></i></span><span class="c-info">email@yourdomain.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="form-wrap">
                <form action="javascript:void(0)" method="post">
                  <div class="fname floating-label">
                    <input type="text" class="floating-input" name="full name" />
                    <label for="title">First Name</label>
                  </div>
                  <div class="fname floating-label">
                    <input type="text" class="floating-input" name="full name" />
                    <label for="title">Last Name</label>
                  </div>
                  <div class="email floating-label">
                    <input type="email" class="floating-input" name="email" />
                    <label for="email">Email</label>
                  </div>
                  <div class="contact floating-label">
                    <input type="tel" class="floating-input" name="contact" />
                    <label for="email">Mobile</label>
                  </div>
                  <div class="company floating-label">
                    <textarea type="text" class="floating-input" name="company" />
                    <label for="email">Message</label>
                  </div>
                  <div class="submit-btn">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer text-center">
        <div class="container">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a class="social-link rounded-circle text-white mr-3" href="javascript:void(0)">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="social-link rounded-circle text-white mr-3" href="javascript:void(0)">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="social-link rounded-circle text-white" href="javascript:void(0)">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <p class="text-muted small mb-0">Copyright © Your Website 2018</p>
          <p class="text-muted small mb-0">Designed by <a href="https://www.position2.com/" target="_balnk">Position2</a></p>
        </div>
      </footer>


    </div>

  );
}

export default App;
