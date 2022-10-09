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
        axios.post(`${domainApi}/api/filter-product`,
        {
            'price_min' : min,
            'price_max' : max,
            'id_category' : id_category
        })
        .then(res => {
        const products = res.data;
        setItems({ products });
        })
        .catch(error => console.log(error));
        window.scrollTo(0, 0)
      }, [min,max]);

      if(items.products){
        return (
            <ListProductsFilter products={items.products}/>
        )
    }else{  
        return (
            <div class="spinner-border detail-spinner" id="detail-loader" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        )
    }
}