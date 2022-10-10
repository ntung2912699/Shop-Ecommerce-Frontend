import React from "react";
import axios from "axios";
import domainApi from "../../../Config/ConfigDomainAPI";

class CheckAuth extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            checkauth : true,
            profile : {},
            token : window.localStorage.getItem('access_token'),
            id : window.localStorage.getItem('users_id')
        }
      }
    async componentDidMount(){
        if(this.state.token){
            await axios.get(`${domainApi}/api/get-profile-by-user/`+this.state.id,
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
                    this.setState({
                        checkauth : false,
                    })
                }
            })
        }
        if(this.state.checkauth == false){
            window.location.href = '/webpro/login'
        }
    }
}
export default CheckAuth;