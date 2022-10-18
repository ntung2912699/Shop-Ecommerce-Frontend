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
            const loader = document.getElementById('loader-main');
                loader.style.display = 'block';
            await axios.get(`${domainApi}/api/admin/get-categories-admin`,
            {
                'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                    }
            })
            .then(res => {
            const categories = res.data;
            this.setState({ categories : categories });
                loader.style.display = 'none';
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