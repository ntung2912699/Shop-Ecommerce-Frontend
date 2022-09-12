import React, { Component } from "react";
import axios from "axios";
import ListCategories from "../../../ListCategories/ListCategories";
import { MDBCard, MDBRow } from 'mdb-react-ui-kit';

class FetchCategories extends Component{
    state = {
        categories: []
      }
      async componentDidMount(){
        await axios.get(`https://ecommerce-shop-api-project.herokuapp.com/api/get-categories-client`)
        .then(res => {
          const categories = res.data;
          this.setState({ categories });
        })
        .catch(error => console.log(error));
    }
    render(){
        return (
           <section className="container" style={{paddingBottom : '2rem', paddingTop : '2rem'}}>
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