import React from "react";
import axios from "axios";
import domainApi from "../../../Config/ConfigDomainAPI";

class EditAtributeValue extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value : null,
        }
        this.setValue = this.setValue.bind(this);
      }

      setValue(e){
        e.preventDefault();
        const value = e.target.value
        this.setState({
            value : value
        })
      }

    handleClick(){
        const formData = new FormData()
        const id = this.props.attributes_value_id
        if(this.state.value){
            formData.append("value", this.state.value);
        }
        const accesstoken = localStorage.getItem('access_token')
            if(accesstoken){
            axios.post(`${domainApi}/api/admin/update-attribute-value-admin/`+id,formData,
            {
                'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                    }
            })
                .then((res) => {
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


    render(){
        if(this.props.attributes_value){
            return (
                <>
                    <a type="button" data-bs-toggle="modal" data-bs-target={`#modal${this.props.attributes_value_id}`}>
                        <i style={{color : '#dc3545', marginLeft : '5px'}} class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </a>
                    <div class="modal fade" id={`modal${this.props.attributes_value_id}`} tabindex="-1" aria-labelledby={`exampleModal${this.props.attributes_value}Label`} aria-hidden="true">
                    <div class="modal-dialog">
                        <form style={{paddingTop : '2rem'}}>
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id={`exampleModal${this.props.attributes_value}Label`}>Sửa Thuộc Tính</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className="mb-3">
                                    <select id="attribute_id_update" disabled class="form-select" aria-label="Default select example">
                                        <option selected>{this.props.attributes}</option>
                                    </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="attr_value_update" class="form-label">Giá Trị Thuộc Tính</label>
                                        <input type="text" id="attr_value_update"  onChange={event => this.setValue(event)} class="form-control" defaultValue={this.props.attributes_value}/>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" onClick={() => this.handleClick(this.props.attributes_value_id)} class="btn btn-danger">Lưu Lại</button>
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
export default EditAtributeValue