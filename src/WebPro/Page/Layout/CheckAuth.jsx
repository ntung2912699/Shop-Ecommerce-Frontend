import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logout from "../../Component/Auth/Logout";
import domainApi from "../../../Config/ConfigDomainAPI";

class CheckAuth extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
      }

    componentDidMount(){
        const token = window.localStorage.getItem('access_token');
        if (token) {
            axios.get(`${domainApi}/api/auth/check-login`,
            {
                'headers': {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(response => {
            const isLogin = response.data;
                this.setState({
                    isLogin : isLogin 
                });
            })
            .catch((error) => {
                console.log(error);
                if( error ){
                    localStorage.removeItem('access_token')
                    localStorage.removeItem('user_name')
                    localStorage.removeItem('email')
                    localStorage.removeItem('users_id')
                    this.setState({
                        notLogin : true,
                    })
                }
            })
        }
    }
    render(){
        function hideNav() {
            const element = document.getElementById("navbarSupportedContent");
            if(element){
                element.classList.remove("show");
            }
        }
       if(this.state.isLogin){
            const name = window.localStorage.getItem('user_name')
            return(
                <>
                <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" to={`#`} id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tài Khoản
                    </Link>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><Link to={`#`} onClick={hideNav} class="dropdown-item">{name}</Link></li>
                        <li><Link to={`/admin`} onClick={hideNav} class="dropdown-item">Admin Site</Link></li>
                        <li><Link to={`/change-password`} onClick={hideNav} class="dropdown-item">Đổi mật khẩu</Link></li>
                        <li><Logout/></li>
                    </ul>
                </li>
                </>
            )
        }else{
            return(
                <>
                    <li class="nav-item">
                        <Link class="nav-link" onClick={hideNav} to={'/login'}>
                            Tài Khoản
                        </Link>
                    </li> 
                </>
            )
        }
    }
}export default CheckAuth;