import React from "react";
import { useEffect, useState } from "react";
import FormatPrice from "../../FormatData/FormatPrice";
import CheckOutButton from "../../CheckOut/CheckoutButton/CheckOutButton";

function CheckoutBox(props){
    const [ship, setShip] = useState(0)
    const [idship , setIdShip] = useState()
    const [method, setmethod] = useState()
    const total = parseFloat(props.totals)
    let grandtotal = ship + total
   function Shiping() {
        const idship = document.getElementById('shiping').value
        setIdShip(idship)
        const shipprice = Array.from(document.querySelectorAll('#shiping option')).find(element => element.selected)
        const price = shipprice.getAttribute('data-price-ship')
        const name = shipprice.getAttribute('data-name')
        const priceship = parseFloat(price)
        setShip(priceship)
        setmethod(name)
        console.log('as',method);
        console.log('an',name);
   }
    return (
        <div class="col-md-4">
            <div class="shadow p-3 mb-5 bg-body rounded">
            <div class="card mb-4">
            <div class="card-header py-3">
                <h5 class="mb-0">Tạm Tính Tiền</h5>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                <li
                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Tạm Tính :
                    <span style={{color: '#d00031'}}><FormatPrice price={total.toFixed(2)}/></span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0 row">
                    <div className="col-4"> <label htmlFor="shiping">Vận Chuyển :</label></div>
                    <div class='col-8'>
                        <select id='shiping' name="" class="form-select" aria-label="Default select example" onChange={Shiping}>
                            {
                                props.ship.success.map((e , index) => {
                                    return <>
                                    <option key={index} value={e.id} data-price-ship={e.postage} data-name={e.name}><b style={{color: '#d00031'}} >{e.name} - <FormatPrice price={e.postage}/></b></option>
                                    </>
                                    })
                            }
                        </select>
                    </div>
                </li>
                <li
                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                    <strong>Total amount</strong>
                    <strong>
                        <p class="mb-0">(including VAT)</p>
                    </strong>
                    </div>
                    <span><strong style={{color: '#d00031'}}><FormatPrice price={grandtotal.toFixed(2)}/></strong></span>
                </li>
                </ul>
                <CheckOutButton total={grandtotal.toFixed(2)} products={props.products} ship={idship} shipName={method} ></CheckOutButton>
            </div>
            </div>
            </div>
        </div>
    )
}
export default function CheckoutBoxPage(props){

    const [items, setItems] = useState([]);
    const token = localStorage.getItem('access_token');
    const total = props.totals

    useEffect(() => {
        fetch('https://ecommerce-shop-api-project.herokuapp.com/api/get-shiping-method',
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
                <CheckoutBox ship={items} totals={total} products = {props.itemcart}/>
            </>
        )
      }
}