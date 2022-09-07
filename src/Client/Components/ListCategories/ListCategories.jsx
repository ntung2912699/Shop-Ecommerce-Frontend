import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import '../ListProducts/css/style.css'

class ListCategories extends Component{
    constructor(props) {
        super(props);
      }
      
      render() {
        if(this.props.categories.categories){
          return (
            <>
              { this.props.categories.categories.map(category => 
                <div className="col-md-2 cate-item-box">
                <div class=" mb-2">
                  <div class="row g-0">
                    <div class="col-md-12">
                      <Link to={`/shop-page/${category.id}`}>
                      <div class="card-body text-center">
                        <img src={category.logo} style={{width : '100px', height : '100px', borderRadius :'5rem'}} alt="..."/>
                        <p>{category.name}</p>
                      </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              )}
            </>
          )
        }else{
          return(
            <div class="spinner-border text-danger products-spinner" id="products-loader" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
          )
        }
      }
}
export default ListCategories;