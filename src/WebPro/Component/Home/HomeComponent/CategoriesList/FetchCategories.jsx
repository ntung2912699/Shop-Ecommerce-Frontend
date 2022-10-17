import React, { Component } from "react";
import axios from "axios";
import ListCategories from "../../../ListCategories/ListCategories";
import { MDBRow } from 'mdb-react-ui-kit';
import domainApi from "../../../../../Config/ConfigDomainAPI";
import './css/style.css';

class FetchCategories extends Component{
    state = {
        categories: []
      }
      async componentDidMount(){
        const loader = document.getElementById('categories-loader')
        loader.style.display = 'block';
        await axios.get(`${domainApi}/api/get-categories-client`)
        .then(res => {
          const categories = res.data;
          this.setState({ categories });
          loader.style.display = 'none';
        })
        .catch(error => console.log(error));
    }
    render(){
        return (
           <section className="container" style={{paddingBottom : '2rem', paddingTop : '2rem'}}>
            <div class="spinner-border categories-spinner" id="categories-loader" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <h5 className="text-center" style={{borderBottom : '1px solid #ced4da', marginBottom : '1.5rem'}}><b>Hãng Sản Xuất </b></h5>
            <MDBRow>
                {
                    <ListCategories categories={this.state.categories}/> 
                }
            </MDBRow>
           </section>
        )
    }
}

export default FetchCategories;