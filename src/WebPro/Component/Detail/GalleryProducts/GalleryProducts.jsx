import React, { Component } from 'react';
import './css/carousel.css'
class GalleryCarousel extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        if (this.props.images.product) {
            const arr =  this.props.images.product.gallery.split('|'); 
            function viewerGallery(){
                const images = arr;
                console.log(images);
            }
            return (
                <>
                    <div className="col-md-7">
                        <div className="viewerImagesModal">
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                    <div className="modal-content">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div id="carouselViewer" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                        <div class="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselViewer" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
                                                <img src={this.props.images.product.thumbnail} class="d-block w-100" alt="..."/></button>
                                                {
                                                arr.map((gallery, index)=>{
                                                    return  <button type="button" data-bs-target="#carouselViewer" data-bs-slide-to={index+1} aria-label="Slide 2"><img src={gallery} class="d-block w-100" alt="..."/></button>
                                                })
                                            }
                                        </div>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src={this.props.images.product.thumbnail} className="zoom d-block w-100" alt='....'/>
                                            </div>
                                            {
                                                arr.map((gallery, index)=>{
                                                    return <>
                                                        <div class="carousel-item">
                                                            <img key={index} src={gallery} className="zoom d-block w-100" alt="..."/>
                                                        </div>
                                                    </>
                                                })
                                            }
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselViewer" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselViewer" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
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
                                <img src={this.props.images.product.thumbnail} data-bs-toggle="modal" data-bs-target="#exampleModal" className="d-block w-100" alt='....'/>
                            </div>
                            {
                                arr.map((gallery, index)=>{
                                    return <>
                                        <div class="carousel-item">
                                            <img key={index} src={gallery} data-bs-toggle="modal" data-bs-target="#exampleModal" className="d-block w-100" alt="..."/>
                                        </div>
                                    </>
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
                </>
            )
        }
    }
}
export default GalleryCarousel;