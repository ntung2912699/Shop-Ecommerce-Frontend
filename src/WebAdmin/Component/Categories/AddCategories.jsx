import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import domainApi from "../../../Config/ConfigDomainAPI";

class AddCategories extends React.Component{
    constructor(props) {
            super(props);
            this.loadImageLogo = this.loadImageLogo.bind(this);
            this.unloadImageLogo = this.unloadImageLogo.bind(this);
            this.submitCategories = this.submitCategories.bind(this);
            this.state = {
                logo : [],
                logo_review : null,
            }
        }
        loadImageLogo(e){
            this.setState({
                logo : e.target.files,
                logo_review : URL.createObjectURL(e.target.files[0]),
            })
        }

        unloadImageLogo(){
            this.setState({
                logo : null,
                logo_review : null,
            })
        }

        submitCategories(e){
            e.preventDefault();
            const name = document.getElementById('name');
            const status = document.getElementById('status');
            const formData = new FormData();
            formData.append("name", name.value);
            if (this.state.logo) {
                for (const file of this.state.logo) {
                  formData.append("logo", file);
                }
              }
            formData.append("status", status.value);
            const accesstoken = localStorage.getItem('access_token')
            if(accesstoken){
                axios.post(`${domainApi}/api/admin/create-categories-admin`,formData,
                {
                    'headers': {
                        'Authorization': 'Bearer ' + accesstoken
                        }
                })
                .then(res => {
                    const categories = res.data;
                    const mess = document.getElementById('message-success');
                    mess.setAttribute("style", "display:block;");
                    setTimeout(function(){
                        mess.setAttribute("style", "display:none;"); 
                        window.location.reload();
                    }, 1000);
                })
                .catch( error => {
                    const mess = document.getElementById('message-error');
                    mess.setAttribute("style", "display:block;");
                    setTimeout(function(){
                        mess.setAttribute("style", "display:none;"); 
                    }, 1000);
                })
            }
        } 
 
     render(){
        return (
            <section>
                <nav aria-label="breadcrumb" style={{paddingTop : '2rem'}}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={`/admin/categories`}><i className="fa fa-chevron-left" aria-hidden="true"></i> Danh Sách Danh Mục</Link></li>
                    </ol>
                </nav>
                 <div className="col-md-8 offset-md-2">
                    <div className="card border-0 shadow rounded-3">
                        <div className="card-body p-4 p-sm-5">
                            <form onSubmit={this.submitCategories}>
                                <h3 className="text-center">Thêm Danh Mục</h3>
                                <div className="mb-3">
                                    <label for="name" className="form-label">Tên Danh Mục</label>
                                    <input type="text" className="form-control" id="name" placeholder=""/>
                                </div>
                                <div className="mb-3">
                                    <p>logo : </p>
                                    <i style={{position : 'relative', top : '-22px', left: '77px',fontSize : '1.3rem', }} onClick={this.unloadImageLogo} className="fa fa-trash-o" aria-hidden="true"></i>
                                    <label for="logo" id="preview-logo" className="form-label" style={{
                                        backgroundImage : `url('${this.state.logo_review}')`,
                                        backgroundRepeat : 'round',
                                        width : '100px',
                                        height : '100px',
                                        border : '2px dashed',
                                        marginLeft : '-18px',
                                        borderRadius : '10px'}}>
                                            <i style={{position : 'relative', top : '25%', left: '30%',fontSize : '3rem', }} className="fa fa-file-image-o" aria-hidden="true"></i>
                                    </label>
                                    <input hidden className="form-control" onChange={event => this.loadImageLogo(event)} type="file" id="logo"/>
                                </div>
                                <div className="mb-3">
                                    <label for="status" className="form-label">Trạng Thái</label>
                                    <input type="text" className="form-control" id="status" placeholder=""/>
                                </div>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-danger" type="submit">Thêm Danh Mục</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </section>
       )
     }
}export default AddCategories;