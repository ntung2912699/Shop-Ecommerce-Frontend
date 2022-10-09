import React, { Component } from "react";
import { MDBRow}  from 'mdb-react-ui-kit';
import Pagination from "./FecthPaginate";
import domainApi from "../../../../Config/ConfigDomainAPI";

class FetchProducts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
      }
      componentDidMount(){
        const formPrice = document.getElementById('form-filter-price')
        if (formPrice) {
            formPrice.reset();
        }
      }
    render(){
        return (
            <section style={{paddingBottom : '2rem'}}>
                <h5 style={{borderBottom : '1px solid #ced4da', marginBottom : '1.5rem', marginTop : '-0.5rem'}}><b>Danh Sách Xe Ngẫu Nhiên</b></h5>
                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                    <Pagination url={`${domainApi}/api/get-product-shop?page=`}/>
                </MDBRow>
            </section>
        )
    }
}

export default FetchProducts;