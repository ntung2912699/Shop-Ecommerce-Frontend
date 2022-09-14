import React from "react";
import LocationForm from "../LocaltionAddress/LocationForm";
import axios from "axios";

class FormAddress extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            city :  null,
            district : null,
            wards : null,
        };
    }

    // handleCity = (value) => {
    //     this.setState({city : value});
    // }

    // handleDistrict = (value) => {
    //     this.setState({district : value});
    // }

    // handleWards = (value) => {
    //     this.setState({wards : value});
    // }

    async SaveAddress(event){
        event.preventDefault();
        const users_id = window.localStorage.getItem('users_id');
        const customer_name = document.getElementById('customer_name').value;
        const phone_number = document.getElementById('phone_number').value;
        // const city = document.querySelector('#city');
        // const district = document.getElementById('district');
        // const wards = document.getElementById('wards');
        const address = document.getElementById('address').value;
        const status = document.getElementById('status').value;

        console.log(this.state.city);

        // await axios.post(
        //     'https://ecommerce-shop-api-project.herokuapp.com/api/create-address',
        //     {
        //       email: email,
        //       password: password
        //     })
        //   .then((res) => {
        //         console.log(res.data);
        //   }).catch((error) => {
        //     if(error){
        //      console.log(error);
        //     }
        //   })
    }
    render(){
        return (
           <>
            <button type="button" class="btn btn-secondary btn-sm"  data-bs-toggle="modal" data-bs-target="#formAddress" style={{position : 'absolute', top : '1rem', left : '86%'}}>Thêm mới</button>

            <div class="modal fade" id="formAddress" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <form onSubmit={this.SaveAddress}>
                    <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                    <div class="modal-header">
                        <b class="modal-title" id="exampleModalLabel">Thêm địa chỉ mới</b>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <div class="col-md-12 col-lg-12">
                            <h6 class="mb-3">Địa chỉ thanh toán</h6>
                            <form class="needs-validation" id="form-checkout" novalidate="">
                            <div class="row g-3">
                                <div class="col-md-7 col-12">
                                    <label for="lastName" class="form-label">Tên</label>
                                    <input type="text" name="customer_name" class="form-control" id="customer_name" placeholder="" required=""/>
                                    <div class="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div class="col-12 col-md-5">
                                    <label for="phone_number" class="form-label">Số điện thoại</label>
                                    <input type="number" id="phone_number" name="phone_number" class="form-control" required=""/>
                                    <div class="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>
                                <LocationForm/>
                            </div>
                            <hr class="my-4"></hr>
                            <div class="form-check">
                                <input type="checkbox" id="status" name="status" class="form-check-input"/>
                                <label class="form-check-label" for="same-address">Đặt làm địa chỉ mặc định</label>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                        <button type="submit" class="btn btn-dark">Lưu</button>
                    </div>
                    </div>
                </div>
                </form>
            </div>
           </>
        )
    }
}export default FormAddress;