import React, { Component } from "react";
import axios from "axios";
import ListCategories from "../../../ListCategories/ListCategories";
import { MDBCard, MDBRow } from 'mdb-react-ui-kit';
import domainApi from "../../../../../Config/ConfigDomainAPI";

class FetchCategories extends Component{
    state = {
        categories: []
      }
      async componentDidMount(){
        await axios.get(`${domainApi}/api/get-categories-client`)
        .then(res => {
          const categories = res.data;
          this.setState({ categories });
        })
        .catch(error => console.log(error));
    }
    render(){
        return (
           <section className="container" style={{paddingBottom : '2rem', paddingTop : '2rem'}}>
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