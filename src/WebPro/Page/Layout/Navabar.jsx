import React from "react";
import SeachFetch from "../../Component/Search/SearchFetch";
import { Link } from "react-router-dom";
import CheckAuth from "./CheckAuth";

class Navabar extends React.Component{
    render(){
        function hideNav() {
            const element = document.getElementById("navbarSupportedContent");
            element.classList.remove("show");
        }
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
                    <Link class="navbar-brand nav-logo" to={'/'}>
                        <img className="logo-png"
                        src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Free-Car-Logo-Design-Source-PNG-Transparent.png"
                        height="50"
                        />
                    </Link>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link class="nav-link" onClick={hideNav} to={'/shop/all-shop'}>Cửa Hàng</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" onClick={hideNav} to={'/introduce'}>Giới Thiệu</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" onClick={hideNav} to={'/policy'}>Chính Sách</Link>
                            </li>
                            <CheckAuth/> 
                        </ul>
                        <div class="navbar-nav">
                            <SeachFetch/>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}export default Navabar;