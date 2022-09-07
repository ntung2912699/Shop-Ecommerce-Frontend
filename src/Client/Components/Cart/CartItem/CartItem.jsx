import { useState } from "react";
import React from "react";
import CheckoutBox from "../CartCheckBox/CheckBox";
import RemoveItemCart from "../RemoveItemCart/RemoveItemCart";
import axios from "axios";

export default function CartItem(props){
    const [totals, setTotals] = useState()
    if (props.cart.success) {
        let items = props.cart.success.list_cart_item;
        let total = 0;
        return <>
            <section class="h-100 gradient-custom">
              <div class="cart-content">
                <div class="row d-flex justify-content-center my-4">
                  <div class="col-md-8">
                    <div class="shadow p-3 mb-5 bg-body rounded">
                      <div class="card mb-4">
                      <div class="card-header py-3">
                        <h5 class="mb-0">Giỏ Hàng Của Bạn</h5>
                      </div>
                      <div class="card-body">
                      {
                        items.map((element, index) => { 
                            {
                              total += element.price*element.quantity
                            }
                            return<><div key={index} class="row">
                          <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                              <img src={element.product.thumbnail}
                                class="w-100" alt="Blue Jeans Jacket"/>
                              <a href="#!">
                                <div class="mask"></div>
                              </a>
                            </div>
                          </div>
                        <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          <p><strong>{element.product.name}</strong></p>
                          {
                              element.list_attribute_cart.map(e => {
                                return <p><b>{e.attribute.name}</b> : {e.attributevalue.value}</p>
                              })
                          }
                          <RemoveItemCart ids={element.id}/>
                          <button type="button" class="btn btn-outline-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                            title="Move to the wish list">
                            <i class="fas fa-heart"></i>
                          </button>
                        </div>
    
                        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div class="d-flex mb-4" style={{maxWidth : '300px'}}>
                            <button class="btn btn-outline-dark px-3 me-2"
                              onClick={
                                  function minusClick(){
                                      let val = document.getElementById(`cart-qty-${element.id}`).value
                                      if(val <= 1){
                                          document.getElementById(`cart-qty-${element.id}`).value = 1;
                                      }else{
                                        const id = element.id
                                        let token = localStorage.getItem('access_token')
                                        let res = axios.post(
                                          'https://ecommerce-shop-api-project.herokuapp.com/api/update-qty-cart/'+id,
                                          {
                                            'method': 0
                                          },
                                          { 
                                            'headers': {
                                              'Authorization': 'Bearer ' + token
                                            }
                                          })
                                        .then((res) => {
                                          document.getElementById(`cart-qty-${element.id}`).value--;
                                        }).catch((error) => {
                                          console.log(error);
                                      })
                                      }
                                  }
                              }>
                        <i class="fas fa-minus"></i>
                      </button>
    
                      <div class="form-outline">
                       <input id={`cart-qty-${element.id}`} min="0" name="quantity" value={element.quantity} type="num" class="form-control" />
                      </div>
    
                      <button class="btn btn-outline-dark px-3 ms-2"
                        onClick={
                            function plusClick(){
                              const id = element.id
                                let token = localStorage.getItem('access_token')
                                let res = axios.post(
                                  'https://ecommerce-shop-api-project.herokuapp.com/api/update-qty-cart/'+id,
                                  {
                                    'method': 1
                                  },
                                  { 
                                    'headers': {
                                      'Authorization': 'Bearer ' + token
                                    }
                                  })
                                .then((res) => {
                                  document.getElementById(`cart-qty-${element.id}`).value++;
                                }).catch((error) => {
                                  console.log(error);
                              })
                            }
                        }>
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                    <p class="text-start text-md-center">
                      <strong>Giá : {element.price} VND</strong>
                    </p>
                  </div>
                </div>
                <hr class="my-4" />      
                </>
                 })}
              </div>
            </div>
          </div>
          </div>
           {setTotals(total)}
            <CheckoutBox totals={parseFloat(totals)}/>
        </div>
      </div>
    </section>
        </>
      }
}