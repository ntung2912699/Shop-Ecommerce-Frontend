import React from "react";
import axios from "axios";

class CreateOrder extends React.Component{
    constructor(props){
        super(props);
    }
    async componentDidMount(){
        let token = window.localStorage.getItem('access_token')
        await axios.get(`https://ecommerce-shop-api-project.herokuapp.com/api/create-order`,
            { 
                'headers': {
                'Authorization': 'Bearer ' + token
                },
                'users_id' : window.localStorage.getItem('users_id'),
                'address_id' : this.props.address_id,
                'payment_method_id' : this.props.payment_method_id,
                'shiping_method_id' : this.props.shiping_method_id,
                'status_id' : 1,
                'phone_number' : this.props.phone_number,
                'grand_total' : this.props.grand_total,
                'note' : this.props.note,
                'order_item' : JSON.parse(window.sessionStorage.getItem('products'))

                // 'products_id' : this.props.products_id,
                // 'attribute_value_id' : this.props.attribute_value_id,
                // 'price' : this.props.price,
                // 'quantity' : this.props.quantity,
                // 'total' : this.props.total
            }
          )
        .then(res => {
          const profile = res.data;
          console.log('success');
        })
        .catch(error => console.log(error));
    }
    render(){
        return(
            <button class="w-100 btn btn-danger btn-lg" type="submit">Tiếp Tục Đặt Hàng</button>
        )
    }
}
export default CreateOrder;