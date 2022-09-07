import React from "react";
import axios from "axios";
import Logout from "../Auth/Logout";

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
                <div className='small-header col-6' style={{padding: '6px 9px 0px 0px', textAlign : 'right'}}>
                    <a><small><i class="fa fa-user" aria-hidden="true"></i> {this.state.profile.name}</small> </a> | <Logout/>
                </div>
            )
        }else{
           return (
            <div className='small-header col-md-6 col-xs-6 col-sm-6' style={{padding: '6px 9px 0px 0px', textAlign : 'right'}}>
                <a href="/login"><small style={{color : 'white'}}><i class="fa fa-sign-in" aria-hidden="true"></i> Đăng Nhập</small></a> | <a href="/login"><small style={{color : 'white'}}><i class="fa fa-user-plus" aria-hidden="true"></i> Đăng Kí</small></a>
            </div>
           )
        }
    }
}
export default UserProfile;