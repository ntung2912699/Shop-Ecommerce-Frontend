import React from "react";
import './css/style.css';

class PopupSuccess extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div class="col-sm-3 shadow-lg p-3 mb-5 bg-body rounded alert-login-success" id="message-success">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title" style={{fontSize : '100px', color : 'green'}}><i class="fa fa-check" aria-hidden="true"></i></h5>
                        <b>Thành Công</b>
                        <p class="card-text">{this.props.message}</p>
                    </div>
                </div>
            </div>
        )
    }
}export default PopupSuccess;