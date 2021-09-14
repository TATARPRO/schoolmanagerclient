import React from 'react'
import { Link } from 'react-router-dom'
import blog1 from '../../../img/blog/1.jpg'
import BlogSideBar from '../Elements/blogSidebar'

const BlogPost = () => {
    return (
        <>
            <div className="site-breadcrumb">
                <div className="container">
                    <Link to="/index"><i className="fa fa-home"></i> Home</Link> <i className="fa fa-angle-right"></i>
                    <span>Blog Details</span>
                </div>
            </div>

            <section className="blog-page-section spad pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="post-item post-details">
                                <img src={blog1} className="post-thumb-full" alt="blog-image" />
                                <div className="post-content">
                                    <h3><Link to="/blog-post/123">Parents who try to be their children’s best friends</Link></h3>
                                    <div className="post-meta">
                                        <span><i className="fa fa-calendar-o"></i> 23 Mar 2020</span>
                                        <span><i className="fa fa-user"></i> Ako Tavershima</span>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna eget lectus molestie rhoncus
                                        sed in nunc. Vestibulum tincidunt facilisis ligula sed viverra. Duis porttitor sapien maximus, volutpat massa
                                        malesuada. Curabitur orci est, ut molestie eget orci, tincidunt dictum felis. Cras ante nunc, pharetra eu
                                        rutrum aliquet, egestas eget ex. Suspendisse potenti. Quisque asvitae eros efficitur lacus viverra molestie
                                        at ut mi. Quisque id mollis nibh...
                                     </p>
                                    <p>
                                        Fusce imperdiet, eros non fringilla auctor, dolor leo blandit magna, in pretium erat elit id neque. Nulla
                                        sagittis consequat arcu euscura dignissim. Donec ultricies id ante vel blandit. Integer sit amet erat
                                        tincidunt, dictum orci non, tincidunt nisi. Crasania nisl eu aliquet pharetra. Duis finibus pulvinar tellus,
                                        sed convallis lectus faucibus vitae. Fusce rhoncus placerat magna, nec fermentum ex tristique eu. Donec
                                        aliquet purus lectus, ut finibus augue porta ac. Nullam ultricies tempus libero.
                                    </p>
                                    <blockquote>
                                        “There is no end to education. It is not that you read a book, pass an examination, and finish
                                        with education. The whole of life, from the moment you are born to the moment you die.”
                                    </blockquote>
                                    <p>
                                        Proin ac neque quis ex malesuada feugiat sed at ligula. Donec efficitur nisl tortor, eget auctor ex
                                        lobortis id. Duis cursus turpis nec venenatis dapibus. Nunc eget rhoncus purus, a semper orci. Mauris
                                        blandit non arcu malesuada aliquam. Fusce iaculis augue ut neque sollicitudin, quis interdum enim
                                        consectetur. Nullam ut facilisis erat, eget viverra sem. Nulla lobortis tempor magna in maximus. Fusce nec
                                        ante et nunc elementum rutrum ut in odio. Quisque cursus sit amet massa in mollis suspendisse ut ipsum a
                                        orci scelerisque tincidunt. Curabitur pellentesque lobortis ligula, in scelerisque felis volutpat nec.
                                    </p>
                                    <p>
                                        Aenean et enim aliquet, rutrum ante auctor, euismod urna. Phasellus ac erat faucibus, laoreet massa id,
                                        agittis orci. In placerat pharetra lectus vitae gravida. Interdum et malesuada fames ac ante ipsum primis
                                        in faucibus. Vivamus massa massa, porttitor eget consectetur sed, vulputate ac velit. Integer ullamcorper
                                        ante ex. Quisque vitae eleifend elit. Vestibulum mi lectus, euismod in nunc, posuere eleifend sapien. In
                                        commodo euismod lectus quis porttitor.
                                    </p>
                                    <div className="tag">
                                        <i className="fa fa-tag"></i> EDUCATION, MARKETING &nbsp;
                                        <i className="fa fa-tag"></i> EDUCATION, FINANCE
                                    </div>

                                </div>
                            </div>
                        </div>

                       <BlogSideBar />
                    </div>
                </div>
            </section>
        </>
    )
}
export default BlogPost;