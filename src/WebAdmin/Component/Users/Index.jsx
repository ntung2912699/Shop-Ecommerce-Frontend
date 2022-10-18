import React from "react";
import axios from "axios";
import FormatDate from "../../FormatData/FormatDate";
import EditRoleUser from "./EditRoleUser";
import domainApi from "../../../Config/ConfigDomainAPI";

class FecthUsers extends React.Component{
    state = {
        users: []
      }
      async componentDidMount(){
        const accesstoken = localStorage.getItem('access_token')
        if(accesstoken){
            const loader = document.getElementById('loader-main');
            loader.style.display = 'block';
            await axios.get(`${domainApi}/api/admin/get-users-admin`,
            {
                'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                    }
            })
            .then(res => {
            const users = res.data;
            this.setState({ users : users });
            loader.style.display = 'none';
            })
            .catch(error => console.log(error));
        }
    }
    render(){
        if(this.state.users){
            return (
                <section>
                <div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Tài Khoản</h1>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Email</th>
                                <th scope="col">Quyền Truy Cập</th>
                                <th scope="col">Ngày Tạo</th>
                                <th scope="col">Ngày Sửa</th>
                            </tr>
                        </thead>
                        <tbody>
                        { this.state.users.map(users => 
                                <tr>
                                    <td>{users.id}</td>
                                    <td class="text-truncate" style={{maxWidth : '200px'}}>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td>
                                        <u>{users.role} </u>
                                        <EditRoleUser className="text-center" role={users.role} users_id={users.id}/></td>
                                    <td><FormatDate date={users.created_at}/></td>
                                    <td><FormatDate date={users.updated_at}/></td>
                                </tr>
                        )}
                        </tbody>
                        </table>
                        </div>
                </section>
             )
        }
    }
}export default FecthUsers