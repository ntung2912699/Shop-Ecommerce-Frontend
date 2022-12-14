import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class ListCategories extends Component{
    constructor(props) {
        super(props);
      }
      
      render() {
        function hideMenu(){
          const element = document.getElementById("mySidenav");
          const btnmenu = document.getElementById("open-btn");
          if(element){
            element.classList.add("hide_menu");
            btnmenu.classList.add("show_btn");
          }
        }
        
        const a = document.querySelectorAll(".list-cate li a");
        for (var i = 0, length = a.length; i < length; i++) {
          a[i].onclick = function() {
            console.log(1);
            var b = document.querySelector(".list-cate li.active");
            if (b) b.classList.remove("active");
            this.parentNode.classList.add('active');
          };
        }
        if(this.props.categories){
          return (
            <ul class="list-cate list-group list-group-flush list-category-scroll" id="list-item-cate">
              <li class="list-group-item item-cate">
                  <Link onClick={hideMenu} to={`/shop/all-shop`}>Tất Cả <span class="badge bg-danger rounded-pill">all</span></Link>
                </li>
              { this.props.categories.map(category => 
               <li class="list-group-item item-cate">
                  <Link onClick={hideMenu} to={`${category.id}`}>{category.name} <span class="badge bg-danger rounded-pill">{category.count_product}</span></Link>
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