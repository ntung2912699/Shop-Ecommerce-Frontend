import React from "react";
import SeachFetch from "../../Components/Search/SearchFetch";
import UserProfile from "../../Components/User/Userprofile";
import { Link } from "react-router-dom";

class Navabar extends React.Component{
    render(){
        return (
            <header className="py-3 mb-3 bg-danger shadow-lg fixed-top">
                <div style={{'grid-template-columns': '1fr 2fr', color : 'white'}}>
                <div className='container d-grid gap-3 align-items-center'>
                    <div className='row'>
                    <div className='d-flex align-items-left row' style={{margin: '-1.4rem 0px 1.2rem 0px'}}>
                        <div className='small-header col-6' style={{padding: '6px 9px 0px 0px'}}>
                            <a> <small><i className="fa fa-phone-square" aria-hidden="true"></i> Liên Hệ</small> </a> | <small>Kết Nối 
                            <a> <i style={{padding : '0px 0px 0px 0px'}} className="fa fa-twitter-square" aria-hidden="true"></i>  </a>
                            <a> <i style={{padding : '0px 0px 0px 0px'}} className="fa fa-facebook-official" aria-hidden="true"></i> </a>
                            </small> 
                        </div>
                        <UserProfile/>
                    </div>
                    </div>
                </div>
                <div className='container d-grid gap-3 align-items-center'>
                    <div className="d-flex align-items-center">
                    <div className='logo' style={{padding: '6px 9px 0px 0px'}}>
                    <Link to={`/`}><h5 style={{color: 'white'}}>TSHOP</h5></Link>
                    </div>
                    <SeachFetch/>
                    <div className="flex-shrink-0">
                    <Link to={`/cart`} style={{color: 'white', fontSize: '2rem'}}><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card shadow-lg p-3 mb-5 bg-body rounded text-center popup-message position-absolute top-50 start-50 translate-middle" id="popup-message">
                <div className="card-body">
                    <h5 tyle={{color : 'green'}} className="card-title">Thành Công</h5>
                    <p className="card-text" style={{color : 'green', fontSize : '5rem'}}>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </p>
                    <Link to={`#`} onClick={
                        function(){
                            document.getElementById('popup-message').style.display = 'none';
                        }
                    } className="btn btn-outline-success">Đóng</Link>
                </div>
            </div>
            </header>
        )
    }
}export default Navabar;