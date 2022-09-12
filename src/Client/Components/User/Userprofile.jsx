import React from "react";
import axios from "axios";
import Logout from "../Auth/Logout";
import { Link } from "react-router-dom";

class UserProfile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            profile : {},
            token : window.localStorage.getItem('access_token')
        }
      }
    async componentDidMount(){
        if(this.state.token){
            await axios.get(`https://ecommerce-shop-api-project.herokuapp.com/api/auth/user-profile`,
                {
                    'headers': {
                    'Authorization': 'Bearer ' + this.state.token
                    }
                }
            )
            .then(res => {
            const profile = res.data;
            this.setState({ profile : profile });
            })
            .catch((error) => {
                if( error ){
                    localStorage.removeItem('access_token')
                    localStorage.removeItem('user_name')
                    localStorage.removeItem('email')
                    localStorage.removeItem('users_id')
                }
            })
        }
    }

    render(){
        if(this.state.profile.name){
            return(
                <div class="d-flex align-items-center user-item">
                    <Link class="text-reset me-3" to={`/cart`}>
                        <i class="fas fa-shopping-cart"></i>
                    </Link>
                    <div class="dropdown">
                        <a
                        class="dropdown-toggle d-flex align-items-center hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            class="rounded-circle"
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                        />
                        </a>
                        <ul
                        class="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuAvatar"
                        >
                        <li>
                            <a class="dropdown-item d-inline-block text-truncate" style={{maxWidth : '200px'}} href="#">{this.state.profile.name}</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Settings</a>
                        </li>
                            <Logout/>
                        </ul>
                    </div>
                </div>
            )
        }else{
           return (
            <div class="d-flex align-items-center user-item">
                <Link to={'/login'}>
                    <small style={{color : '#6c757d'}}><i class="fa fa-sign-in" aria-hidden="true"></i> Đăng Nhập</small>
                </Link>
            </div>
           )
        }
    }
}
export default UserProfile;