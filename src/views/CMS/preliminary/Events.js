import React from 'react'
import { Link } from 'react-router-dom'
import blog1 from '../../../img/blog/1.jpg'
import blog2 from '../../../img/blog/2.jpg'
import blog3 from '../../../img/blog/3.jpg'
import blog4 from '../../../img/blog/4.jpg'
import BlogSideBar from '../Elements/blogSidebar'

const Events =()=>{
    return(
      <>
        <div className="site-breadcrumb">
          <div className="container">
            <Link to="/index"><i className="fa fa-home"></i> Home</Link> <i className="fa fa-angle-right"></i>
            <span>Events</span>
          </div>
        </div>
        <section className="blog-page-section spad pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 post-list">
                <div className="post-item">
                  <div className="post-thumb set-bg" style={{
                    backgroundImage: `url(${blog1})`
                  }}></div>

                  <div className="post-content">
                    <h3><Link to="/blog-post/:123">Parents who try to be their children’s best friends</Link></h3>
                    <div className="post-meta">
                      <span><i className="fa fa-calendar-o"></i> 23 Mar 2020</span>
                      <span><i className="fa fa-user"></i> Cathrine Zeta</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna eget lectus molestie rhoncus sed in nunc. Vestib tincidunt facilisis ligula sed viverra. Duis porttitor sapien maximus, volutpat massa malesuada. Curabitur orci est, molestie eget orci, tincidunt dictum felis. Cras ante nunc, pharetra eu rutrum aliquet, gestas eget ex. Suspendisse potenti vietlott Quisque asvitae eros efficitur lacus viverra molestie at ut mi. Quisque id mollis nibh...</p>
                  </div>
                </div>
                <div className="post-item">
                  <div className="post-thumb set-bg" style={{
                    backgroundImage: `url(${blog2})`
                  }}></div>
                  <div className="post-content">
                    <h3><Link to="/blog-post/:123">Graduations could be delayed as external examiners</Link></h3>
                    <div className="post-meta">
                      <span><i className="fa fa-calendar-o"></i> 23 Mar 2020</span>
                      <span><i className="fa fa-user"></i> Cathrine Zeta</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna eget lectus molestie rhoncus sed in nunc. Vestibulum tincidunt facilisis ligula sed viverra. Duis porttitor sapien maximus, volutpat massa malesuada. Curabitur orci est, ut molestie eget orci, tincidunt dictum felis. Cras ante nunc, pharetra eu rutrum aliquet, egestas eget ex. Suspendisse potenti. Quisque asvitae eros efficitur lacus viverra molestie at ut mi. Quisque id mollis nibh...</p>
                  </div>
                </div>
                <div className="post-item">
                  <div className="post-thumb set-bg" style={{
                    backgroundImage: `url(${blog3})`
                  }}></div>
                  <div className="post-content">
                    <h3><Link to="/blog-post/:123">Private schools adopt a Ucas-style application system</Link></h3>
                    <div className="post-meta">
                      <span><i className="fa fa-calendar-o"></i> 23 Mar 2020</span>
                      <span><i className="fa fa-user"></i> Cathrine Zeta</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna eget lectus molestie rhoncus sed in nunc. Vestibulum tincidunt facilisis ligula sed viverra. Duis porttitor sapien maximus, volutpat massa malesuada. Curabitur orci est, ut molestie eget orci, tincidunt dictum felis. Cras ante nunc, pharetra eu rutrum aliquet, egestas eget ex. Suspendisse potenti. Quisque asvitae eros efficitur lacus viverra molestie at ut mi. Quisque id mollis nibh...</p>
                  </div>
                </div>
                <div className="post-item">
                  <div className="post-thumb set-bg" style={{
                    backgroundImage: `url(${blog4})`
                  }}></div>
                  <div className="post-content">
                    <h3><Link to="/blog-post/:123">Cambridge digs in at the top of university league table</Link></h3>
                    <div className="post-meta">
                      <span><i className="fa fa-calendar-o"></i> 23 Mar 2020</span>
                      <span><i className="fa fa-user"></i> Cathrine Zeta</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna eget lectus molestie rhoncus sed in nunc. Vestibulum tincidunt facilisis ligula sed viverra. Duis porttitor sapien maximus, volutpat massa malesuada. Curabitur orci est, ut molestie eget orci, tincidunt dictum felis. Cras ante nunc, pharetra eu rutrum aliquet, egestas eget ex. Suspendisse potenti. Quisque asvitae eros efficitur lacus viverra molestie at ut mi. Quisque id mollis nibh...</p>
                  </div>
                </div>
                <ul className="site-pageination">
                  <li><Link to="#" className="active">1</Link></li>
                  <li><Link to="#">2</Link></li>
                  <li><Link to="#"><i className="fa fa-angle-right"></i></Link></li>
                </ul>
              </div>
              <BlogSideBar />
            </div>
          </div>
        </section>
       
        </>
      )
}
export default Events;