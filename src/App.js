import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header'
import Banner from './Components/Banner'
import {About} from './Components/About'
import {Services} from './Components/Services'
import {Portfolio} from './Components/Portfolio'
import {Testimonial} from './Components/Testimonial'
import ContactUs from './Components/ContactUs.js'

function App() {
  return (
    <div>
      <Header Title="Developer Tiago - Analista"/>
      <Banner />     
      <About />      
      <Services />      
      <Portfolio />
      <Testimonial />
      <ContactUs />
      
            
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
