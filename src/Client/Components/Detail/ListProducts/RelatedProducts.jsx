import React from "react";
import { Link } from "react-router-dom";
import FormatPrice from "../../FormatData/FormatPrice";

class RelatedProducts extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.products.success){
            return this.props.products.success.products.map((element , index) => {
                return <div class="col">
                    <div class="card h-100 text-center">
                    <div className="cart-thumbnail" style={{paddingTop: '0.5rem'}}>
                    <img src={element.thumbnail} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-body">
                        <Link to={`/detail-product/${element.id}`}>
                        <b class="card-title">{element.name}</b>
                        </Link>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                              <div className="fa fa-star"></div>
                              <div className="fa fa-star"></div>
                              <div className="fa fa-star"></div>
                              <div className="fa fa-star"></div>
                              <div className="fa fa-star"></div>
                          </div>
                        <b style={{color: '#d00031'}}><FormatPrice price={element.price} /></b>
                    </div>
                    {/* <div class="card-footer bg-dange">
                        <Link to={`/detail-product/${product.id}`}>
                        <small class="text-muted"><i class="fa fa-eye" aria-hidden="true"></i> Xem Sản Phẩm</small>
                        </Link>
                    </div> */}
                    </div>
                </div>
              });
        }
    }
}
export default RelatedProducts;