import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import FormatPrice from "../FormatData/FormatPrice";
import './css/style.css';

class ListProducts extends Component{
    constructor(props) {
        super(props);
      }
      
      render() {
        if(this.props.products.list_products){
          return (
            <>
              { this.props.products.list_products.map(product => 
                  <div class="col">
                    <div class="card h-100 text-center">
                    <div className="cart-thumbnail" style={{paddingTop: '0.5rem'}}>
                    <img src={product.thumbnail} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-body">
                    <Link to={`/detail-product/${product.id}`}>
                        <b class="card-title">{product.name}</b>
                        </Link>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                              <div className="fa fa-star"></div>
                              <div className="fa fa-star"></div>
                              <div className="fa fa-star"></div>
                              <div className="fa fa-star"></div>
                              <div className="fa fa-star"></div>
                          </div>
                        <b style={{color: '#d00031'}}><FormatPrice price={product.price} /></b>
                    </div>
                    {/* <div class="card-footer bg-dange">
                        <Link to={`/detail-product/${product.id}`}>
                        <small class="text-muted"><i class="fa fa-eye" aria-hidden="true"></i> Xem Sản Phẩm</small>
                        </Link>
                    </div> */}
                    </div>
                </div>
              )}
            </>
          )
        }
        else{
          return(
            <div class="spinner-border text-danger products-spinner" id="products-loader" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
          )
        }
      }
}
export default ListProducts;