import React from "react";
import { Link } from "react-router-dom";
import FormatPrice from "../../FormatData/FormatPrice";
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardText,
    MDBCol
  } from 'mdb-react-ui-kit';
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
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

class RelatedProducts extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.products){
            return <Carousel responsive={responsive}>
              { this.props.products.map((element , index) => {
                if(element.id != this.props.product_id){
                  return <MDBCol style={{paddingLeft : '0px'}}>
                    <Link to={`/webpro/detail-product/${element.id}`}>
                    <MDBCard className='h-100'>
                      <MDBCardImage
                        src={element.thumbnail}
                        alt='...'
                        position='top'
                      />
                      <MDBCardBody>
                        <MDBCardText class="d-inline-block text-truncate" style={{maxWidth : '100%'}}>{element.name}</MDBCardText>
                        <MDBCardText style={{color : '#dc3545'}}>
                          <FormatPrice price={element.price} />
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                    </Link>
                  </MDBCol>
                }
              })
              }
            </Carousel>
        }
    }
}
export default RelatedProducts;