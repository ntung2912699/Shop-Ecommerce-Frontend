import React from "react";
import axios from "axios";
import domainApi from "../../../Config/ConfigDomainAPI";

class EditRoleUser extends React.Component{
    constructor(props) {
        super(props);
      }

    handleClick(){
    const roles = document.getElementById('role');
    const id = this.props.users_id
    if (roles) {
        const role = roles.value
        const accesstoken = localStorage.getItem('access_token')
        if(accesstoken){
            axios.post(`${domainApi}/api/admin/update-users-role-admin/`+id,
                {
                    role : role,
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
        if(this.props.role){
            return (
                <>
                    <a type="button" data-bs-toggle="modal" data-bs-target={`#rolesModal${this.props.users_id}`}>
                        <small> <i class="fa fa-pencil" aria-hidden="true"></i></small>
                    </a>
                    <div class="modal fade" id={`rolesModal${this.props.users_id}`} tabindex="-1" aria-labelledby={`rolesModal${this.props.users_id}Label`} aria-hidden="true">
                    <div class="modal-dialog">
                        <form style={{paddingTop : '2rem'}}>
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id={`rolesModal${this.props.users_id}Label`}>Sửa Quyền Truy Cập</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className="mb-3">
                                        <select id="role" class="form-select" aria-label="Default select example">
                                            <option value={this.props.role} selected>{this.props.role}</option>
                                            {this.props.role==='Admin' ? <option value="Client">Client</option> : <option value="Admin">Admin</option>}
                                        </select>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" onClick={() => this.handleClick()} class="btn btn-danger">Lưu Lại</button>
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
export default EditRoleUser