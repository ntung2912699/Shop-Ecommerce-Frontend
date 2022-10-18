import React from "react";
import axios from "axios";
import domainApi from "../../../../Config/ConfigDomainAPI";

class AddAtributes extends React.Component{
    constructor(props) {
        super(props);
      }

   async submitAttribute(event){
        event.preventDefault();
        const name = document.getElementById('name-attr');
       if (name) {
            const name_value = name.value
            const accesstoken = localStorage.getItem('access_token')
            if(accesstoken){
                const loader = document.getElementById('loader-main');
                loader.style.display = 'block';
                await axios.post(`${domainApi}/api/admin/create-attribute-admin`,
                    {
                        'name' : name_value
                    },
                    {
                        'headers': {
                            'Authorization': 'Bearer ' + accesstoken
                            }
                    }).then((res) => {
                        const mess = document.getElementById('message-success');
                        mess.setAttribute("style", "display:block;");
                        loader.style.display = 'none';
                        setTimeout(function(){
                            mess.setAttribute("style", "display:none;"); 
                            window.location.reload();
                        }, 2000);
                    }).catch(error => {
                        const mess = document.getElementById('message-error');
                        mess.setAttribute("style", "display:block;");
                        loader.style.display = 'none';
                        setTimeout(function(){
                            mess.setAttribute("style", "display:none;"); 
                        }, 1000);
                })
            }
       }
    }

    render(){
        return (
            <>
                <button type="button" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Tạo Thuộc Tính
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <form style={{paddingTop : '2rem'}} onSubmit={this.submitAttribute}>
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Thêm Thuộc Tính</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label for="name-attr" class="form-label">Tên Thuộc Tính</label>
                                    <input type="text" class="form-control" id="name-attr" aria-describedby=""/>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-danger">Lưu Lại</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </>
        )
    }
}
export default AddAtributes