import React from "react";
import FetchAttributeProducts from "../AttributeProducts/FetchAttributeProducts";
import Addtocart from "../../Cart/AddToCart/Addtocart";
import CustomerReviewContent from "../CustomerReviewProducts/CustomerReviewContent";
import FormatPrice from "../../FormatData/FormatPrice";

class ProductsInfomation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            attribute : this.props.info.productDetail.products.attribute,
            price_attribute : 0,
            price : this.props.info.productDetail.products.price,
        };
      }
      changePrice = (price) => {
        this.setState({price_attribute: price});
      }

      render(){
        if(this.props.info.productDetail.products){
            return(
                <>
                    <div className="col-md-6">
                        <h1 className="display-5 fw-bolder">{this.props.info.productDetail.products.name}</h1>
                        <div className="fs-5 mb-5">
                            <div className="small mb-1" style={{color: '#d00031'}}>{this.props.info.productDetail.products.status}</div>
                            <div className="justify-content-center small text-warning mb-2">
                                <div className="fa fa-star"></div>
                                <div className="fa fa-star"></div>
                                <div className="fa fa-star"></div>
                                <div className="fa fa-star"></div>
                                <div className="fa fa-star"></div> <small>(134 Đánh giá )</small>
                            </div>
                        </div>
                        <div className="fs-5 mb-5">
                            {/* <span className="text-decoration-line-through">{pro.price}VND</span> */}
                            <h3 style={{color: '#d00031'}}><FormatPrice price={parseFloat(this.state.price) + parseFloat(this.state.price_attribute)} /></h3>
                            <small>Thương hiệu : <b style={{color: '#d00031'}}>{this.props.info.productDetail.products.brand.name}</b></small><br/>
                            <small><b style={{color: '#d00031'}}>{this.props.info.productDetail.products.quantity} </b>Sản Phẩm Có Sẵn</small>
                        </div>
                        <div className="fs-5 mb-5">
                            <form id="form-attribute">
                                {
                                    Object.keys(this.state.attribute).map((e, i)=>{
                                        return <>
                                            <div>
                                                <strong key={'wrap-'+i} className="text-dark mr-3" >{e} : </strong><br/>
                                                  { this.state.attribute[e].map((element, index) => {
                                                      return <div key={'child'+index} className="form-check form-check-inline radio-dark">
                                                        <input className="form-check-input" type="radio" id={`attr-${element.id}`} value={element.id} onChange={() => this.changePrice(element.price)} name={e}/>
                                                        <label className="form-check-label" htmlFor={`attr-${element.id}`}>{element.value}</label>
                                                      </div>
                                                    })
                                                    }
                                            </div>
                                        </>            
                                        })
                                }
                                {/* <AttributeContentComponent attribute = {this.state.attribute}/> */}
                            </form>
                        </div>
                        <div className="d-flex">
                            <div className="input-group-btn">
                                <button className="btn btn-danger btn-minus" onClick={
                                    function minusClick(){
                                        let val = document.getElementById('qty').value
                                        if(val <= 1){
                                            document.getElementById("qty").value = 1;
                                        }else{
                                            document.getElementById("qty").value--;
                                        }
                                    }
                                }>
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <input className="form-control text-center" id="qty" type="num" value="1" style={{maxWidth:" 4rem"}} />
                            <div className="input-group-btn">
                                <button className="btn btn-danger btn-plus me-3" onClick={
                                    function plusClick(){
                                        document.getElementById("qty").value++;
                                    }
                                }>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                            <Addtocart product_id={this.props.info.productDetail.products.id} price={parseFloat(this.state.price) + parseFloat(this.state.price_attribute)} 
                            attribute={this.state.attribute} 
                            />
                        </div>
                        {/* <div className="fs-5 mb-5" style={{marginTop: "2rem"}}>
                            <b>Mô Tả : </b><br/>
                            <p className="lead">{pro.short_description}</p>
                        </div> */}
                    </div>
                    <CustomerReviewContent data={this.props.info.productDetail.products}/>
                </>
            )
        }
      }
}
export default ProductsInfomation;