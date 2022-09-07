import React from "react";

class GalleryCarousel extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        if (this.props.images.productDetail.products) {
            const arr = this.props.images.productDetail.products.gallery.split('|'); 
            return (
                <div className="col-md-6">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={this.props.images.productDetail.products.thumbnail} className="d-block w-100 card-img-top mb-5 mb-md-0" alt="..."/>
                        </div>
                        {
                            arr.map((gallery, index)=>{
                                return <div key={index} className="carousel-item">
                                    <img src={gallery} className="d-block w-100 card-img-top mb-5 mb-md-0" alt="..."/>
                                </div>
                            })
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>      
                </div>
            )
        }
    }
}
export default GalleryCarousel;