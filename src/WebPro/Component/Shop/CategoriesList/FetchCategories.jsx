import React, { Component } from "react";
import axios from "axios";
import ListCategories from "./ListCategories";
import domainApi from "../../../../Config/ConfigDomainAPI";
import './css/style.css';

class FetchCategories extends Component{
    state = {
        categories: []
      }
      async componentDidMount(){
        const loader = document.getElementById('categories-list-loader')
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
            <>
              <div class="spinner-border categories-spinner" id="categories-list-loader" role="status">
                  <span class="visually-hidden">Loading...</span>
              </div>
              <ListCategories categories={this.state.categories}/>
            </>
        )
    }
}

export default FetchCategories;