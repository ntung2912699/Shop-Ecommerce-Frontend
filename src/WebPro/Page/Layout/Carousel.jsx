import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

class Carousel extends React.Component{
    render(){
        return(
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='w-100 d-block'
                    style={{maxHeight : '22rem'}}
                    itemId={1}
                    src='https://i.ytimg.com/vi/JxloIoQRz8o/maxresdefault.jpg'
                    alt='...'
                >
                    <h5>AUTO SMART</h5>
                    <p>Uy Tín Được Đặt Lên Hàng Đầu</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    style={{maxHeight : '22rem'}}
                    itemId={2}
                    src='https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw1e8cc92f/images/PDP/vf8/img-top.jpg'
                    alt='...'
                >
                    <h5>AUTO SMART</h5>
                    <p>Chất Lượng Là Tiêu Chí Thiết Yếu</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    style={{maxHeight : '22rem'}}
                    itemId={3}
                    src='https://storage.googleapis.com/f1-cms/2020/12/95d3ef51-20201217_080524.jpg'
                    alt='...'
                >
                    <h5>AUTO SMART</h5>
                    <p>Thoả Mãn Khách Hàng Là Giá Trị Quan Trọng</p>
                </MDBCarouselItem>
                </MDBCarousel>
        )
    }
}
export default Carousel;