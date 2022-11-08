import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './css/style.css';
import ListProductsFilter from "./ListproductsFilter";
import domainApi from "../../../../Config/ConfigDomainAPI";

export default function FilterAttributeProducts(){
    const [items, setItems] = useState([]);
    const { min } = useParams('min');
    const { max } = useParams('max');
    const { id_category } = useParams('id_category');
    
    useEffect(() => {
        const loader = document.getElementById('products-shop-loader');
        const formData = new FormData();
        loader.style.display = 'block';
        formData.append('price_min',min);
        formData.append('price_max',max);
        formData.append('id_category',id_category);
        axios.post(`${domainApi}/api/filter-product`,formData,
        {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }
          }
        )
        .then(res => {
        const products = res.data;
        setItems({ products });
        loader.style.display = 'none';
        })
        .catch(error => console.log(error));
        window.scrollTo(0, 0)
      }, [min,max]);

      if(items.products){
        return (
        <>
            <div class="spinner-border price-filter-spinner" id="price-filter-loader" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <ListProductsFilter products={items.products}/>
        </>
        )
    }
}