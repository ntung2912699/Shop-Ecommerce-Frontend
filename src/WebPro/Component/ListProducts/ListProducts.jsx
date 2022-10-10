import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import FormatPrice from "../FormatData/FormatPrice";
import './css/style.css';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBCol
} from 'mdb-react-ui-kit';

class ListProducts extends Component{
    constructor(props) {
        super(props);
      }
      
      render() {
        if(this.props.products){
          return (
            <>
              { this.props.products.map(product => 
                <MDBCol className="col-6 col-md-3">
                  <Link to={`/detail-product/${product.id}`}>
                  <MDBCard className='h-100'>
                    <MDBCardImage
                      src={product.thumbnail}
                      alt='...'
                      position='top'
                    />
                    <MDBCardBody>
                      <MDBCardText class="d-inline-block text-truncate" style={{maxWidth : '100%'}}>{product.name}</MDBCardText>
                      <MDBCardText style={{color : '#dc3545'}}>
                        <FormatPrice price={product.price} />
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  </Link>
                </MDBCol>
              )}
            </>
          )
        }
        else{
          return(
            <div class="spinner-border products-spinner" id="products-loader" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
          )
        }
      }
}
export default ListProducts;