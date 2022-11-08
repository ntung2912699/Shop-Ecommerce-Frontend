import React from "react";
import { Link } from "react-router-dom";

class Policy extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render(){
        return (
            <>
                <section className="container" style={{paddingTop : '4rem'}}>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to={`/`}>Trang Chủ</Link></li>
                        <li class="breadcrumb-item active">Chính Sách Bảo Hành</li>
                    </ol>
                </nav>
                <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Mua bán xe</a>
                    <a class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Thủ Tục Hành Chính</a>
                    <a class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Thanh Toán - Trả Góp</a>
                    <a class="nav-link" id="nav-setting-tab" data-bs-toggle="tab" data-bs-target="#nav-setting" type="button" role="tab" aria-controls="nav-setting" aria-selected="false">Cam Kết - Bảo Hành</a>
                </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="col-12 col-md-10 offset-md-1" style={{paddingTop : '2rem'}}>
                            <h4>Chính Sách Bán Xe</h4>
                            <ul>
                                <li>Smart Auto bày bán đa dạng các chủng loại xe khác nhau để quý khách tha hồ lựa chọn. Quý khách có thể tham khảo các mẫu xe trên website này hoặc đến trực tiếp showroom để được trải nghiệm những chiếc xe mà quý khách yêu thích.</li>
                                <li>Nếu ưng ý với chiếc xe nào trên website này, quý khách nên liên hệ với Smart Auto theo hotline 0362912699 trước khi đến xem xe, để tránh trường hợp xe đã được bán trước đó.</li>
                                <li>Thấu hiểu tâm lý khách hàng, Smart Auto đã trang bị cầu nâng xe ngay tại showroom để quý khách có thể kiểm tra khung gầm, máy móc của xe một cách thuận tiện nhất. Nếu chưa có kinh nghiệm xem xe, quý khách hàng có thể dẫn theo người thợ mà mình tin tưởng nhất tới kiểm tra.</li>
                                <li>Bên cạnh đó, Smart Auto cũng hỗ trợ kiểm tra xe tại hãng hoặc các gara khác theo chỉ định của quý khách. Nếu không đúng với cam kết, chúng tôi sẽ chịu chi phí này.</li>
                                <li>Trong trường hợp quý khách mua xe từ xa, không có điều kiện xem xe trực tiếp. Smart Auto sẽ hỗ trợ quay, chụp ảnh xe chi tiết theo yêu cầu của quý khách.</li>
                                <li>Sau đó làm thủ tục mua bán rồi gửi xe đến với quý khách sau khi nhận thanh toán 70% giá trị xe.
                                Hồ sơ xe sẽ được hoàn thiện và gửi đi sau khi quý khách thanh toán nốt phần còn lại.</li>
                            </ul>
                            <h4>Thu Mua, Trao Đổi Xe Cũ</h4>
                            <ul>
                                <li>Bên cạnh việc bán xe, Smart Auto nhận thu mua xe cũ của quý khách với giá tốt nhất.</li>
                                <li>Đặc biệt, giảm trực tiếp 5-10 triệu đồng tiền mặt đối với khách hàng có nhu cầu đổi xe tại showroom chúng tôi.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className="col-12 col-md-10 offset-md-1" style={{paddingTop : '2rem'}}>
                            <h4>Bạn Cần Biết:</h4>
                            <p>Nhiều khách hàng không khỏi lúng túng khi nhắc đến các thủ tục hành chính vì có quá nhiều công đoạn cũng như các loại giấy tờ. Để quý khách không phải mất công sức và thời gian, hãy để những đơn vị chuyên nghiệp, giàu kinh nghiệm như chúng tôi làm điều đó.
                                Auto Smart cung cấp dịch vụ làm thủ tục công chứng, sang tên, rút hồ sơ chuẩn chỉ, nhanh gọn khi quý khách mua xe tại showroom chúng tôi.</p>
                            <p>Quý khách chỉ cần để lại BẢN GỐC của những giấy tờ sau:</p>
                            <ul>
                                <li>Căn cước công dân</li>
                                <li>Sổ hộ khẩu</li>
                            </ul>
                            <h4>Về các thủ tục:</h4>
                            <p><span><strong>Công chứng:</strong></span></p>
                            <ul>
                                <li>Thời gian: 1 ngày</li>
                                <li>Tổng chi phí: 500 nghìn đồng</li>
                            </ul>
                            <p><span><strong>Sang tên:</strong></span></p>
                            <ul>
                                <li>Thời gian: cấp giấy hẹn sau 1-2 ngày, cấp đăng ký gốc sau đó 3 ngày.</li>
                                <li>Phí dịch vụ: 2,3 triệu đồng</li>
                                <li>Thuế sang tên: quý khách xem cách tính thuế <a href="https://autoanhtuan.vn/chi-phi-va-thu-tuc-sang-ten-xe-o-to-cu/">tại đây.</a></li>
                            </ul>
                            <p><span><strong>Rút hồ sơ ( dành cho khách hàng mua xe khác tỉnh, thành phố ):</strong></span></p>
                            <ul>
                                <li>Thời gian: 4 ngày</li>
                                <li>Tổng chi phí: 2-3 triệu đồng</li>
                            </ul>
                            <u>Lưu ý: thời gian hoàn thành hồ sơ không bao gồm thứ 7, chủ nhật và cách ngày nghỉ lễ.</u>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div className="col-12 col-md-10 offset-md-1" style={{paddingTop : '2rem'}}>
                            <h4>Thanh Toán</h4>
                            <p>Auto Smart nhận đặt cọc, thanh toán trực tiếp bằng tiền mặt hoặc chuyển khoản qua tài khoản ngân hàng ( thông tin chi tiết sẽ được cung cấp khi quý khách mua xe ).</p>
                            <h4>Trả Góp</h4>
                            <p>Auto Smart liên kết với một số ngân hàng như TPbank, VP bank, VIB, BIDV,… để hỗ trợ các khoản vay mua xe. Quý khách có thể vay lên đến 70% giá trị xe, trong thời gian từ 1-6 năm với lãi suất ưu đãi.</p>
                            <p><span><strong>Điều kiện vay:</strong></span></p>
                            <ul>
                            <li>Là công dân Việt Nam, trong độ tuổi lao động ( từ 18-60 tuổi )</li>
                            <li>Không nợ xấu</li>
                            <li>Hộ khẩu thường trú tại Hà Nội hoặc các tỉnh lân cận</li>
                            <li>Xe không quá 8 năm tính từ thời điểm xuất xưởng</li>
                            </ul>
                            <p><span><strong>Hồ sơ vay</strong></span>, quý khách cung cấp Bản Gốc&nbsp;của các loại giấy tờ sau:</p>
                            <ul>
                            <li>Căn cước công dân</li>
                            <li>Sổ hộ khẩu</li>
                            <li>Đăng ký kết hôn ( hoặc giấy chứng nhận độc thân của địa phương )</li>
                            </ul>
                            <p><strong>Thời gian làm thủ tục: </strong>khoảng 7 ngày (tính cả thời gian làm thủ tục sang tên), không bao gồm thứ 7, chủ nhật và các ngày nghỉ lễ.</p>
                            <p><u>Lưu ý: sang tên chính chủ là yêu cầu bắt buộc để được làm thủ tục trả góp.</u></p>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-setting" role="tabpanel" aria-labelledby="nav-setting-tab">
                    <div className="col-12 col-md-10 offset-md-1" style={{paddingTop : '2rem'}}>
                        <h4>Cam Kết</h4>
                            <ul>
                                <li>Xe không tai nạn, ngập nước, máy móc và khung gầm nguyên bản</li>
                                <li>Bao check hãng hoặc kiểm tra tại gara quý khách chỉ định</li>
                                <li>An ninh, pháp lý đảm bảo, không tranh chấp, phạt nguội</li>
                                <li>Smart Auto sẽ có trách nhiệm nhận lại xe và hoàn trả đủ tiền cho quý khách nếu không đúng với cam kết</li>
                            </ul>
                            <h4>Bảo Hành, Đổi Trả, Hậu Mãi.</h4>
                            <h5>Bảo hành động cơ:</h5>
                            <ul>
                                <li>Bảo hành lên đến 12 tháng hoăc 20.000 km đối với những xe lướt dưới 3 năm</li>
                                <li>6 tháng hoặc 10.000 km đối với xe dưới 5 năm tuổi</li>
                                <li>3 tháng hoặc 5000 km đối với xe trên 5 năm tuổi</li>
                            </ul>
                            <p><em>Đối với những xe có các lỗi do nhà sản xuất, Smart Auto sẽ hướng dẫn quý khách bảo hành tại hãng.</em></p>
                            <h5>Bảo hành khung gầm:</h5>
                            <p>Trong trường hợp quý khách không thể kiểm tra xe tại thời điểm mua vì lý do nào đó. Smart Auto sẽ cam kết bằng văn bản trong 7 ngày để quý khách sắp xếp thời gian đi kiểm tra. Nếu phát hiện lỗi, hãy liên hệ ngay với chúng tôi để được hỗ trợ bảo hành kịp thời.</p>
                            <h5>Bảo hành pháp lý:</h5>
                            <p>Smart Auto khuyến khích quý khách hàng sang tên ngay khi mua xe để tránh trường hợp phát sinh kiện tụng, tranh chấp. Tuy nhiên, nếu quý khách chưa có nhu cầu sang tên, chúng tôi vẫn sẽ thực hiện cam kết nếu vấn đề trên không may xảy ra.</p>
                            <p>Về phạt nguội, chúng tôi sẽ chịu trách nhiệm nộp phạt tất cả các lỗi xảy ra trước ngày bàn giao xe cho quý khách.</p>
                            <h5>Không bảo hành:</h5>
                            <ul>
                            <li>Đối với những linh kiện đến kỳ hạn phải thay thế, ví dụ như: acquy, lốp, dây curoa,…</li>
                            <li>Những phụ kiện lắp thêm, ví dụ như: Nắp thùng bán tải, camera hành trình, màn hình android,…</li>
                            <li>Do quá trình sử dụng, bảo quản xe không đúng cách:
                            <ul>
                            <li>Độ chế, thay đổi kết cấu xe</li>
                            <li>Đổ xăng vào động cơ diesel hoặc ngược lại</li>
                            <li>Không bảo dưỡng định kỳ đều đặn</li>
                            <li>Các chi tiết hỏng hóc do chuột, côn trùng,… phá hoại</li>
                            <li>Các lỗi do tai nạn, ngập nước,… sau khi quý khách sử dụng</li>
                            </ul>
                            </li>
                            <li>Xảy ra tranh chấp với chủ mới của xe</li>
                            </ul>
                            <h5>Hậu mãi:</h5>
                            <ul>
                            <li>Smart Auto luôn đồng hành cùng quý khách ngay cả khi xe đã hết thời hạn bảo hành, hãy liên hệ với chúng tôi nếu cần tư vấn về cách sử dụng xe cũng như các thủ tục hành chính.</li>
                            <li>Đặc biệt, Smart Auto có chính sách giá ưu đãi đối với khách hàng đã từng mua xe tại đây.</li>
                            <li>Đối với khách hàng muốn bán lại xe đã từng mua tại Smart Auto, chúng tôi sẽ nhập lại với giá tốt hơn so với khi quý khách bán ra ngoài thị trường.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </section>
            </>
        )
    }
}
export default Policy;