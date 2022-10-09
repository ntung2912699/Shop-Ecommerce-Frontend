import React from "react";
import './css/carousel.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';

class GalleryCarousel extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        if (this.props.images.product) {
            const arr =  this.props.images.product.gallery.split('|'); 
            return (
                <div className="col-md-7">
                    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
                            <img src={this.props.images.product.thumbnail} class="d-block w-100" alt="..."/></button>
                            {
                            arr.map((gallery, index)=>{
                                return  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index+1} aria-label="Slide 2"><img src={gallery} class="d-block w-100" alt="..."/></button>
                            })
                        }
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <InnerImageZoom src={this.props.images.product.thumbnail}/>
                        </div>
                        {
                            arr.map((gallery, index)=>{
                                return <div class="carousel-item">
                                        <InnerImageZoom key={index} src={gallery}/>
                                </div>
                            })
                        }
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            )
        }
    }
}
export default GalleryCarousel;