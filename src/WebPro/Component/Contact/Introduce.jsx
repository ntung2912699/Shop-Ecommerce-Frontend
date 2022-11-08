import React from "react";
import { Link } from "react-router-dom";

class Introduce extends React.Component{
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
                        <li class="breadcrumb-item active">Giới Thiệu</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <img style={{width:'100%', paddingBottom : '2rem'}} src="https://thoibaotaichinhvietnam.vn/stores/news_dataimages/nguyenthihoaithu/122021/17/11/vietnams-auto-market-posts-solid-growth20211217113403.9872680.jpg"></img>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="title text-center">
                            <h3>Smart Auto</h3>
                        </div>
                        <p>Là đơn vị chuyên kinh doanh ô tô đã qua sử dụng, chính thức hoạt động từ năm 2007. Với thâm niên hàng chục năm trong nghề, Auto Anh Tuấn đã bán trên 4000 chiếc xe các loại, từ dòng xe thông dụng như Toyota, Hyundai, Kia,… đến những dòng xe cao cấp như Mercedes, Lexus, LandRover,…</p>
                        <p>Bên cạnh đó, để đảm bảo có những chiếc xe tốt nhất khi tới tay khách hàng, Smart Auto luôn đề ra những tiêu chuẩn khắt khe khi nhập xe về showroom. Những tiêu chí hàng đầu đó là:</p>
                        <ul>
                            <li>An ninh, pháp lý đảm bảm ( giấy tờ hợp lệ, không tranh chấp, phạt nguội,…)</li>
                            <li>Xe không tai nạn, khung gầm nguyên bản</li>
                            <li>Máy móc không thủy kích, bó máy ( bảo hành theo chính sách của Smart Auto )</li>
                        </ul>
                        <p>Smart Auto luôn đồng hành, hỗ trợ quý khách sau nhiều năm mua xe. Do đó, nhiều khách hàng đã tin tưởng giới thiệu với người thân, bạn bè hoặc tiếp tục quay lại mua xe khi có nhu cầu.</p>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
export default Introduce;