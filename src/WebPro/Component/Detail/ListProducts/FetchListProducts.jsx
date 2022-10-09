import React from "react";
import axios from "axios";
import RelatedProducts from "./RelatedProducts";
import domainApi from "../../../../Config/ConfigDomainAPI";

class FetchRelatedProducts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }
    async componentDidMount(){
        console.log('aaa');
        await axios.get(`${domainApi}/api/get-list-product/by-categories/`+this.props.id_category)
        .then(res => {
            const products = res.data;
            this.setState({ products });
        })
        .catch(error => console.log(error));
    }
    render(){
        if (this.state.products) {
            return(
                <section className="container">
                    <h5 style={{borderBottom : '1px solid', marginBottom : '1.5rem'}}><b>Có Thể Bạn Cũng Thích ...</b></h5>
                    <div class="row g-4">
                        {
                            <RelatedProducts products={this.state.products.products} product_id={this.props.id_product}/>
                        }
                    </div>
                </section>
            )   
        }
    }
}
export default FetchRelatedProducts;