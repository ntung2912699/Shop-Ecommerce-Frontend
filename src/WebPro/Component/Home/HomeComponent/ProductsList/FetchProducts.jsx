import React, { Component } from "react";
import axios from "axios";
import ListProducts from "../../../ListProducts/ListProducts";
import { MDBRow}  from 'mdb-react-ui-kit';
import domainApi from "../../../../../Config/ConfigDomainAPI";

class FetchProducts extends Component{
    state = {
        products: []
      }
      async componentDidMount(){
        await axios.get(`${domainApi}/api/get-product-clients`)
        .then(res => {
          const products = res.data;
          this.setState({ products });
        })
        .catch(error => console.log(error));
    }
    render(){
        return (
            <section className="container" style={{paddingBottom : '2rem'}}>
                <h5 className="text-center" style={{borderBottom : '1px solid #ced4da', marginBottom : '1.5rem'}}><b>Xe Mới Về </b></h5>
                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                    <ListProducts products={this.state.products}/>
                </MDBRow>
            </section>
        )
    }
}

export default FetchProducts;