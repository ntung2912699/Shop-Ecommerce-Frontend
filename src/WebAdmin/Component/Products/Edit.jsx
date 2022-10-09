import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './css/style.css';
import FecthCategoriesEditForm from "./FectCategories";
import AddAtributeValue from "./AddAttributeValue";
import EditAtributeValue from "./EditAttributeValue";
import { Link } from "react-router-dom";
import domainApi from "../../../Config/ConfigDomainAPI";

export default function EditProduct(){
    const [thumbnailold, setThumbnailOld] = useState([]);
    const [galleryold, setGalleryOld] = useState([]);
    const [items, setItems] = useState([]);
    const [datacategoriesId, setDataCategoriesId] = useState([]);
    const [dataname, setDataName] = useState([]);
    const [datathumbnail, setDataThumbnail] = useState([]);
    const [datagallery, setDataGallery] = useState([]);
    const [dataprice, setDataPrice] = useState([]);
    const [dataquantity, setDataQuantity] = useState([]);
    const [datashortDescription, setDataShortDescription] = useState([]);
    const [datastatus, setDataStatus] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const accesstoken = localStorage.getItem('access_token')
        if(accesstoken){
            axios.get(`${domainApi}/api/admin/show-products-admin/`+id,
            {
                'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                    }
            })
            .then(res => {
                const product = res.data;
                setItems({product : product})
                const thumbnailold = product.thumbnail
                setThumbnailOld({thumbnailold})
                const gallery_list = product.gallery.split('|')
                const galleryold = [];
                gallery_list.map((gallery, index)=>{
                    galleryold.push(gallery)
                })
                setGalleryOld({galleryold})
            })
            .catch( error => console.log(error) )
            window.scrollTo(0, 0)
        }
      }, [id]);

      function setCategoriesId(e){
        const datacategoriesId = e.target.value
        setDataCategoriesId({datacategoriesId})
      }

      function setName(e){
        const name = e.target.value
        setDataName({name})
      } 

     function setImageThumbnail(e){
        e.preventDefault()
        const thumbnailold = URL.createObjectURL(e.target.files[0]);
        setThumbnailOld({thumbnailold})
        const thumbnail = e.target.files
        setDataThumbnail({thumbnail})
    }

    function unsetImageThumbnail(){
        const thumbnailold = items.product.thumbnail;
        setThumbnailOld({thumbnailold})
        const thumbnail = null
        setDataThumbnail({thumbnail})
      }

    function setImageGallery(e){
        e.preventDefault()
        const galleryfile = e.target.files;
        const galleryold = [];
        for (let i = 0; i < galleryfile.length; i++) {
            const fileType = galleryfile[i]['type'];
            const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
            if (validImageTypes.includes(fileType)) {
                galleryold.push(URL.createObjectURL(galleryfile[i]))
            }        
            setGalleryOld({galleryold})
        }
        const gallery = e.target.files
        setDataGallery({gallery})
    }

    function unsetImageGallery(){
        const list_gallery = items.product.gallery.split('|');
        const galleryold = [];
            list_gallery.map((gallery, index)=>{
                galleryold.push(gallery)
            })
        setGalleryOld({galleryold})
        const gallery = null
        setDataGallery({gallery})
      }

    function setPrice(e){
        const price = e.target.value
        setDataPrice({price})
    } 

    function setQuantity(e){
        const qty = e.target.value
        setDataQuantity({qty})
    } 
    
    function setShortDescription(e){
        const short_description = e.target.value
        setDataShortDescription({short_description})
    }
    
    function setStatus(e){
        const status = e.target.value
        setDataStatus({status})
    }


    function submitProduct(e){
        e.preventDefault();
        const formData = new FormData();
        if(datacategoriesId.datacategoriesId){
            formData.append("categories_id", datacategoriesId.datacategoriesId);
        }
        if(dataname.name){
            formData.append("name", dataname.name);
        }
        if(datathumbnail.thumbnail){
            for (const file of datathumbnail.thumbnail) {
                formData.append("thumbnail", file);
              }
        }
        if(datagallery.gallery){
            for (const file of datagallery.gallery) {
                formData.append("gallery[]", file);
              }
        }
        if(dataprice.price){
            formData.append("price", dataprice.price);
        }
        if(dataquantity.qty){
            formData.append("quantity", dataquantity.qty);
        }
        if(datashortDescription.short_description){
            formData.append("short_description", datashortDescription.short_description);
        }
        if(datastatus.status){
            formData.append("status", datastatus.status);
        }

        const accesstoken = localStorage.getItem('access_token')
        if(accesstoken){
            axios.post(`${domainApi}/api/admin/update-products-admin/`+items.product.id,formData,
            {
                'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                    }
            })
            .then(res => {
                const product = res.data;
                const mess = document.getElementById('message-success');
                mess.setAttribute("style", "display:block;");
                setTimeout(function(){
                    mess.setAttribute("style", "display:none;"); 
                    window.location.reload();
                }, 1000);
            })
            .catch( error => {
                const mess = document.getElementById('message-error');
                mess.setAttribute("style", "display:block;");
                setTimeout(function(){
                    mess.setAttribute("style", "display:none;"); 
                }, 1000);
            })
        }
        } 

        function deleteAttribute(e,id) {
            e.preventDefault();
            const id_value = id;
            const accesstoken = localStorage.getItem('access_token')
            if(accesstoken){
                axios.delete(`${domainApi}/api/admin/destroy-attribute-value-admin/`+id_value,
                {
                    'headers': {
                        'Authorization': 'Bearer ' + accesstoken
                        }
                })
                .then(res => {
                    const product = res.data;
                    const mess = document.getElementById('message-success');
                    mess.setAttribute("style", "display:block;");
                    setTimeout(function(){
                        mess.setAttribute("style", "display:none;"); 
                        window.location.reload()
                    }, 1000);
                })
                .catch( error => {
                    const mess = document.getElementById('message-error');
                    mess.setAttribute("style", "display:block;");
                    setTimeout(function(){
                        mess.setAttribute("style", "display:none;"); 
                    }, 1000);
                })
            }
        }

        function handleDelete(e){
            e.preventDefault()
            const accesstoken = localStorage.getItem('access_token')
            if(accesstoken){
                axios.delete(`${domainApi}/api/admin/destroy-products-admin/`+items.product.id,
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
                            window.alert("Vui Lòng Xoá Các Thuộc Tính Sản Phẩm Trước Khi Thực Hiện Xoá Sản Phẩm")
                        }, 1000);
                })
            }
        }

        if(items.product){
                return (
                    <section>
                        <nav aria-label="breadcrumb" style={{paddingTop : '2rem'}}>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to={`/admin/products`}><i class="fa fa-chevron-left" aria-hidden="true"></i> Danh Sách Sản Phẩm</Link></li>
                    </ol>
                </nav>
                <div className="col-md-12">
                    <div className="card border-0 shadow rounded-3">
                        <div className="card-body p-4 p-sm-5">
                            <div className="row">
                                <div className="col-md-8" style={{ paddingBottom: '2rem'}}>
                                    <form onSubmit={submitProduct}>
                                        <h3 className="text-center">Cập Nhật Sản Phẩm</h3>
                                        <div class="mb-3">
                                           <div className="row">
                                            <div className="col-md-7">
                                                    <label for="exampleFormControlInput1" class="form-label">Tên Sản Phẩm</label>
                                                    <input type="text" class="form-control" onChange={event => setName(event)} defaultValue={items.product.name} id="exampleFormControlInput1" placeholder=""/>
                                                </div>
                                                <div className="col-md-5">
                                                    <label for="exampleFormControlInput1" class="form-label">Danh Mục</label>
                                                    <select class="form-select" onChange={event => setCategoriesId(event)} aria-label="Default select example">
                                                        <option selected defaultValue={items.product.relationship_for_categories.id}>{items.product.relationship_for_categories.name}</option>
                                                        <FecthCategoriesEditForm/>
                                                    </select>
                                                </div>
                                           </div>
                                        </div>
                                        <div class="mb-3">
                                            <div className="row">
                                                <div className="col-md-12 row">
                                                    <b>Ảnh Chính :</b>
                                                    <i style={{position : 'absolute', top : '43px', left: '85px',fontSize : '1.3rem',color : '#fff', zIndex : '100' }} onClick={unsetImageThumbnail} class="fa fa-trash-o" aria-hidden="true"></i>
                                                    <div class="button-wrap col-md-2">
                                                        <label class="button-file" style={{
                                                            backgroundImage : `url('${thumbnailold.thumbnailold}')`,
                                                            backgroundRepeat : 'round',
                                                            fontSize : '3rem',
                                                            width : '100%',
                                                            }} for="thumbnail">
                                                            <i class="fa fa-file-image-o" aria-hidden="true"></i>
                                                        </label>
                                                        <input id="thumbnail" onChange={event => setImageThumbnail(event)} hidden type="file"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 row" style={{paddingTop : '1rem'}}>
                                                <b>Ảnh Phụ :</b>
                                                {
                                                    galleryold.galleryold.map((gallery, index)=>{
                                                        return <div class="button-wrap col-md-2">
                                                             <i style={{position : 'absolute', top : '18px', left: '85px',fontSize : '1.3rem',color : '#fff', zIndex: '100' }} onClick={unsetImageGallery} class="fa fa-trash-o" aria-hidden="true"></i>
                                                        <label class="button-file" id={index} style={{
                                                            backgroundImage : `url('${gallery}')`,
                                                            backgroundRepeat : 'round',
                                                            fontSize : '3rem',
                                                            width : '100%',
                                                            }} for={`gallery${index}`}>
                                                            <i class="fa fa-file-image-o" aria-hidden="true"></i>
                                                        </label>
                                                        <input id={`gallery${index}`} onChange={event => setImageGallery(event)} hidden type="file" multiple/>
                                                    </div>
                                                    })
                                                }
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <label for="exampleFormControlInput1" class="form-label">Giá</label>
                                                    <input type="text" class="form-control" onChange={event => setPrice(event)} defaultValue={items.product.price} id="exampleFormControlInput1" placeholder=""/>
                                                </div>
                                                <div className="col-md-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Số Lượng</label>
                                                    <input type="number" class="form-control" onChange={event => setQuantity(event)} defaultValue={items.product.quantity} id="exampleFormControlInput1" placeholder=""/>
                                                </div>
                                                <div className="col-md-4">
                                                    <label for="exampleFormControlInput1" class="form-label">Trạng Thái</label>
                                                    <input type="text" class="form-control" onChange={event => setStatus(event)} defaultValue={items.product.status} id="exampleFormControlInput1" placeholder=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Mô Tả</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" onChange={event => setShortDescription(event)} rows="3">{items.product.short_description}</textarea>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button class="btn btn-danger" type="submit">Lưu Lại</button>
                                            <button class="btn btn-secondary" onClick={handleDelete} type="button">Xoá</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4" style={{paddingBottom: '2rem'}}>
                                    <form>
                                        <h3 className="text-center">Thuộc Tính Sản Phẩm</h3>
                                        <div className="row">
                                        {
                                            Object.keys(items.product.attribute).map((e, i)=>{
                                                return <div class="mb-3 col-md-6">
                                                        <label for="exampleFormControlInput1" class="form-label">{e}</label>
                                                        { items.product.attribute[e].map((element, index) => {
                                                            return <>
                                                                <i style={{color : '#dc3545', marginLeft : '5px'}} onClick={event => deleteAttribute(event, element.id)} class="fa fa-trash-o" aria-hidden="true"></i>
                                                                <EditAtributeValue attributes={e} attributes_value={element.value} attributes_value_id={element.id} />
                                                                <input type="text" disabled class="form-control" defaultValue={element.value} id="exampleFormControlInput1" placeholder=""/>
                                                                </>
                                                            })
                                                        }
                                                    </div>
                                                })
                                            }
                                        </div>
                                        <div class="d-grid gap-2">
                                            <AddAtributeValue product_id={items.product.id}/>
                                        </div>
                                    </form>
                                </div>
                            </div>
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