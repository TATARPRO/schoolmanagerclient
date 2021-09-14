import React from 'react'
import { Link } from 'react-router-dom'
import logoLight from '../../img/logo-light.png'

const HomeFooter = () => {
	return (
		<>

			<section className="newsletter-section">
				<div className="container">
					<div className="row">
						<div className="col-md-5 col-lg-7">
							<div className="section-title mb-md-0">
								<h3>NEWSLETTER</h3>
								<p>Subscribe and get the latest news and useful tips, advice and best offer.</p>
							</div>
						</div>
						<div className="col-md-7 col-lg-5">
							<form className="newsletter">
								<input type="text" placeholder="Enter your email" />
								<button className="site-btn">SUBSCRIBE</button>
							</form>
						</div>
					</div>
				</div>
			</section>

		<footer className="footer-section">
			<div className="container footer-top">
				<div className="row">

					<div className="col-sm-6 col-lg-3 footer-widget">
						<div className="about-widget">
							<img src={logoLight} alt="logo-light" />
							<p>Our mission is to transform minds with the target of an asteroid.</p>
							<div className="social pt-1">
								<a href="https://www.twitter.com/hallmark" target="_blank"><i className="fa fa-twitter-square"></i></a>
								<a href="https://www.facebook.com/hallmark" target="_blank"><i className="fa fa-facebook-square"></i></a>
								<a href="https://www.googleplus.com/hallmark" target="_blank"><i className="fa fa-google-plus-square"></i></a>
								<a href="https://www.linkedin.com/in/hallmark" target="_blank"><i className="fa fa-linkedin-square"></i></a>
								<a href="https://www.twitter.com/hallmark" target="_blank"><i className="fa fa-rss-square"></i></a>
							</div>
						</div>
					</div>

					<div className="col-sm-6 col-lg-3 footer-widget">
						<h6 className="fw-title">USEFUL LINK</h6>
						<div className="dobule-link">
							<ul>
								<li><Link to="/index">Home</Link></li>
								<li><Link to="/about-us">About us</Link></li>
								<li><Link to="/recent-events">Events</Link></li>
									<li><Link to="/gallery">Gallery</Link></li>
							</ul>
							<ul>
								<li><Link to="/admissions">Admissions</Link></li>
								<li><Link to="/newsletter">Newsletter</Link></li>
								<li><Link to="/help">Help</Link></li>
								<li><Link to="/faq">FAQs</Link></li>
							</ul>
						</div>
					</div>

					<div className="col-sm-6 col-lg-3 footer-widget">
						<h6 className="fw-title">RECENT POST</h6>
						<ul className="recent-post">
							<li>
								<p>Snackable study:How to break <br /> up your school's work</p>
								<span><i className="fa fa-clock-o"></i>24 Mar 2020</span>
							</li>
							<li>
								<p>Hallmark plans major <br /> cuts to number of staff</p>
								<span><i className="fa fa-clock-o"></i>24 Mar 2020</span>
							</li>
						</ul>
					</div>

					<div className="col-sm-6 col-lg-3 footer-widget">
						<h6 className="fw-title">CONTACT</h6>
						<ul className="contact">
							<li><p><i className="fa fa-map-marker"></i> 40 Baria Street 133/2, Gboko - Benue, Nigeria</p></li>
							<li><p><i className="fa fa-phone"></i> (+234) 810 555 666</p></li>
							<li><p><i className="fa fa-envelope"></i> info@hallmark.com</p></li>
							<li><p><i className="fa fa-clock-o"></i> Monday - Friday, 08:00AM - 02:00 PM</p></li>
						</ul>
					</div>
				</div>
			</div>

			<div className="copyright">
				<div className="container">
					<p>
						Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved <a href="https://www.pultri.com" target="_blank">Pultri</a>
					</p>
				</div>
			</div>
		</footer>
	</>
		)
}
export default HomeFooter;