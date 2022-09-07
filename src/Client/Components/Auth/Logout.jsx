import React from "react";
import axios from "axios";

class Logout extends React.Component{
    async LogoutHandler(){
        let token = localStorage.getItem('access_token')
        await axios.post(
            'https://ecommerce-shop-api-project.herokuapp.com/api/auth/logout',
                {
                    'status': 'logout'
                },
                { 
                    // Authorization: `Bearer ${token}`
                    'headers': {
                    'Authorization': 'Bearer ' + token
                    }
                })
                .then((res) => {
                localStorage.removeItem('access_token')
                localStorage.removeItem('user_name')
                localStorage.removeItem('email')
                localStorage.removeItem('users_id')
                window.location.href = '/login';
                }).catch((error) => {
                console.log(error);
            })
        }
    render(){
        return (
            <a href='#' onClick={this.LogoutHandler}><small style={{color : 'white'}}><i className="fas fa-sign-out-alt fa-fw"></i>Thoát</small></a>
            );
    }
}
export default Logout;