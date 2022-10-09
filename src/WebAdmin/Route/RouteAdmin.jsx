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

class RouteAdmin extends Component{
    constructor(props){
        super(props);
        this.state = {
            permision : null,
            authFalse : null,
        }
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
                    <Route path="/dashboard" element={<Dashboard />} />
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
       }else{
        return (
            <section style={{paddingTop : '5rem'}}>
                <div className="container">
                    <div className="col-md-6 offset-md-3">
                        <div class="card text-center">
                        <div class="card-header">
                            Thông Báo Từ Hệ Thống
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Bạn Không Có Quyền Truy Cập Vào Site ADMIN</h5>
                            <p class="card-text">Nếu Bạn Có Tài Khoản ADMIN Hãy Đăng Nhập Và Quay Lại, Hoặc Nếu Chưa Có Tài Khoản ADMIN Vui Lòng Liên Hệ Với Quản Trị Viên Để Được Hỗ Trợ</p>
                            <Link to={'/'} class="btn btn-danger">Quay Lại Trang Khách</Link>
                        </div>
                        <div class="card-footer text-muted">
                            Auto Smart
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
       }
    }
}
export default RouteAdmin