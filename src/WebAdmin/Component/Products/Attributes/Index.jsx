import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FormatDate from "../../../FormatData/FormatDate";
import AddAtributes from "./AddAttributes";
import domainApi from "../../../../Config/ConfigDomainAPI";

class FetchAttribute extends React.Component{
    state = {
        attributes: []
      }
      async componentDidMount(){
        const accesstoken = localStorage.getItem('access_token')
        if(accesstoken){
            const loader = document.getElementById('loader-main');
            loader.style.display = 'block';
            await axios.get(`${domainApi}/api/admin/get-list-attributes-admin`,
            {
                'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                    }
            })
            .then(res => {
            const attributes = res.data;
            this.setState({ attributes : attributes });
            loader.style.display = 'none'
            })
            .catch(error => console.log(error));
        }
    }
    render(){
        if(this.state.attributes){
            return (
                <section>
                <div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Thuộc Tính Sản Phẩm</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                    <AddAtributes/>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Action</th>
                                <th scope="col">Tên Thuộc Tính</th>
                                <th scope="col">Ngày Tạo</th>
                                <th scope="col">Ngày Sửa</th>
                            </tr>
                        </thead>
                        <tbody>
                        { this.state.attributes.map(attributes => 
                                <tr>
                                    <td>{attributes.id}</td>
                                    <td><Link to={`/admin/attribute-edit/${attributes.id}`}>Sửa : <i class="fa fa-pencil" aria-hidden="true"></i></Link></td>
                                    <td class="text-truncate" style={{maxWidth : '200px'}}>
                                    <Link to={`/admin/attribute-edit/${attributes.id}`}>{attributes.name}</Link></td>
                                    <td><FormatDate date={attributes.created_at}/></td>
                                    <td><FormatDate date={attributes.updated_at}/></td>
                                </tr>
                        )}
                        </tbody>
                        </table>
                        </div>
                </section>
             )
        }
    }
}export default FetchAttribute