import React, { Component } from "react";
import axios from "axios";
import ListCategories from "../../../ListCategories/ListCategories";

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
            <div className="container" style={{marginTop : '3rem'}}>
                <div className="shadow p-3 mb-5 bg-body rounded row" style={{marginTop : '3rem'}}>
                    <h4 style={{borderBottom : '1px solid #d00031', marginBottom : '1.5rem'}}>Danh Mục</h4>
                    {
                     <ListCategories categories={this.state.categories}/> 
                    }
                </div>
            </div>
        )
    }
}

export default FetchCategories;