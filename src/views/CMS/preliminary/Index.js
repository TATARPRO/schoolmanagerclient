import React from 'react'
import { Link } from 'react-router-dom'
import one from '../../../img/hero-slider/1.jpg'
import two from '../../../img/hero-slider/2.jpg'
import service1 from '../../../img/services-icons/1.png'
import service2 from '../../../img/services-icons/2.png'
import service3 from '../../../img/services-icons/3.png'
import service4 from '../../../img/services-icons/4.png'
import service5 from '../../../img/services-icons/5.png'
import service6 from '../../../img/services-icons/6.png'
import enrollBg from '../../../img/enroll-bg.jpg'
import encroll from '../../../img/encroll-img.jpg'
//import factBg from '../../../img/fact-bg.jpg'
import event1 from '../../../img/event/1.jpg'
import event2 from '../../../img/event/2.jpg'
import blog1 from '../../../img/blog/1.jpg'
import blog2 from '../../../img/blog/2.jpg'
import blog3 from '../../../img/blog/3.jpg'
import blog4 from '../../../img/blog/4.jpg'
const Home = () => {
    return (
        <>
            <section className="hero-section">
                <div className="hero-slider owl-carousel">
                    <div className="hs-item set-bg" data-setbg="../../img/hero-slider/1.jpg">
                        <div className="hs-text">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="hs-subtitle">Award Winning Institute</div>
                                        <h2 className="hs-title">An investment in knowledge pays the best interest.</h2>
                                        <p className="hs-des">Education is not just about going to school and getting a degree. It's about widening your<br /> knowledge and absorbing the truth about life. Knowledge is power.</p>
                                        <div className="site-btn">GET STARTED</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hs-item set-bg" data-setbg="../../img/hero-slider/2.jpg">
                        <div className="hs-text">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="hs-subtitle">Award Winning Institute</div>
                                        <h2 className="hs-title">An investment in knowledge pays the best interest.</h2>
                                        <p className="hs-des">Education is not just about going to school and getting a
                                         degree. It's about widening your<br /> knowledge and absorbing the truth about life. Knowledge is power.</p>
                                        <div className="site-btn">GET STARTED</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="counter-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-6">
                            <div class="big-icon">
                                <i class="fa fa-graduation-cap"></i>
                            </div>
                            <div class="counter-content">
                                <h2>ADMISSIONS: Admissions into first year in progress</h2>
                                <p><i class="fa fa-calendar-o"></i>08:00 PM - 02:00 PM</p>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-6">
                            <div class="counter">
                                <div class="counter-item"><h4>20th</h4></div>
                                <div class="counter-item"><h4>August</h4></div>
                                <div class="counter-item"><h4>2020</h4></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-section spad">
                <div className="container services">
                    <div className="section-title text-center">
                        <h3>Mind Picks</h3>
                        <p>We provides the opportunity to prepare for life through a variety of studies</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 service-item">
                            <div className="service-icon">
                                <img src={service1} alt="1" />
                            </div>
                            <div className="service-content">
                                <h4>Arts</h4>
                                <p>Arts have been life's endowment to man. In its unique way, we believed our students have
                                such endowments also which they would like to express to the world.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 service-item">
                            <div className="service-icon">
                                <img src={service2} alt="2" />
                            </div>
                            <div className="service-content">
                                <h4>Business</h4>
                                <p>Logical flow and business activities have become the order of the day in our today's world
                                We believe this is the culture of man. Our students should not be left behind either.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 service-item">
                            <div className="service-icon">
                                <img src={service3} alt="3" />
                            </div>
                            <div className="service-content">
                                <h4>Science</h4>
                                <p>One of the most fascinating things about man is its interpretation to things. These life
                                changing inventions and theories keep our world at its peak of creation.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 service-item">
                            <div className="service-icon">
                                <img src={service4} alt="1" />
                            </div>
                            <div className="service-content">
                                <h4>Science and Technology</h4>
                                <p>We use technology everyday, technology is application of science. Technology has changed
                                 the world leaving remarkable landmarks which will live for ages.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 service-item">
                            <div className="service-icon">
                                <img src={service5} alt="5" />
                            </div>
                            <div className="service-content">
                                <h4>Sports and athletics</h4>
                                <p>Who doesn't love sports? Children love it; adults love it. Sports are a way of keeping the body
                                 fresh and active.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 service-item">
                            <div className="service-icon">
                                <img src={service6} alt="6" />
                            </div>
                            <div className="service-content">
                                <h4>Basic Elementaries</h4>
                                <p>Basic elementaries, social wares and promotions are what makes up life. Nutrition, Agriculture,
                                Life saving skills; self surving skills are a boost to our mental reasoning.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="enroll-section spad set-bg" style={{
                backgroundImage: `url(${enrollBg})`
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-title text-white">
                                <h3>ENROLLMENT</h3>
                                <p>Get started with us to explore our exciting environment</p>
                            </div>
                            <div className="enroll-list text-white">
                                <div className="enroll-list-item">
                                    <span>1</span>
                                    <h5>Contact</h5>
                                    <p>Send us a note indicating your interes to enroll your child.</p>
                                </div>
                                <div className="enroll-list-item">
                                    <span>2</span>
                                    <h5>Consulting</h5>
                                    <p>Receive best offers deals and advices from our board about our modulations.</p>
                                </div>
                                <div className="enroll-list-item">
                                    <span>3</span>
                                    <h5>Register</h5>
                                    <p>That's all. Get a form and begin registering your child.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1 p-lg-0 p-4">
                            <img src={encroll} alt="encroll" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="event-section spad">
                <div className="container">
                    <div className="section-title text-center">
                        <h3>OUR EVENTS</h3>
                        <p>Our School initiated a series of events</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 event-item">
                            <div className="event-thumb">
                                <img src={event1} alt="e1" />
                                <div className="event-date">
                                    <span>24 May 2020</span>
                                </div>
                            </div>
                            <div className="event-info">
                                <h4>The dos and don'ts of writing a personal<br />statement for languages</h4>
                                <p><i className="fa fa-calendar-o"></i> 08:00 AM - 10:00 AM <i className="fa fa-map-marker"></i> Center Building, Block A</p>
                                <Link to="/event-detail" className="event-readmore">REGISTER <i className="fa fa-angle-double-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-6 event-item">
                            <div className="event-thumb">
                                <img src={event2} alt="e2" />
                                <div className="event-date">
                                    <span>22 May 2020</span>
                                </div>
                            </div>
                            <div className="event-info">
                                <h4>School interview tips:<br />confidence won't make up for flannel</h4>
                                <p><i className="fa fa-calendar-o"></i> 08:00 AM - 10:00 AM <i className="fa fa-map-marker"></i> Center Building, Block A</p>
                                <Link to="enroll-course" className="event-readmore">REGISTER <i className="fa fa-angle-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-section spad">
                <div className="container">
                    <div className="section-title text-center">
                        <h3>LATEST NEWS</h3>
                        <p>Get latest breaking news & top stories today from our blog</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="blog-item">
                                <div className="blog-thumb set-bg" style={{
                                    backgroundImage: `url(${blog1})`
                                }}></div>
                                <div className="blog-content">
                                    <h4>Parents who try to be their children’s best friends</h4>
                                    <div className="blog-meta">
                                        <span><i className="fa fa-calendar-o"></i> 24 Mar 2020</span>
                                        <span><i className="fa fa-user"></i> Mike Nelson</span>
                                    </div>
                                    <p>Family relations have to go a long way from communication, one of our students
                                    argues. Parents have to recognize their emine.....</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="blog-item">
                                <div className="blog-thumb set-bg" style={{
                                    backgroundImage: `url(${blog2})`
                                }}></div>
                                <div className="blog-content">
                                    <h4>Graduations could be delayed as external examiners</h4>
                                    <div className="blog-meta">
                                        <span><i className="fa fa-calendar-o"></i> 23 Mar 2020</span>
                                        <span><i className="fa fa-user"></i> Ako Tavershima</span>
                                    </div>
                                    <p>This year's pandemic have reshaped the way we do things. Speaking the chairman
                                    NECO, he stated to us that examinations could hold as of.....</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="blog-item">
                                <div className="blog-thumb set-bg" style={{
                                    backgroundImage: `url(${blog3})`
                                }}></div>
                                <div className="blog-content">
                                    <h4>Private schools adopt a Hallmarks' application system</h4>
                                    <div className="blog-meta">
                                        <span><i className="fa fa-calendar-o"></i> 24 Mar 2020</span>
                                        <span><i className="fa fa-user"></i> Dean Beauty</span>
                                    </div>
                                    <p>As a conerstone for excellence, we erupted a new way of school applications
                                    which have been adopted like wide-fire. The system .....</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="blog-item">
                                <div className="blog-thumb set-bg" style={{
                                    backgroundImage: `url(${blog4})`
                                }}></div>
                                <div className="blog-content">
                                    <h4>Hallmark digs in at the top of All Sec. league table</h4>
                                    <div className="blog-meta">
                                        <span><i className="fa fa-calendar-o"></i> 23 Mar 2020</span>
                                        <span><i className="fa fa-user"></i> Shenge Raphael</span>
                                    </div>
                                    <p>Since the beginning of the All Secondary School Games (AllSec), our school
                                    has been at the top of the league table with a wide point range....</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </>
    )
}
export default Home;

