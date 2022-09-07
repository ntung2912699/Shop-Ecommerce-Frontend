import React from "react";
import FormatPrice from "../../FormatData/FormatPrice";
import axios from "axios";
import CreateOrder from "../../Order/FetchOrder/CreateOrder";

class CheckOutPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            products :  JSON.parse(window.sessionStorage.getItem('products')),
            totals : window.sessionStorage.getItem('grand_total'),
            user_id : window.localStorage.getItem('users_id'),
            user_profile : null
        };
      }
      async componentDidMount(){
        let token = window.localStorage.getItem('access_token')
        await axios.get(`https://ecommerce-shop-api-project.herokuapp.com/api/get-profile-by-user/`+this.state.user_id,
            { 
                'headers': {
                'Authorization': 'Bearer ' + token
                }
            }
          )
        .then(res => {
          const profile = res.data;
          this.setState({ user_profile : profile });
        })
        .catch(error => console.log(error));
    }

    render(){
        console.log(this.state.user_profile);
        if (this.state.user_profile) {
            if(this.state.user_profile){
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
                                            <div class="col-md-4">
                                                <label for="country" class="form-label">Thành Phố</label>
                                                <select class="form-select" id="country" required="">
                                                    <option selected>Hà Nội</option>
                                                </select>
                                                <div class="invalid-feedback">
                                                    Please select a valid country.
                                                </div>
                                            </div>
            
                                            <div class="col-md-4">
                                                <label for="country" class="form-label">Quận/Huyện</label>
                                                <select class="form-select" id="country" required="">
                                                    <option selected>ABC</option>
                                                </select>
                                                <div class="invalid-feedback">
                                                    Please select a valid country.
                                                </div>
                                            </div>
            
                                            <div class="col-md-4">
                                                <label for="state" class="form-label">Xã/Phường</label>
                                                <select class="form-select" id="state" required="">
                                                    <option selected>XYZ</option>
                                                </select>
                                                <div class="invalid-feedback">
                                                    Please provide a valid state.
                                                </div>
                                            </div>
            
                                            <div class="col-9">
                                                <label for="address2" class="form-label">Địa chỉ giao hàng</label>
                                                <input type="text" class="form-control" id="address2" placeholder="Ghi rõ số nhà hoặc ngõ"/>
                                            </div>
            
                                            <div class="col-md-3">
                                                <label for="zip" class="form-label">Mã Zip</label>
                                                <input type="text" class="form-control" id="zip" placeholder="" required=""/>
                                                <div class="invalid-feedback">
                                                    Zip code required.
                                                </div>
                                            </div>
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
                                        {
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
                                            })}
                                    </form>
                                    </div>
                                </div>
                        </div>
                    </div>
                )   
            }
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
                        {
                            this.state.user_profile.profile.map(e => {
                                return <div class="col-md-6 col-lg-8">
                                <div class="shadow p-3 mb-5 bg-body rounded">
                                    <h4 class="mb-3">Địa chỉ thanh toán</h4>
                                    <form class="needs-validation" id="form-checkout" novalidate="">
                                    <div class="row g-3">
                                        <div class="col-sm-6">
                                            <label for="firstName" class="form-label">Họ</label>
                                            <input type="text" class="form-control" id="firstName" placeholder="" value={e.first_name} required=""/>
                                            <div class="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>
        
                                        <div class="col-sm-6">
                                            <label for="lastName" class="form-label">Tên</label>
                                            <input type="text" class="form-control" id="lastName" placeholder="" value={e.last_name} required=""/>
                                            <div class="invalid-feedback">
                                                Valid last name is required.
                                            </div>
                                        </div>
        
                                        <div class="col-7">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" class="form-control" value={window.localStorage.getItem('email')} id="email"/>
                                            <div class="invalid-feedback">
                                                Please enter a valid email address for shipping updates.
                                            </div>
                                        </div>
        
                                        <div class="col-5">
                                            <label for="address" class="form-label">Số điện thoại</label>
                                            <input type="number" class="form-control" value={e.phone_number} required=""/>
                                            <div class="invalid-feedback">
                                                Please enter your shipping address.
                                            </div>
                                        </div>
        
                                        {
                                            e.shipping_address.map(element => {
                                                return <>
                                                    <div class="col-md-4">
                                                    <label for="country" class="form-label">Thành Phố</label>
                                                    <select class="form-select" id="country" required="">
                                                        <option value={element.city} selected>{element.city}</option>
                                                    </select>
                                                    <div class="invalid-feedback">
                                                        Please select a valid country.
                                                    </div>
                                                </div>
                
                                                <div class="col-md-4">
                                                    <label for="country" class="form-label">Quận/Huyện</label>
                                                    <select class="form-select" id="country" required="">
                                                        <option value={element.district} selected>{element.district}</option>
                                                    </select>
                                                    <div class="invalid-feedback">
                                                        Please select a valid country.
                                                    </div>
                                                </div>
                
                                                <div class="col-md-4">
                                                    <label for="state" class="form-label">Xã/Phường</label>
                                                    <select class="form-select" id="state" required="">
                                                        <option value={element.wards} selected>{element.wards}</option>
                                                    </select>
                                                    <div class="invalid-feedback">
                                                        Please provide a valid state.
                                                    </div>
                                                </div>
                
                                                <div class="col-9">
                                                    <label for="address2" class="form-label">Địa chỉ giao hàng</label>
                                                    <input type="text" class="form-control" value={element.apartment_number} id="address2" placeholder="Ghi rõ số nhà hoặc ngõ"/>
                                                </div>
                
                                                <div class="col-md-3">
                                                    <label for="zip" class="form-label">Mã Zip</label>
                                                    <input type="text" class="form-control" id="zip" value={element.zip_code} placeholder="" required=""/>
                                                    <div class="invalid-feedback">
                                                        Zip code required.
                                                    </div>
                                                </div>
                                                </>
                                            })
                                        }
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
                                    {
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
                                        })}
                                </form>
                                </div>
                            </div>
                            })
                        }
                    </div>
                </div>
            )   
        }
    }
}
export default CheckOutPage;