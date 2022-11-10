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
                        src="https://static.wixstatic.com/media/6f1180_ab3dc37dd898402d8e20a625a6a3bec2~mv2.png/v1/crop/x_0,y_309,w_3508,h_1402/fill/w_905,h_362,al_c,usm_0.66_1.00_0.01,enc_auto/autosmart%20logo%20stoke.png"
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