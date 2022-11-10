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
                    src='https://car-valet.ie/wp-content/uploads/2021/07/bnpic.jpg'
                    alt='...'
                >
                    <h5>AUTO SMART</h5>
                    <p>Uy Tín Được Đặt Lên Hàng Đầu</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    style={{maxHeight : '22rem'}}
                    itemId={2}
                    src='https://lh4.googleusercontent.com/-t0lzSZgPzdE/UUvNt2W3UgI/AAAAAAAAGnQ/B2FrSFB7fzE/s1600/Anh-bia-oto-xe-hop-+(11).jpg'
                    alt='...'
                >
                    <h5>AUTO SMART</h5>
                    <p>Chất Lượng Là Tiêu Chí Thiết Yếu</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    style={{maxHeight : '22rem'}}
                    itemId={3}
                    src='https://lh4.googleusercontent.com/-YrtjY9_wc0g/UUvSXEYbKrI/AAAAAAAAGu8/EKEQ0icBHuw/s1600/Anh-bia-oto-xe-hop-+(63).jpg'
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