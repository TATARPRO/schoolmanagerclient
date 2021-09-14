import React from 'react'
import gallery1 from '../../../img/gallery/1.jpg'
import gallery2 from '../../../img/gallery/2.jpg'
import gallery3 from '../../../img/gallery/3.jpg'
import gallery4 from '../../../img/gallery/4.jpg'
import gallery5 from '../../../img/gallery/5.jpg'
import gallery6 from '../../../img/gallery/6.jpg'
import gallery7 from '../../../img/gallery/7.jpg'
import gallery8 from '../../../img/gallery/8.jpg'

const Gallery = () => {
    return (
        <div id="about" className="container-fluid">
            <div className="row">
                <div className="col-md-3 mt-10">
                   <img src={gallery1} />
                </div>
                <div className="col-md-3 mt-10">
                    <img src={gallery2} />
                </div>
                <div className="col-md-3 mt-10">
                    <img src={gallery3} />
                </div>
                <div className="col-md-3 mt-10">
                    <img src={gallery4} />
                </div>
                <div className="col-md-3 mt-10">
                    <img src={gallery5} />
                </div>
                <div className="col-md-3 mt-10">
                    <img src={gallery6} />
                </div>
                <div className="col-md-3 mt-10">
                    <img src={gallery7} />
                </div>
                <div className="col-md-3 mt-10">
                    <img src={gallery8} />
                </div>
               
            </div>
        </div>
    )
}
export default Gallery