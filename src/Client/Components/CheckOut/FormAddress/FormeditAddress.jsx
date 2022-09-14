import React from "react";
import LocationFormEdit from "../LocaltionAddress/LocationFormEdit";

class FormeditAddress extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    render(){
        return (
           <>
            <div className="edit-address" style={{position : 'absolute', left : '90%'}}>
                <a type="button" data-bs-toggle="modal" data-bs-target="#formeditAddress">Chỉnh sửa</a>
            </div>

            <div class="modal fade" id="formeditAddress" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                    <b class="modal-title" id="exampleModalLabel">Sửa địa chỉ</b>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="col-md-12 col-lg-12">
                        <h6 class="mb-3">Địa chỉ thanh toán</h6>
                        <form class="needs-validation" id="form-checkout" novalidate="">
                        <div class="row g-3">
                            <div class="col-md-7 col-12">
                                <label for="lastName" class="form-label">Tên</label>
                                <input type="text" class="form-control" defaultValue={this.props.address.customer_name} id="lastName" placeholder="" required=""/>
                                <div class="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>

                            <div class="col-md-5 col-12">
                                <label for="address" class="form-label">Số điện thoại</label>
                                <input type="number" class="form-control" defaultValue={this.props.address.phone_number} required=""/>
                                <div class="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>
                            <LocationFormEdit address={this.props.address}/>
                        </div>
                        <hr class="my-4"></hr>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="same-address"/>
                            <label class="form-check-label" for="same-address">Đặt làm địa chỉ mặc định</label>
                        </div>
                    </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-dark">Save changes</button>
                </div>
                </div>
            </div>
            </div>
           </>
        )
    }
}export default FormeditAddress;