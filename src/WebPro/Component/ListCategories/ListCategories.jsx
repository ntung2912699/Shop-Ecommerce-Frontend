import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import '../ListProducts/css/style.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

class ListCategories extends Component{
    constructor(props) {
        super(props);
      }
      
      render() {
          return (
            <>
            <Carousel responsive={responsive}>
              { this.props.categories.map(category => 
              <div>
                <Link to={`/shop/${category.id}`}>
                  <figure class="figure text-center">
                    <img src={category.logo} width="80" class="figure-img img-fluid rounded" alt="logo..."/>
                    <figcaption class="figure-caption"><b>{category.name}</b></figcaption>
                  </figure>
                </Link>
              </div>
              )}
              </Carousel>
            </>
          )
        }
}
export default ListCategories;