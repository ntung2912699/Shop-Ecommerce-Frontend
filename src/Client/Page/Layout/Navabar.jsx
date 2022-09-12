import React from "react";
import SeachFetch from "../../Components/Search/SearchFetch";
import UserProfile from "../../Components/User/Userprofile";
import { Link } from "react-router-dom";

class Navabar extends React.Component{
    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container">
                <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link class="navbar-brand mt-2 mt-lg-0" to={'/'}>
                    <img
                    src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                    height="15"
                    alt="MDB Logo"
                    loading="lazy"
                    />
                </Link>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link" href="#">Dashboard</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Team</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li lass="nav-item">
                        <SeachFetch/>
                    </li> 
                </ul>
                </div>
                <UserProfile/>
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
            </nav>
        )
    }
}export default Navabar;