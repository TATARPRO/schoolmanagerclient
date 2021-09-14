import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <div class="site-breadcrumb">
        <div class="container">
          <Link to="/index"><i class="fa fa-home"></i> Home</Link> <i class="fa fa-angle-right"></i>
          <span>Contact</span>
        </div>
      </div>

      <section class="contact-page spad pt-0">
        <div class="container">
          <div class="map-section">
            <div class="contact-info-warp">
              <div class="contact-info">
                <h4>Address</h4>
                <p>40 Baria Street 133/2, Gboko - Benue, Nigeria</p>
              </div>
              <div class="contact-info">
                <h4>Phone</h4>
                <p>(+234) 816 555 666</p>
              </div>
              <div class="contact-info">
                <h4>Email</h4>
                <p>info@hallmark.com</p>
              </div>
              <div class="contact-info">
                <h4>Working time</h4>
                <p>Monday - Friday: 08 AM - 02 PM</p>
              </div>
            </div>

            <div class="map" id="map-canvas"></div>
          </div>
          <div class="contact-form spad pb-0">
            <div class="section-title text-center">
              <h3>GET IN TOUCH</h3>
              <p>Contact us for best offers and child support</p>
            </div>
            <form class="comment-form --contact">
              <div class="row">
                <div class="col-lg-4">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div class="col-lg-4">
                  <input type="text" placeholder="Your Email" />
                </div>
                <div class="col-lg-4">
                  <input type="text" placeholder="Subject" />
                </div>
                <div class="col-lg-12">
                  <textarea placeholder="Message"></textarea>
                  <div class="text-center">
                    <button class="site-btn">SUBMIT</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact;