import React from "react";
import ListCartPage from "./ListCart/ListCartComponent";

class CartPage extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <ListCartPage/>
                </div>
          </div>
        )
    }
}
export default CartPage;