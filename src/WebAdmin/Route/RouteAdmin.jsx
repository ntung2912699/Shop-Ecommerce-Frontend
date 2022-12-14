import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import AdminLayOut from "../Page/Layout/Main";
import Dashboard from "../Component/Dashboard/Index";
import FetchProducts from "../Component/Products/Index";
import FecthCategories from "../Component/Categories/Index";
import EditProduct from "../Component/Products/Edit";
import FetchAttribute from "../Component/Products/Attributes/Index";
import EditAttribute from "../Component/Products/Attributes/EditAttribute";
import AddProduct from "../Component/Products/AddProduct";
import AddCategories from "../Component/Categories/AddCategories";
import EditCategory from "../Component/Categories/EditCategories";
import FecthUsers from "../Component/Users/Index";
import domainApi from "../../Config/ConfigDomainAPI";
import './css/style.css';

class RouteAdmin extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    async componentDidMount(){
        const accesstoken = localStorage.getItem('access_token')
        if(accesstoken){
            axios.post(`${domainApi}/api/admin/check-admin`,
            {
                'status': 'checkadmin'
            },
            {
                'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                }
            })
            .then(res => {
                this.setState({permision : res.data})
            })
            .catch( error => {
                this.setState({authFalse : true})
            })
        }else(
            window.location.href = '/login'
        )
    }
    render(){
       if (this.state.permision) {
        return (
            <Routes>
                <Route path='/' element={<AdminLayOut />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/products" element={<FetchProducts />} />
                    <Route path="/edit-product/:id" element={<EditProduct />}/>
                    <Route path="/add-product" element={<AddProduct />}/>
                    <Route path="/categories" element={<FecthCategories />} />
                    <Route path="/add-category" element={<AddCategories />} />
                    <Route path="/edit-category/:id" element={<EditCategory />} />
                    <Route path="/attribute-products" element={<FetchAttribute />} />
                    <Route path="/attribute-edit/:id" element={<EditAttribute />} />
                    <Route path="/users" element={<FecthUsers />} />
                </Route>
            </Routes>
        )
       }if(this.state.authFalse) {
        return (
            <section style={{paddingTop : '5rem'}}>
                <div className="container">
                    <div className="col-md-6 offset-md-3">
                        <div class="card text-center">
                        <div class="card-header">
                            Th??ng B??o T??? H??? Th???ng
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">B???n Kh??ng C?? Quy???n Truy C???p V??o Site ADMIN</h5>
                            <p class="card-text">N???u B???n C?? T??i Kho???n ADMIN H??y ????ng Nh???p V?? Quay L???i, Ho???c N???u Ch??a C?? T??i Kho???n ADMIN Vui L??ng Li??n H??? V???i Qu???n Tr??? Vi??n ????? ???????c H??? Tr???</p>
                            <Link to={'/'} class="btn btn-danger">Quay L???i Trang Kh??ch</Link>
                        </div>
                        <div class="card-footer text-muted">
                            Auto Smart
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
       }else{
        return (
            <div class="spinner-border check-admin-loader" id="check-admin-loader" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        )
       }
    }
}
export default RouteAdmin