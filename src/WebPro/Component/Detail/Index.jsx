import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GalleryCarousel from "./GalleryProducts/GalleryProducts";
import ProductsInfomation from "./ProductsInfomation/ProductsInfomation";
import FetchRelatedProducts from "./ListProducts/FetchListProducts";
import './css/style.css';
import { Link } from "react-router-dom";
import domainApi from "../../../Config/ConfigDomainAPI";

export default function DetailPage(){
    const [items, setItems] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`${domainApi}/api/show-products-client/`+id)
        .then(res => {
            const product = res.data;
            setItems({
                product : product,
                id_category : product.categories_id
            })
            
        })
        .catch( error => console.log(error) )
        window.scrollTo(0, 0)
      }, [id]);

        if(items.product){
            if(items.id_category){
                return (
                    <section className="container">
                        <div style={{marginTop : '4rem'}}>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to={`/`}>Trang Chủ</Link></li>
                                <li class="breadcrumb-item"><Link to={`/detail-product/${items.product.id}`}>Chi tiết sản phẩm</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">{items.product.name}</li>
                            </ol>
                        </nav>
                            {/* <div className="px-4 px-lg-5 my-5"> */}
                                <div className="row gx-4 gx-lg-5 align-items-center">
                                    <GalleryCarousel images={items}/>
                                    <ProductsInfomation info={items}/>
                                </div>
                            {/* </div> */}
                        </div>
                        {/* <FetchRelatedProducts id_category={items.id_category} id_product={items.product.id} /> */}
                        <FetchRelatedProducts id_category={items.id_category} id_product={items.product.id} />
                        <div className="text-center" style={{paddingTop : '1rem'}}>
                            <Link to={'/shop/all-shop'}>
                                <button type="button" class="btn btn-outline-danger btn-sm">
                                <i class="fa fa-angle-double-left" aria-hidden="true"></i> Cửa Hàng
                                </button>
                            </Link>
                        </div>
                    </section>
                )
            }
        }else{  
            return (
                <div class="spinner-border detail-spinner" id="detail-loader" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            )
        }

}