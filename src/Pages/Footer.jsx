import React from 'react'
import './CSS/style.css'
function Footer() {
  return (
    <div className='Footer'>
<div class="container mt-5 p-5">
    <div class="row">
      <div class="col-xl-3 col-lg-4 col-md-6">
        <div>
          <h3>Kitchen Set</h3>
          <p class="mb-30 footer-desc">A toy kitchen playset may provide your child with various pretend play opportunities. Choose from creative dinner sets, tea sets, cooking sets, and more. </p>
        </div>
      </div>
      <div class="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
        <div class="">
          <h4>Quick Link</h4>
          <ul class="list-unstyled">
            <li>
              <a href="#" class="text-decoration-none">Home</a>
            </li>
            <li>
              <a href="#" class="text-decoration-none">About Us</a>
            </li>
            <li>
              <a href="#" class="text-decoration-none">Service</a>
            </li>
            <li>
              <a href="#" class="text-decoration-none">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6">
        <div>
          <h4>Service</h4>
          <ul class="list-unstyled">
            <li>
              <a href="#" class="text-decoration-none">Marketing</a>
            </li>
            <li>
              <a href="#" class="text-decoration-none">Branding</a>
            </li>
            <li>
              <a href="#" class="text-decoration-none">Blog Site</a>
            </li>
            <li>
              <a href="#" class="text-decoration-none">Kitchen Stuff</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6">
        <div>
          <h4>Contact Us</h4>
          <div>
            <label for="Newsletter" class="form-label">Subscribe To Our BlogSite</label>
            <input type="text" class="form-control" Placeholder="Enter Your Email"/>
            <button class="btn btn-danger mt-3">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="copyright">
        <p>Developed and maintained by @ Sraboni</p>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Footer