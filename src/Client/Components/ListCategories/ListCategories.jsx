import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import '../ListProducts/css/style.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow
} from 'mdb-react-ui-kit';

class ListCategories extends Component{
    constructor(props) {
        super(props);
      }
      
      render() {
        if(this.props.categories.categories){
          return (
            <>
              { this.props.categories.categories.map(category => 
              <MDBCol xl={3} lg={6} className='mb-4 col-12'>
              <MDBCard>
                <MDBCardBody>
                  <div className='d-flex align-items-center'>
                    <img
                      src={category.logo}
                      alt=''
                      style={{ width: '45px', height: '45px' }}
                      className='rounded-circle'
                    />
                    <div className='ms-3'>
                      <p className='fw-bold mb-1 d-inline-block text-truncate' style={{maxWidth : '150px'}}>{category.name}</p>
                      <p className='text-muted mb-0'>{category.status}</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
              )}
            </>
          )
        }else{
          return(
            <div class="spinner-border products-spinner" id="products-loader" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
          )
        }
      }
}
export default ListCategories;