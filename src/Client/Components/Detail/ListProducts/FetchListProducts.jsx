import React from "react";
import axios from "axios";
import RelatedProducts from "./RelatedProducts";

class FetchRelatedProducts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            id : props.id
        }
    }
      async componentDidMount(){
        await axios.get(`http://127.0.0.1:8000/api/get-list-product/by-categories/`+this.state.id)
        .then(res => {
          const products = res.data;
          this.setState({ products });
        })
        .catch(error => console.log(error));
    }
    render(){
        return(
            <section className="container">
                <div class="shadow p-3 mb-5 bg-body rounded row">
                    <h4 style={{borderBottom : '1px solid #d00031', marginBottom : '1.5rem'}}>Các Sản Phẩm Liên Quan</h4>
                    <div class="row row-cols-2 row-cols-md-5 g-4">
                        {
                            <RelatedProducts products={this.state.products}/>
                        }
                    </div>
                </div>
            </section>
        )
    }
}
export default FetchRelatedProducts;