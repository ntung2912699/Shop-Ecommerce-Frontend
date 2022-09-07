import React from "react";
import axios from "axios";
export default function RemoveItemCart(props)
{

    function RemoveItemCart() {
        let token = localStorage.getItem('access_token')
        let id = props.ids

        let res = axios.delete(
          'https://ecommerce-shop-api-project.herokuapp.com/api/remove-items-cart/'+id,
          { 
            'headers': {
              'Authorization': 'Bearer ' + token
            }
          })
        .then((res) => {
          window.location.href = '/cart';
        }).catch((error) => {
          console.log(error);
      })
        
      }
      
      return (
        <i class="fa fa-trash-o ml-3 text-black-50" onClick={RemoveItemCart} ></i>
        );
}