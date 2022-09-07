import React from "react";
import { Link } from "react-router-dom";

class CheckOutButton extends React.Component{

    constructor(props) {
        super(props);
      }
    
      pushDataSession = () => {
        window.sessionStorage.setItem('products', JSON.stringify(this.props.products))
        window.sessionStorage.setItem('grand_total', this.props.total)
      }
    render(){
        // if( window.sessionStorage.getItem('grand_total'))
        // {
        //     console.log('aaa', window.sessionStorage.getItem('grand_total'));
        // }
        return(
            <div class="d-grid gap-2">
                <button class="btn btn-danger" onClick={this.pushDataSession} type="button">
                    <Link style={{color: 'white'}} to={`/check-out`}>Tiến Hành Thanh Toán</Link>
                </button>
            </div>
        )
    }
}
export default CheckOutButton;