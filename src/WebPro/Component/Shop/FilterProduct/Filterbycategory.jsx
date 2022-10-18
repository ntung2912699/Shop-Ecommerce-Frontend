import React, { Component } from "react";
import { useState , useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './css/style.css';
import ListProductsFilter from "./ListproductsFilter";
import domainApi from "../../../../Config/ConfigDomainAPI";

export default function Filterbycategories(){
    const [items, setItems] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const loader = document.getElementById('products-shop-loader');
        loader.style.display = 'block';
        axios.get(`${domainApi}/api/get-list-product/by-categories/`+id)
        .then(res => {
            const product = res.data;
            const filter_price = document.getElementById('filter-price');
            if(filter_price){
                filter_price.setAttribute("data-id", id);
            }
            setItems({product : product})
            const formPrice = document.getElementById('form-filter-price')
            if (formPrice) {
                formPrice.reset();
            }
            loader.style.display = 'none';
        })
        .catch( error => console.log(error) )
      }, [id]);

        if(items.product){
            return (
                <>
                    <div class="spinner-border categories-filter-spinner" id="categories-filter-loader" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <ListProductsFilter products={items.product.products} categoriesname={items.product.name}/>
                </>
            )
        }

}