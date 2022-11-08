import React from "react";
import FormatPrice from "../../FormatData/FormatPrice";

class CustomerReviewContent extends React.Component{
    constructor(props) {
        super(props);
    };

    render(){
        
        if(this.props.data){
            return(
                <>
                    <section className="py-2">
                    <div className="row">
                        <div className="col-12 col-md-7">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                    <a class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                       <b> Mô Tả Sản Phẩm</b>
                                    </a>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>{this.props.data.short_description}</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                    <a class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                       <b>Ước Tính Chi Phí Mua Xe Tại Hà Nội</b>
                                    </a>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="collapseTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div className="text-left">
                                            <ul>
                                                <li>Phí Trước Bạ : </li>
                                                <li>Phí Đường Bộ : </li>
                                                <li>Phí Đổi Biển : </li>
                                                <li>Tổng ước tính :  <b><FormatPrice price={this.props.data.price}/></b></li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5" style={{paddingTop : '1rem', paddingBottom : '1rem'}}>
                        <div class="col-12 text-center">
                            <div class="card">
                            <div class="card-body">
                                <a><h6 class="card-title">Auto Smart</h6></a>
                                <p class="card-text"><a href="https://www.google.com/maps/place/17+P.+Duy+T%C3%A2n,+D%E1%BB%8Bch+V%E1%BB%8Dng+H%E1%BA%ADu,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0307692,105.7805666,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab4ca83a8b6f:0x129d06cbf7f8acca!8m2!3d21.0307692!4d105.7827553?hl=vi-VN">
                                    Địa chỉ : 17 Duy Tân, Cầu Giấy, Hà Nội</a></p>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-outline-primary" onClick={function(){window.location.href = 'https://vi-vn.facebook.com/'}} type="button"><i class="fa fa-facebook-square" aria-hidden="true"></i> Auto Smart</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <section className="py-2">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h5><b><i class="fa fa-university" aria-hidden="true"></i> Hỗ Trợ</b></h5>
                            <ul>
                                <li>Trả góp ngân hàng lên đến 75% đối với những xe đời cao</li>
                                <li>Trợ giá đối với khách hàng đổi xe</li>
                                <li>Dịch vụ rút hồ sơ, sang tên,... nhanh gọn.</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6">
                            <h5><b><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Cam Kết</b></h5>
                            <ul>
                                <li>Xe không tai nạn, ngập nước</li>
                                <li>Bao check hãng hoặc kiểm tra tại gara quý khách chỉ định</li>
                                <li>Bảo hành lên đến 12 tháng đối với những xe lướt dưới 3 năm</li>
                                <li>An ninh, pháp lý đảm bảo, không tranh chấp, phạt nguội</li>
                                <li>Auto Anh Tuấn sẽ có trách nhiệm nhận lại xe và hoàn trả đủ tiền cho quý khách nếu không đúng với cam kết</li>
                            </ul>
                        </div>
                    </div>
                </section>
                </>
            )
        }
    }
}
export default CustomerReviewContent;