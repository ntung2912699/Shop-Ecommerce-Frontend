import React from 'react';
import axios from "axios";
import { MDBBtn } from 'mdb-react-ui-kit';

export default function Addtocart(props){

    function AddToCartHandle(){
        let token = localStorage.getItem('access_token')
        let users_id = localStorage.getItem('users_id')
        let product_id = props.product_id;
        let price = props.price;
        let qty = document.getElementById('qty').value
        let btn = document.getElementById("cart_btn")
        let loader = document.getElementById('loader-icon')
        let popupmessage = document.getElementById('popup-message')
        btn.setAttribute('disabled', true)
        loader.style.display = 'block'

        let attrs = props.attribute
        let listVal = [] 
        Object.keys(attrs).map((value)=>{
            let els = document.getElementsByName(value)
            let result = Array.from(els).find((e) => {
                return e.checked == true
            })
            listVal.push(result.value)
        })
        let attributevalue = listVal.toString()
        let res = axios.post(
        'https://ecommerce-shop-api-project.herokuapp.com/api/create-cart',
        {
            'users_id': users_id,
            'products_id': product_id,
            'attributes_value_id': attributevalue,
            'price': price,
            'quantity': qty
        },
        { 
            'headers': {
            'Authorization': 'Bearer ' + token
            }
        })
        .then((res) => {
            btn.removeAttribute('disabled');
            loader.style.display = 'none'           
            popupmessage.style.display = 'block'
            document.getElementById("form-attribute").reset();
            setTimeout(function(){
                popupmessage.style.display = 'none'
             }, 4000);
        })
        .catch((error) => {
            console.log(error);
        })
      }
    return(
        <>
            <MDBBtn rounded className='mx-2' style={{color: 'white'}} color='dark' id="cart_btn" onClick={AddToCartHandle}>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i> Thêm Vào Giỏ
            </MDBBtn>
            <div class="spinner-border" role="status" id='loader-icon' style={{display : 'none', position : 'absolute', left: '60%'}}>
                <span class="visually-hidden">Loading...</span>
            </div>
        </>
    )
}