import React from "react";
import axios from "axios";
import domainApi from "../../../Config/ConfigDomainAPI";

class FecthCategoriesEditForm extends React.Component{
    state = {
        categories: []
      }
      async componentDidMount(){
        const accesstoken = localStorage.getItem('access_token')
        if(accesstoken){
            await axios.get(`${domainApi}/api/admin/get-categories-admin`,
            {
                'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                    }
            })
            .then(res => {
            const categories = res.data;
            this.setState({ categories : categories });
            })
            .catch(error => console.log(error));
        }
    }
    render(){
        if(this.state.categories){
            return (
                <>
                        { this.state.categories.map(category => 
                            <option value={category.id}>{category.name}</option>
                        )}
                </>
             )
        }
    }
}export default FecthCategoriesEditForm