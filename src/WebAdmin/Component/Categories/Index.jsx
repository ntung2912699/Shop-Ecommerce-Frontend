import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FormatDate from "../../FormatData/FormatDate";
import domainApi from "../../../Config/ConfigDomainAPI";

class FecthCategories extends React.Component{
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
                <section>
                <div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Danh Mục</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link to={`/admin/add-category`}>
                            <button type="button" className="btn btn-sm btn-danger">Thêm Danh Mục</button>
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Action</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Logo</th>
                                <th scope="col">Trạng Thái</th>
                                <th scope="col">Ngày Tạo</th>
                                <th scope="col">Ngày Sửa</th>
                            </tr>
                        </thead>
                        <tbody>
                        { this.state.categories.map(category => 
                                <tr>
                                    <td>{category.id}</td>
                                    <td><Link to={`/admin/edit-category/${category.id}`}>Sửa : <i className="fa fa-pencil" aria-hidden="true"></i></Link></td>
                                    <td className="text-truncate" style={{maxWidth : '200px'}}>{category.name}</td>
                                    <td><img style={{width:'50px'}} src={category.logo}></img></td>
                                    <td>{category.status}</td>
                                    <td><FormatDate date={category.created_at}/></td>
                                    <td><FormatDate date={category.updated_at}/></td>
                                </tr>
                        )}
                        </tbody>
                        </table>
                        </div>
                </section>
             )
        }
    }
}export default FecthCategories