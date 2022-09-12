import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GalleryCarousel from "./GalleryProducts/GalleryProducts";
import ProductsInfomation from "./ProductsInfomation/ProductsInfomation";
import FetchRelatedProducts from "./ListProducts/FetchListProducts";
import './css/style.css';

export default function DetailPage(){
    const [items, setItems] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('https://ecommerce-shop-api-project.herokuapp.com/api/show-products-client/'+id)
        .then(res => {
            const productDetail = res.data;
            setItems({ productDetail })
        })
        .catch( error => console.log(error) )
      }, [id]);

      if(items.productDetail){
        if(items.productDetail.products){
            let id = items.productDetail.products.categories_id;
                return (
                    <section className="container">
                        <div class="shadow p-3 mb-5 bg-body rounded" style={{marginTop : '2rem'}}>
                            <div className="px-4 px-lg-5 my-5">
                                <div className="row gx-4 gx-lg-5 align-items-center">
                                    <GalleryCarousel images={items}/>
                                    <ProductsInfomation info={items}/>
                                </div>
                            </div>
                        </div>
                    <FetchRelatedProducts id={id} />
                </section>
            )
        }
      } else{
        return <div class="spinner-border detail-spinner" id="detail-loader" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }

}