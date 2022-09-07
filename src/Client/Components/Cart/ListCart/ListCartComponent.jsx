import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import CheckoutBoxPage from "../CartCheckBox/CheckBox";
import RemoveItemCart from "../RemoveItemCart/RemoveItemCart";
import FormatPrice from "../../FormatData/FormatPrice";
import '../style/listcart.css';

function ListCart(props){
  if (props.cart.success) {
    let items = props.cart.success.list_cart_item;
    let total = 0;
    return <>
        <div class="container mt-3 p-3 rounded cart">
        <div class="row no-gutters">
            <div class="col-md-8">
                <div class="product-details mr-2">
                    <div class="d-flex flex-row align-items-center"><i class="fa fa-long-arrow-left"></i><span class="ml-2" onClick={function(){window.location.href = '/'}} >Tiếp tục mua hàng</span></div>
                    <hr/>
                    <h6 class="mb-0">Giỏ hàng của bạn</h6>
                    {
                        items.map((element, index) => { 
                            {
                              total += element.price*element.quantity
                            }
                            return <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded row">
                            <div class="d-flex flex-row col-12 col-md-8"><img class="rounded" src={element.product.thumbnail} width="100" height="100"/>
                                <div class="md-12">
                                <Link to={`/detail-product/${element.product.id}`}>
                                  <span class="font-weight-bold d-block">{element.product.name}
                                  </span>
                                  </Link>
                                  {
                                      element.list_attribute_cart.map(e => {
                                        return <><span class="spec"><b>{e.attribute.name} : </b> {e.attributevalue.value}</span><br/></>
                                      })
                                  }
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-center col-md-4 col-12">
                              <span class="d-block">Số lượng : {element.quantity}</span>
                              <span class="d-block ml-5 font-weight-bold" style={{color: '#d00031'}}><FormatPrice price={element.price} /></span>
                              <RemoveItemCart ids={element.id}/>
                            </div>
                        </div>
                        })
                    }
                </div>
            </div>
            <CheckoutBoxPage totals={parseFloat(total)} itemcart={items}/>
            </div>
          </div>
    </>
  }
}

export default function ListCartComponent(){
    const [items, setItems] = useState([]);
    const [totals, setTotals] = useState([]);
    const token = localStorage.getItem('access_token');
    let userIds = localStorage.getItem('users_id');

    useEffect(() => {
        fetch('https://ecommerce-shop-api-project.herokuapp.com/api/get-cart-by-user/'+userIds,
            { 
                'headers': {
                'Authorization': 'Bearer ' + token
                }
            }
        )
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result);
            }
          ).catch((error) => {
            console.log(error);
        })
      }, [])
      if(items.success){
        return(
            <>
                <ListCart cart={items}/>
            </>
        )
      }else{
        return(
            <div class="spinner-border text-danger cart-spinner" id="cart-loader" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            )
      }
}