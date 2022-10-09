import React, { Component } from "react";
import axios from "axios";
import ListCategories from "./ListCategories";
import domainApi from "../../../../Config/ConfigDomainAPI";

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
            <ListCategories categories={this.state.categories}/>
        )
    }
}

export default FetchCategories;