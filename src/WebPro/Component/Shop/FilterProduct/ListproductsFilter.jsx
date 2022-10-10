import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import FormatPrice from "../../FormatData/FormatPrice";
import './css/style.css';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

class ListProductsFilter extends Component{
    constructor(props) {
        super(props);
      }
      
      render() {
        if(this.props.products){
          if(this.props.products[0]){
            return (
              <>
              <section style={{paddingBottom : '2rem'}}>
              <h5 style={{borderBottom : '1px solid #ced4da', marginBottom : '1.5rem', marginTop : '-0.5rem'}}><b>Danh Sách Xe {this.props.categoriesname}</b></h5>
              <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
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
                </MDBRow>
                </section>
              </>
            )
          }else{
            return (
              <>
                <section style={{paddingBottom : '2rem'}}>
                  <h5 className="text-center">Không có sản phẩm</h5>
                </section>
              </>
            )
          }
        }
      }
}
export default ListProductsFilter;