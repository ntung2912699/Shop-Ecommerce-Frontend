import React from "react";
import axios from "axios";
import domainApi from "../../../Config/ConfigDomainAPI";

class AddAtributeValue extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            attributes : [],
            product_id : this.props.product_id
        }
      }

      async componentDidMount(){
        const accesstoken = localStorage.getItem('access_token')
        if(accesstoken){
            await axios.get(`${domainApi}/api/admin/get-list-attributes-admin`,
            {
                'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                    }
            })
            .then((res) => {
                const attributes = res.data
                this.setState({attributes : attributes})
            }).catch(error => {
                console.log(error)
           })  
        } 
      }

        handleClick(product_id){
        const attribute_id = document.getElementById('attribute_id');
        const attribute_value = document.getElementById('attribute_value');
        const id = product_id
        if (attribute_id) {
            const attr_id = attribute_id.value
            const attr_value = attribute_value.value
            const accesstoken = localStorage.getItem('access_token')
            if(accesstoken){
                axios.post(`${domainApi}/api/admin/create-attribute-value-admin`,
                    {
                        attribute_id : attr_id,
                        product_id : id,
                        value : attr_value
                    },
                    {
                        'headers': {
                            'Authorization': 'Bearer ' + accesstoken
                            }
                    }).then((res) => {
                        const mess = document.getElementById('message-success');
                        mess.setAttribute("style", "display:block;");
                        setTimeout(function(){
                            mess.setAttribute("style", "display:none;"); 
                            window.location.reload();
                        }, 1000);
                    }).catch(error => {
                        const mess = document.getElementById('message-error');
                        mess.setAttribute("style", "display:block;");
                        setTimeout(function(){
                            mess.setAttribute("style", "display:none;"); 
                        }, 1000);
                })
            }
       }
    }

    render(){
        const product_id = this.props.product_id
        if(this.state.attributes){
            return (
                <>
                    <button type="button" className="text-center btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa fa-plus-circle" aria-hidden="true"></i> Thêm Thuộc Tính
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <form style={{paddingTop : '2rem'}}>
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Thêm Thuộc Tính</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className="mb-3">
                                    <select id="attribute_id" class="form-select" aria-label="Default select example">
                                        <option selected>Chọn Thuộc Tính</option>
                                        { this.state.attributes.map(attribute => 
                                              <option value={attribute.id}>{attribute.name}</option>
                                        )}
                                    </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="attribute_value" class="form-label">Giá Trị Thuộc Tính</label>
                                        <input type="text" class="form-control" id="attribute_value" aria-describedby=""/>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" onClick={() => this.handleClick(product_id)} class="btn btn-danger">Lưu Lại</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                </>
            )
        }
    }
}
export default AddAtributeValue