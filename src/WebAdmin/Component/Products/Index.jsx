import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FormatDate from "../../FormatData/FormatDate";
import FormatPrice from "../../../WebPro/Component/FormatData/FormatPrice";
import domainApi from "../../../Config/ConfigDomainAPI";

class FetchProducts extends React.Component{
    state = {
        products: []
      }
      async componentDidMount(){
        const accesstoken = localStorage.getItem('access_token')
        if(accesstoken){
            await axios.get(`${domainApi}/api/admin/get-all-products-admin`,
            {
                'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                    }
            })
            .then(res => {
            const product = res.data;
            this.setState({ products : product });
            })
            .catch(error => console.log(error));
        }
    }
    render(){
        if(this.state.products){
            return (
                <section>
                <div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Sản Phẩm</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                    <Link to={`/admin/add-product`}>
                        <button type="button" class="btn btn-sm btn-danger">Thêm Sản Phẩm</button>
                    </Link>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Action</th>
                                <th scope="col">Ảnh</th>
                                <th scope="col">Hãng SX</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Trạng Thái</th>
                                <th scope="col">Ngày Tạo</th>
                                <th scope="col">Ngày Sửa</th>
                            </tr>
                        </thead>
                        <tbody>
                        { this.state.products.map(product => 
                                <tr>
                                    <td>{product.id}</td>
                                    <td><Link to={`/admin/edit-product/${product.id}`}>Sửa : <i class="fa fa-pencil" aria-hidden="true"></i></Link></td>
                                    <td><img style={{width:'50px'}} src={product.thumbnail}></img></td>
                                    <td>{product.category}</td>
                                    <td class="text-truncate" style={{maxWidth : '200px'}}>
                                    <Link to={`/admin/edit-product/${product.id}`}>{product.name}</Link></td>
                                    <td><FormatPrice price={product.price}/></td>
                                    <td>{product.status}</td>
                                    <td><FormatDate date={product.created_at}/></td>
                                    <td><FormatDate date={product.updated_at}/></td>
                                </tr>
                        )}
                        </tbody>
                        </table>
                        </div>
                </section>
             )
        }
    }
}export default FetchProducts