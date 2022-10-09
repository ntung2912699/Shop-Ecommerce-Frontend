import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DeleteAttribute from "./DeleteAttribute";
import { Link } from "react-router-dom";
import domainApi from "../../../../Config/ConfigDomainAPI";

export default function EditAttribute(){
    const [items, setItems] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const accesstoken = localStorage.getItem('access_token')
        if(accesstoken){
            axios.get(`${domainApi}/api/admin/get-attribute-admin/`+id,
            {
                'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                    }
            })
            .then(res => {
                const attribute = res.data;
                setItems({attribute : attribute})
            })
            .catch( error => console.log(error) )
            window.scrollTo(0, 0)
        }
      }, [id]);

      async function editHandler(event){
        event.preventDefault();
        let name = document.getElementById('name-attr')
            if(name){
                const value_name = name.value
                const accesstoken = localStorage.getItem('access_token')
                if(accesstoken){
                    await axios.post(`${domainApi}/api/admin/update-attributes/`+id,
                        {
                            name : value_name
                        },
                        {
                            'headers': {
                                'Authorization': 'Bearer ' + accesstoken
                                }
                        }).then(res => {
                            const mess = document.getElementById('message-success');
                            mess.setAttribute("style", "display:block;");
                            setTimeout(function(){ mess.setAttribute("style", "display:none;"); }, 2000);
                    }).catch(error => {
                            const mess = document.getElementById('message-error');
                            mess.setAttribute("style", "display:block;");
                            setTimeout(function(){
                                mess.setAttribute("style", "display:none;"); 
                                window.location.reload();
                            }, 1000);
                    })
                }
            }
        }
        if(items.attribute){
            return (
                <section>
                    <nav aria-label="breadcrumb" style={{paddingTop : '2rem'}}>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to={`/admin/attribute-products`}><i class="fa fa-chevron-left" aria-hidden="true"></i> Danh Sách Danh Mục</Link></li>
                        </ol>
                    </nav>
                    <div className="col-md-8 offset-md-2">
                        <div className="card border-0 shadow rounded-3">
                            <div className="card-body p-4 p-sm-5">
                                <form onSubmit={editHandler}>
                                    <h3 className="text-center">Sửa Thuộc Tính</h3>
                                    <div class="mb-3">
                                        <label for="name-attr" class="form-label">Tên Thuộc Tính</label>
                                        <input type="text" defaultValue={items.attribute.name} class="form-control" id="name-attr" aria-describedby=""/>
                                    </div>
                                    <button type="submit" class="btn btn-danger btn-sm">Lưu Lại</button>
                                    <DeleteAttribute/>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }else{  
            return (
                <div class="spinner-border detail-spinner" id="detail-loader" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            )
        }

}