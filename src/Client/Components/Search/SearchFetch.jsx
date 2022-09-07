import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import './css/search.css'
import FormatPrice from "../FormatData/FormatPrice";

export default function SeachFetch(){
    const [ items, setItems ] = useState([])

    if(items.success){
        document.addEventListener("click", (e) => {
        const calendarBlock = document.querySelector(".dropstart");
        let modalResult = document.getElementById('content-result');
        let loader = document.getElementById('search-loader');
        if (!calendarBlock.contains(e.target)) {
            setItems([]);
            modalResult.style.display = 'none';
            loader.style.display = 'none';
        }
      });
    }
    function ResultSearch(props){
        if(props.result.success){
            return props.result.success.map((element , index) => {
                return (
                    <Link id="RouterNavLink" key={index} className="h6 text-decoration-none text-truncate" to={`/detail-product/${element.id}`}>
                        <li className="list-group-item d-flex justify-content-between align-items-start row">
                            <div className="overflow-hidden col-4">
                                <img className="img-fluid img-product-search" src={element.thumbnail} alt="" style={{'width':"5rem", 'height':"5rem", marginRight: '1rem'}}/>
                            </div>
                            <div className="col-8">
                            <Link to={`/detail-product/${element.id}`}>
                                <h6>{element.name}</h6>
                            </Link>
                            <small className="text-body"><b style={{color: '#d00031'}}><FormatPrice price={element.price} /></b></small>
                            </div>
                        </li>
                    </Link>
                )
            })   
        }
        else{
            return (
                <div class="spinner-border text-danger search-spinner" id="search-loader" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            )
        }
    }  

    function SearchProduct(){
        let key = document.getElementById('search_product').value;
        let modalResult = document.getElementById('content-result');
        let loader = document.getElementById('search-loader');
        if(modalResult && loader){
            modalResult.style.display = 'block';
            loader.style.display = 'block';
        }
        axios.post(
        'https://ecommerce-shop-api-project.herokuapp.com/api/search-products',
        {
            'search': key
        }
        )
        .then((res) => {
            setItems(res.data)
            modalResult.style.minHeight = '0px';
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <form className="w-100 me-3 dropstart">
            <input type="search" class="form-control" id="search_product" name="search" onKeyUp={SearchProduct} placeholder="Tìm Kiếm ..." aria-label="Search"/>
            <div className="modal-result" id="content-result">
                <ol className="list-group list-group-numbered">
                    <ResultSearch result={items}/>
                </ol>
            </div>
        </form>
    )
}