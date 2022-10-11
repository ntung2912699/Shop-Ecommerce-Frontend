import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import domainApi from "../../../Config/ConfigDomainAPI";

export default function EditCategory(){
    const [items, setItems] = useState([]);
    const [logoold, setLogoOld] = useState([]);
    const [datalogo, setDataLogo] = useState([]);
    const [dataname, setDataName] = useState([]);
    const [datastatus, setDataStatus] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const accesstoken = localStorage.getItem('access_token')
        if(accesstoken){
            axios.get(`${domainApi}/api/admin/show-categories-admin/`+id,
                {
                    'headers': {
                        'Authorization': 'Bearer ' + accesstoken
                        }
                })
                .then(res => {
                    const category = res.data;
                    const logoold = category.logo;
                    setItems({category})
                    setLogoOld({logoold})
                })
                .catch( error => console.log(error) )
            window.scrollTo(0, 0)
        }
      }, [id]);

      function setLogo(e){
        e.preventDefault()
        const logoold = URL.createObjectURL(e.target.files[0]);
        setLogoOld({logoold})
        const logo = e.target.files
        setDataLogo({logo})
      }

      function setName(e){
        const name = e.target.value
        setDataName({name})
      }

      function setStatus(e){
        const status = e.target.value
        setDataStatus({status})
      }

      function unsetLogo(){
        const logoold = items.category.logo;
        setLogoOld({logoold})
        const logo = null
        setDataLogo({logo})
      }

      function handleSubmit(e){
        e.preventDefault()
        const formData = new FormData();
        if(dataname.name){
            formData.append("name", dataname.name);
        }
        if(datalogo.logo){
            for (const file of datalogo.logo) {
                formData.append("logo", file);
              }
        }
        if(datastatus.status){
            formData.append("status", datastatus.status);
        }
        const accesstoken = localStorage.getItem('access_token')
        if(accesstoken){
            axios.post(`${domainApi}/api/admin/update-categories-admin/`+items.category.id,formData,
            {
                'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                    }
            })
            .then(res => {
                const mess = document.getElementById('message-success');
                    mess.setAttribute("style", "display:block;");
                    const form = document.getElementById('form-categories');
                    form.reset();
                    setTimeout(function(){
                        mess.setAttribute("style", "display:none;"); 
                    }, 2000);
            })
            .catch( error => {
                const mess = document.getElementById('message-error');
                    mess.setAttribute("style", "display:block;");
                    setTimeout(function(){
                        mess.setAttribute("style", "display:none;"); 
                    }, 2000);
            })
        }
      }

      function handleDelete(e){
        e.preventDefault()
        const accesstoken = localStorage.getItem('access_token')
        if(accesstoken){
            axios.delete(`${domainApi}/api/admin/destroy-categories-admin/`+items.category.id,
            {
                'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                    }
            })
            .then(res => {
                const mess = document.getElementById('message-success');
                    mess.setAttribute("style", "display:block;");
                    setTimeout(function(){
                        mess.setAttribute("style", "display:none;"); 
                        window.location.href = '/admin/categories';
                    }, 1000);
            })
            .catch( error => {
                const mess = document.getElementById('message-error');
                    mess.setAttribute("style", "display:block;");
                    setTimeout(function(){
                        mess.setAttribute("style", "display:none;"); 
                        window.alert("Vui Lòng Xoá Hoặc Chỉnh Sửa Các Sản Phẩm Thuộc Danh Mục Trước Khi Thực Hiện Xoá Danh Mục")
                    }, 1000);
            })
        }
      }

        if(items.category){
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
                                    <form id="form-categories" onSubmit={handleSubmit}>
                                    <h3 className="text-center">Sửa Danh Mục</h3>
                                        <div className="mb-3">
                                            <label for="name" className="form-label">Tên Danh Mục</label>
                                            <input type="text" className="form-control" onChange={event => setName(event)} defaultValue={items.category.name} id="name" placeholder=""/>
                                        </div>
                                        <div className="mb-3">
                                            <p>Logo : </p>
                                            <i style={{position : 'relative', top : '-22px', left: '77px',fontSize : '1.3rem', }} onClick={unsetLogo} className="fa fa-trash-o" aria-hidden="true"></i>
                                            <label for="logo" id="preview-logo" className="form-label" style={{
                                                backgroundImage : `url('${logoold.logoold}')`,
                                                backgroundRepeat : 'round',
                                                width : '100px',
                                                height : '100px',
                                                border : '2px dashed',
                                                marginLeft : '-18px',
                                                borderRadius : '10px'}}>
                                                    <i style={{position : 'relative', top : '25%', left: '30%', fontSize : '3rem', }} className="fa fa-file-image-o" aria-hidden="true"></i>
                                            </label>
                                            <input hidden className="form-control" onChange={event => setLogo(event)} type="file" id="logo"/>
                                        </div>
                                        <div className="mb-3">
                                            <label for="status" className="form-label">Trạng Thái</label>
                                            <input type="text"  onChange={event => setStatus(event)} defaultValue={items.category.status} className="form-control" id="status" placeholder=""/>
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-danger" type="submit">Xác Nhận</button>
                                            <button className="btn btn-secondary" onClick={handleDelete} type="button">Xoá</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                </section>
            )
        }else{  
            return (
                <div className="spinner-border detail-spinner" id="detail-loader" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )
        }

}