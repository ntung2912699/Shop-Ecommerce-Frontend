import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class ListCategories extends Component{
    constructor(props) {
        super(props);
      }
      
      render() {
        const a = document.querySelectorAll(".list-cate li a");
        for (var i = 0, length = a.length; i < length; i++) {
          a[i].onclick = function() {
            var b = document.querySelector(".list-cate li.active");
            if (b) b.classList.remove("active");
            this.parentNode.classList.add('active');
          };
        }
        if(this.props.categories){
          return (
            <ul class="list-cate list-group list-group-flush list-category-scroll">
              <li class="list-group-item active">
                  <Link to={`/webpro/shop/all-shop`}>Tất Cả Các Hãng</Link>
                  <span class="badge bg-danger rounded-pill">all</span>
                </li>
              { this.props.categories.map(category => 
               <li class="list-group-item">
                  <Link to={`${category.id}`}>{category.name} </Link>
                  <span class="badge bg-danger rounded-pill">{category.count_product}</span>
                </li>
              )}
            </ul>
          )
        }else{
          return(
            <div class="spinner-border products-spinner" id="products-loader" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
          )
        }
      }
}
export default ListCategories;