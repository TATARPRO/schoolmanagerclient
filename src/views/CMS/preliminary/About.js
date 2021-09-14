import React from 'react'
import { Link } from 'react-router-dom'
import imgAbout from '../../../img/about.jpg'
import member1 from '../../../img/member/1.jpg'
import member2 from '../../../img/member/2.jpg'
import member3 from '../../../img/member/3.jpg'
import member4 from '../../../img/member/4.jpg'
import member5 from '../../../img/member/5.jpg'

const About = () => {
   
    return (
        <>
            <div class="site-breadcrumb">
                <div class="container">
                    <Link to="/index"><i class="fa fa-home"></i> Home</Link> <i class="fa fa-angle-right"></i>
                    <span>About Us</span>
                </div>
            </div>

            <section class="about-section spad pt-0">
                <div class="container">
                    <div class="section-title text-center">
                        <h3>WELCOME TO HALLMARK</h3>
                        <p>Let children LIVE creative and make a difference</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 about-text">
                            <h5>About us</h5>
                            <p>Lorem ipsum dolor sitdoni amet, consectetur dont adipis elite. Vivamus interdum ultrices augue. Aenean dos cursus lania. Duis et fringilla leonardo. Mauris mattis phare sem, debut curus risus viverra sed.</p>
                            <h5 class="pt-4">Our history</h5>
                            <p>Led at felis arcu. Integer lorem lorem, tincidunt eu congue et, mattis ut ante. Nami suscipit, lectus id efficitur ornare, leo libero convalis nulla, vitae dignissim .</p>
                            <ul class="about-list">
                                <li><i class="fa fa-check-square-o"></i> University Faculties organise teaching and research into individual subjects.</li>
                                <li><i class="fa fa-check-square-o"></i> The University is rich in history - its famous buildings attract visitors.</li>
                                <li><i class="fa fa-check-square-o"></i> 50 years of people, and achievements that continue to transform.</li>
                                <li><i class="fa fa-check-square-o"></i> The University's core values are as follows:freedom of thought.</li>
                            </ul>
                        </div>
                        <div class="col-lg-6 pt-5 pt-lg-0">
                            <img src={imgAbout} alt="about" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="testimonial-section spad">
                <div class="container">
                    <div class="testimonial-slider owl-carousel">
                        <div class="ts-item">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="ts-author-pic set-bg" style={{
                                            backgroundImage: `url(${member5})`
                                        }}></div>
                                </div>
                                <div class="col-md-9 ts-text">
                                    <p>“ I want to let you know that I am very absolutely delighted with the course in every respect. It has been particularly pleasing for me, with an interest in seeing the application and good educational practice to school education. Learn a different approach that leads to better outcomes. ”</p>
                                    <h5>Mr. Peter Crough</h5>
                                    <span>Student’s Parent</span>
                                </div>
                            </div>
                        </div>
                        <div class="ts-item">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="ts-author-pic set-bg" style={{
                                            backgroundImage: `url(${member5})`
                                        }}></div>
                                </div>
                                <div class="col-md-9 ts-text">
                                    <p>“ I want to let you know that I am very absolutely delighted with the course in every respect. It has been particularly pleasing for me, with an interest in seeing the application and good educational practice to school education. Learn a different approach that leads to better outcomes. ”</p>
                                    <h5>Mr. Peter Crough</h5>
                                    <span>Student’s Parent</span>
                                </div>
                            </div>
                        </div>
                        <div class="ts-item">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="ts-author-pic set-bg" style={{
                                            backgroundImage: `url(${member5})`
                                        }}></div>
                                </div>
                                <div class="col-md-9 ts-text">
                                    <p>“ I want to let you know that I am very absolutely delighted with the course in every respect. It has been particularly pleasing for me, with an interest in seeing the application and good educational practice to school education. Learn a different approach that leads to better outcomes. ”</p>
                                    <h5>Mr. Peter Crough</h5>
                                    <span>Student’s Parent</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="team-section spad">
                <div class="container">
                    <div class="section-title text-center">
                        <h3>EXECUTIVE BOARD</h3>
                        <p>The professional standards and expectations</p>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-6 col-lg-3">
                            <div class="member">
                                <div class="member-pic set-bg" style={{
                                            backgroundImage: `url(${member1})`
                                        }}>
                                    <div class="member-social">
                                        <Link to=""><i class="fa fa-facebook"></i></Link>
                                        <Link to=""><i class="fa fa-twitter"></i></Link>
                                        <Link to=""><i class="fa fa-pinterest"></i></Link>
                                    </div>
                                </div>
                                <h5>Sasha Johnson</h5>
                                <p>Principal</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="member">
                                <div class="member-pic set-bg" style={{
                                            backgroundImage: `url(${member2})`
                                        }}>
                                    <div class="member-social">
                                        <Link to=""><i class="fa fa-facebook"></i></Link>
                                        <Link to=""><i class="fa fa-twitter"></i></Link>
                                        <Link to=""><i class="fa fa-pinterest"></i></Link>
                                    </div>
                                </div>
                                <h5>Darmian Shaw</h5>
                                <p>Vice-principal Admin</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="member">
                                <div class="member-pic set-bg" style={{
                                            backgroundImage: `url(${member3})`
                                        }}>
                                    <div class="member-social">
                                        <Link to=""><i class="fa fa-facebook"></i></Link>
                                        <Link to=""><i class="fa fa-twitter"></i></Link>
                                        <Link to=""><i class="fa fa-pinterest"></i></Link>
                                    </div>
                                </div>
                                <h5>Joshua Matt</h5>
                                <p>Vice-principal Acad.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="member">
                                <div class="member-pic set-bg" style={{
                                    backgroundImage: `url(${member4})`
                                }}>
                                    <div class="member-social">
                                        <Link to=""><i class="fa fa-facebook"></i></Link>
                                        <Link to=""><i class="fa fa-twitter"></i></Link>
                                        <Link to=""><i class="fa fa-pinterest"></i></Link>
                                    </div>
                                </div>
                                <h5>Taylor Launer</h5>
                                <p>Dean of studies</p>
                            </div>
                        </div>

                        </div>
                </div>
            </section>
        </>
    )
}
export default About