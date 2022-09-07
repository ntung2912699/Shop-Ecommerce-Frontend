import React, { Component } from "react";
import axios from "axios";
import ListProducts from "../../../ListProducts/ListProducts";

class FetchProducts extends Component{
    state = {
        products: []
      }
      async componentDidMount(){
        await axios.get(`https://ecommerce-shop-api-project.herokuapp.com/api/get-product-clients`)
        .then(res => {
          const products = res.data;
          this.setState({ products });
        })
        .catch(error => console.log(error));
    }
    render(){
        return (
                <section className="container">
                    <div class="shadow p-3 mb-5 bg-body rounded row">
                        <h4 style={{borderBottom : '1px solid #d00031', marginBottom : '1.5rem'}}>Sản Phẩm Mới</h4>
                        <div class="row row-cols-2 row-cols-md-5 g-4">
                            {
                                <ListProducts products={this.state.products}/>
                            }
                    </div>
                </div>
            </section>
        )
    }
}

export default FetchProducts;