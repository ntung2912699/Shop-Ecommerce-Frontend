import React from "react";
import FormatPrice from "../../FormatData/FormatPrice";
import axios from "axios";
import CreateOrder from "../../Order/FetchOrder/CreateOrder";
import LocationForm from "../LocaltionAddress/LocationForm";
import FormAddress from "../FormAddress/Formaddress";
import FormeditAddress from "../FormAddress/FormeditAddress";

class CheckOutPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            products :  JSON.parse(window.sessionStorage.getItem('products')),
            totals : window.sessionStorage.getItem('grand_total'),
            user_id : window.localStorage.getItem('users_id'),
            user : null
        };
      }
      async componentDidMount(){
        let token = window.localStorage.getItem('access_token')
        await axios.get(`https://ecommerce-shop-api-project.herokuapp.com/api/get-address-by-user/`+this.state.user_id,
            { 
                'headers': {
                'Authorization': 'Bearer ' + token
                }
            }
          )
        .then(res => {
          const address = res.data;
          this.setState({ user : address });
        })
        .catch(error => console.log(error));
    }

    render(){
        if (this.state.user) {
            if(this.state.user.user){
                if(this.state.user.user.address[0]){
                    return(
                        <div class="container">
                        <div class="row g-5" style={{paddingTop : '2.5rem'}}>
                            <div class="col-md-6 col-lg-4 order-md-last">
                                <div class="shadow p-3 bg-body rounded">
                                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                                        <span>Giỏ Hàng</span>
                                        <span class="badge bg-danger rounded-pill">3</span>
                                    </h4>
                                    <ul class="list-group mb-3">
                                    {
                                        this.state.products.map((element, index) => {
                                           return <li class="list-group-item d-flex justify-content-between lh-sm">
                                                <div>
                                                <h6 class="my-0">{element.product.name}</h6>
                                                {
                                                    element.list_attribute_cart.map(e => {
                                                        return <><small class="spec">{e.attributevalue.value} </small></>
                                                    })
                                                }
                                                </div>
                                                <span class="text-muted"><FormatPrice price={element.price}></FormatPrice></span>
                                            </li>
                                        }
                                    )}
                                       
                                        <li class="list-group-item d-flex justify-content-between">
                                            <span>Tổng Thanh Toán</span>
                                            <strong><FormatPrice price={this.state.totals} ></FormatPrice></strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-8">
                                <div class="shadow p-3 mb-5 bg-body rounded">
                                <h4 class="mb-3">Địa chỉ thanh toán</h4>
                                <FormAddress />
                                { this.state.user.user.address.map(e => {
                                   return <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">{e.customer_name}</h5>
                                            <p class="card-text"> ĐT : {e.phone_number}</p>
                                            <p class="card-text">Địa chỉ : {e.address} - {e.wards} - {e.district} - {e.city}</p>
                                            {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                        </div>
                                        <FormeditAddress address={e}/>
                                        <div class="form-check form-switch" style={{position : 'absolute', left : '90%', top : '50%'}}>
                                            <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckDefault"/>
                                            <label class="form-check-label" for="flexSwitchCheckDefault">Bật</label>
                                        </div>
                                    </div>
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }else{
                    return(
                        <div class="container">
                            <div class="row g-5" style={{paddingTop : '2.5rem'}}>
                                <div class="col-md-6 col-lg-4 order-md-last">
                                    <div class="shadow p-3 bg-body rounded">
                                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                                            <span>Giỏ Hàng</span>
                                            <span class="badge bg-danger rounded-pill">3</span>
                                        </h4>
                                        <ul class="list-group mb-3">
                                        {
                                            this.state.products.map((element, index) => {
                                               return <li class="list-group-item d-flex justify-content-between lh-sm">
                                                    <div>
                                                    <h6 class="my-0">{element.product.name}</h6>
                                                    {
                                                        element.list_attribute_cart.map(e => {
                                                            return <><small class="spec">{e.attributevalue.value} </small></>
                                                        })
                                                    }
                                                    </div>
                                                    <span class="text-muted"><FormatPrice price={element.price}></FormatPrice></span>
                                                </li>
                                            }
                                        )}
                                           
                                            <li class="list-group-item d-flex justify-content-between">
                                                <span>Tổng Thanh Toán</span>
                                                <strong><FormatPrice price={this.state.totals} ></FormatPrice></strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-8">
                                    <div class="shadow p-3 mb-5 bg-body rounded">
                                        <h4 class="mb-3">Địa chỉ thanh toán</h4>
                                        <form class="needs-validation" id="form-checkout" novalidate="">
                                        <div class="row g-3">
                                            <div class="col-sm-6">
                                                <label for="firstName" class="form-label">Họ</label>
                                                <input type="text" class="form-control" id="firstName" placeholder="" required=""/>
                                                <div class="invalid-feedback">
                                                    Valid first name is required.
                                                </div>
                                            </div>
        
                                            <div class="col-sm-6">
                                                <label for="lastName" class="form-label">Tên</label>
                                                <input type="text" class="form-control" id="lastName" placeholder="" required=""/>
                                                <div class="invalid-feedback">
                                                    Valid last name is required.
                                                </div>
                                            </div>
        
                                            <div class="col-7">
                                                <label for="email" class="form-label">Email</label>
                                                <input type="email" class="form-control" id="email"/>
                                                <div class="invalid-feedback">
                                                    Please enter a valid email address for shipping updates.
                                                </div>
                                            </div>
        
                                            <div class="col-5">
                                                <label for="address" class="form-label">Số điện thoại</label>
                                                <input type="number" class="form-control" required=""/>
                                                <div class="invalid-feedback">
                                                    Please enter your shipping address.
                                                </div>
                                            </div>
                                            <LocationForm/>
                                        </div>
                                        <hr class="my-4"></hr>
        
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="same-address"/>
                                            <label class="form-check-label" for="same-address">Đặt làm địa chỉ mặc định</label>
                                        </div>
                                        <hr class="my-4"></hr>
                                        <h4 class="mb-3">Thanh Toán</h4>
                                        <div class="my-3">
                                            <div class="form-check">
                                                <input id="qr" name="paymentMethod" value="qr" type="radio" class="form-check-input" required=""/>
                                                <label class="form-check-label" for="qr">QR Banking</label>
                                            </div>
                                            <div class="form-check">
                                                <input id="card" name="paymentMethod" value="card" type="radio" class="form-check-input" required=""/>
                                                <label class="form-check-label" for="card">Thẻ Tín Dụng</label>
                                            </div>
                                            <div class="form-check">
                                                <input id="direct" name="paymentMethod" type="radio" value="direct" class="form-check-input" required=""/>
                                                <label class="form-check-label" for="direct">Thanh Toán Khi Nhận Hàng</label>
                                            </div>
                                        </div>
                                        <hr class="my-4"></hr>
                                        {/* {
                                            this.state.user_profile.profile.map(e => {
                                                {
                                                    e.shipping_address.map(element => {
                                                    <CreateOrder 
                                                        address_id={element.id}
                                                        payment_method_id={1}
                                                        shiping_method_id={1}
                                                        phone_number={e.phone_number}
                                                        grand_total={this.state.totals}
                                                        note={'hihi'}
                                                    />
                                                })}
                                            })} */}
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) 
                }
            }
        }
    }
}
export default CheckOutPage;