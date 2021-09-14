import React from 'react'
import { Link } from 'react-router-dom'
import ad from '../../../img/ad.jpg'
import recentBlog1 from '../../../img/blog/recent-post/1.jpg'
import recentBlog2 from '../../../img/blog/recent-post/2.jpg'
import recentBlog3 from '../../../img/blog/recent-post/3.jpg'
import recentBlog4 from '../../../img/blog/recent-post/4.jpg'

const BlogSideBar =()=>{
return(
    <div className="col-sm-8 col-md-5 col-lg-4 col-xl-3 offset-xl-1 offset-0 pl-xl-0 ">

        <div className="widget">
            <form className="search-widget">
                <input type="text" placeholder="Search..." />
                <button><i className="ti-search"></i></button>
            </form>
        </div>

        <div className="widget">
            <h5 className="widget-title">Recent News</h5>
            <div className="recent-post-widget">

                <div className="rp-item">
                    <div className="rp-thumb set-bg" style={{
                        backgroundImage: `url(${recentBlog1})`
                    }}></div>
                    <div className="rp-content">
                        <h6>Snackable study:How to break up your term's work</h6>
                        <p><i className="fa fa-clock-o"></i> 24 Mar 2020</p>
                    </div>
                </div>

                <div className="rp-item">
                    <div className="rp-thumb set-bg" style={{
                        backgroundImage: `url(${recentBlog2})`
                    }}></div>
                    <div className="rp-content">
                        <h6>Open University plans major cuts to number of staff</h6>
                        <p><i className="fa fa-clock-o"></i> 24 Mar 2020</p>
                    </div>
                </div>

                <div className="rp-item">
                    <div className="rp-thumb set-bg" style={{
                        backgroundImage: `url(${recentBlog3})`
                    }}></div>
                    <div className="rp-content">
                        <h6>My holidays: ‘I worked on essays as giraffes walked by’</h6>
                        <p><i className="fa fa-clock-o"></i> 24 Mar 2020</p>
                    </div>
                </div>

                <div className="rp-item">
                    <div className="rp-thumb set-bg" style={{
                        backgroundImage: `url(${recentBlog4})`
                    }}></div>
                    <div className="rp-content">
                        <h6>How to use the Hallmarks' school Guides</h6>
                        <p><i className="fa fa-clock-o"></i> 24 Mar 2020</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="widget">
            <h4 className="widget-title">Tags</h4>
            <div className="tags">
                <Link to="#">DEVELOPMENT</Link>
                <Link to="#">BUSINESS</Link>
                <Link to="#">PROJECTS</Link>
                <Link to="#">Education</Link>
                <Link to="#">Child up-keep</Link>
                <Link to="#">AGRICULTURE</Link>
            </div>
        </div>

        <div className="widget">
            <img src={ad} alt="" />
        </div>

    </div>

)
}
export default BlogSideBar