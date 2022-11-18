import React from "react";
import CustomerReviewContent from "../CustomerReviewProducts/CustomerReviewContent";
import FormatPrice from "../../FormatData/FormatPrice";

class ProductsInfomation extends React.Component{
    constructor(props) {
        super(props);
      }

      render(){
        if(this.props.info.product){
            return(
                <>
                    <div className="col-md-5">
                        <div className="my-3"><h3>{this.props.info.product.name}</h3></div>
                        <div className="fs-5 mb-2">
                            <h3 style={{color : '#dc3545'}}><FormatPrice price={this.props.info.product.price} /></h3>
                            <small><b>Nhãn hiệu :</b> {this.props.info.product.category.name}</small><br/>
                        </div>
                        <div className="fs-6 mb-5">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Thông cơ bản</a>
                                </div>
                            </nav>
                                <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <table class="table table-sm table-hover">
                                        <tbody>
                                        {
                                        Object.keys(this.props.info.product.attribute).map((e, i)=>{
                                            return <tr>
                                                <td style={{minWidth : '150px'}}>{e}:</td>
                                                <td style={{minWidth : '150px'}}>
                                                    { this.props.info.product.attribute[e].map((element, index) => {
                                                        return <>
                                                            {element.value}
                                                            </>
                                                        })
                                                    }
                                                    </td>
                                                </tr>
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="fs-5 mb-5">
                            <div class="d-grid gap-2">
                            <button class="btn btn-outline-danger" onClick={function(){window.open('tel:0362912699')}} type="button"><i class="fa fa-phone" aria-hidden="true"></i> Hotline 0362912699</button>
                            </div>
                        </div>
                    </div>
                    <CustomerReviewContent data={this.props.info.product}/>
                </>
            )
        }
      }
}
export default ProductsInfomation;