import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logout from "../../Component/Auth/Logout";
import domainApi from "../../../Config/ConfigDomainAPI";

class CheckAuth extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            profile : null,
            checkAuth : null,
        }
      }

      async componentDidMount(){
        const token = window.localStorage.getItem('access_token');
        if (token) {
            await axios.get(`${domainApi}/api/auth/user-profile`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                  }
            }).then(response => {
            const profile = response.data;
                this.setState({ profile : profile });
            })
            .catch((error) => {
                console.log(error);
                if( error ){
                    // localStorage.removeItem('access_token')
                    // localStorage.removeItem('user_name')
                    // localStorage.removeItem('email')
                    // localStorage.removeItem('users_id')
                    this.setState({
                        checkAuth : false,
                    })
                }
            })
        }
    }
    render(){
       if(this.state.profile){
        if (this.state.profile.name) {
            return(
                <>
                <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" to={`#`} id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tài Khoản
                    </Link>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><Link to={`#`} class="dropdown-item">{this.state.profile.name}</Link></li>
                        <li><Link to={`/admin`} class="dropdown-item">Admin Site</Link></li>
                        <li><Link to={`/change-password`} class="dropdown-item">Đổi mật khẩu</Link></li>
                        <li><Logout/></li>
                    </ul>
                </li>
                </>
            )
        }else{
            return(
                <>
                 <li class="nav-item">
                    <Link class="nav-link" to={'/login'}>
                        Tài Khoản
                    </Link>
                </li> 
                </>
            )
        }
       }
       return(
        <>
        <li class="nav-item">
            <Link class="nav-link" to={'/login'}>
                Tài Khoản
            </Link>
        </li> 
        </>
    )
    }
}export default CheckAuth;