import React, { Component } from "react";
import axios from "axios";
import ListProducts from "../../../ListProducts/ListProducts";
import { MDBRow}  from 'mdb-react-ui-kit';

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
            <section className="container" style={{paddingBottom : '2rem'}}>
                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                    <ListProducts products={this.state.products}/>
                </MDBRow>
            </section>
        )
    }
}

export default FetchProducts;