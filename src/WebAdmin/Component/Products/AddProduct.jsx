import React from "react";
import axios from "axios";
import FecthCategoriesEditForm from "./FectCategories";
import { Link } from "react-router-dom";
import domainApi from "../../../Config/ConfigDomainAPI";

class AddProduct extends React.Component{
    constructor(props) {
            super(props);
            this.loadImageThumbnail = this.loadImageThumbnail.bind(this);
            this.loadImageGallery = this.loadImageGallery.bind(this);
            this.submitProduct = this.submitProduct.bind(this);
            this.state = {
                attributes : [],
                thumbnail : [],
                thumbnail_review : null,
                gallery : [],
                gallery_preview : []
            }
        }
        loadImageThumbnail(e){
            this.setState({
                thumbnail : e.target.files,
                thumbnail_review : e.target.files[0],
            })
        }

        loadImageGallery(e){
            this.setState({
                gallery: e.target.files
            });
            const file = e.target.files;
            const arr_gallery = [];
            for (let i = 0; i < file.length; i++) {
                const fileType = file[i]['type'];
                const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
                if (validImageTypes.includes(fileType)) {
                    arr_gallery.push(file[i])
                }        
                this.setState({
                    gallery_preview : arr_gallery,
                });
            }
        }

        submitProduct(e){
            e.preventDefault();
            const name = document.getElementById('name-product');
            const categories_id = document.getElementById('categories-product');
            const price = document.getElementById('price-product');
            const quantity = document.getElementById('qty-product');
            const status = document.getElementById('status-product');
            const short_description = document.getElementById('shortdescription-product');
            const formData = new FormData();
            formData.append("categories_id", categories_id.value);
            formData.append("name", name.value);
            if (this.state.thumbnail) {
                for (const file of this.state.thumbnail) {
                  formData.append("thumbnail", file);
                }
              }
              if (this.state.gallery) {
                for (const file of this.state.gallery) {
                  formData.append("gallery[]", file);
                }
              }
            formData.append("price", price.value);
            formData.append("quantity", quantity.value);
            formData.append("short_description", short_description.value);
            formData.append("status", status.value);
            const accesstoken = localStorage.getItem('access_token')
            if(accesstoken){
                const loader = document.getElementById('loader-main');
                loader.style.display = 'block';
                axios.post(`${domainApi}/api/admin/create-products-admin`,formData,
                {
                    'headers': {
                        'Authorization': 'Bearer ' + accesstoken
                        }
                })
                .then(res => {
                    const product = res.data;
                    const mess = document.getElementById('message-success');
                    mess.setAttribute("style", "display:block;");
                    loader.style.display = 'none';
                    setTimeout(function(){
                        mess.setAttribute("style", "display:none;"); 
                        window.location.href = 'edit-product/'+product.id;
                    }, 1000);
                })
                .catch( error => {
                    const mess = document.getElementById('message-error');
                    mess.setAttribute("style", "display:block;");
                    loader.style.display = 'none';
                    setTimeout(function(){
                        mess.setAttribute("style", "display:none;"); 
                    }, 1000);
                })
            }
        } 
 
     render(){
        return (
            <section>
                <nav aria-label="breadcrumb" style={{paddingTop : '2rem'}}>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to={`/admin/products`}><i class="fa fa-chevron-left" aria-hidden="true"></i> Danh Sách Sản Phẩm</Link></li>
                    </ol>
                </nav>
                <div className="col-md-8 offset-md-2">
                    <div className="card border-0 shadow rounded-3">
                        <div className="card-body p-4 p-sm-5">
                            <form onSubmit={this.submitProduct}>
                                <h3 className="text-center">Thêm Sản Phẩm</h3>
                                <div className="mb-3 row">
                                    <div class="col-md-6">
                                        <label for="name-product" class="form-label">Tên Sản Phẩm</label>
                                        <input type="text" class="form-control" id="name-product" placeholder=""/>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="categories-product" class="form-label">Hãng Sản Xuất</label>
                                        <select class="form-select" id="categories-product" aria-label="Default select example">
                                            <option selected value=""></option>
                                            <FecthCategoriesEditForm/>
                                        </select>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <div className="col-md-3">
                                        <label for="thumbnail-file" class="form-label" style={{}}>
                                            <i style={{fontSize : '3rem', }} class="fa fa-camera" aria-hidden="true"></i><p>Ảnh Chính :</p>
                                        </label>
                                        <input class="form-control" hidden onChange={event => this.loadImageThumbnail(event)} type="file" id="thumbnail-file"/>
                                        <div className="col-md-12">
                                        <img style={{width:'100px', marginLeft : '-1rem', marginTop : '-1rem'}}  src={this.state.thumbnail_review? URL.createObjectURL(this.state.thumbnail_review) : 'https://media.istockphoto.com/vectors/image-unavailable-icon-vector-id1022028010?k=20&m=1022028010&s=612x612&w=0&h=Q-itsi4QP5ISEKGI3dxuyrERXTPO58lSBQIiZ_zHhs0='} />
                                        </div>
                                    </div>
                                    <div class="col-md-9">
                                        <label for="gallery-file" class="form-label" style={{}}>
                                            <i style={{fontSize : '3rem', }} class="fa fa-camera" aria-hidden="true"></i><p>Ảnh Phụ :</p>
                                        </label>
                                        <input class="form-control" type="file" hidden onChange={event => this.loadImageGallery(event)} id="gallery-file" multiple/>
                                        <div className="col-md-12 row">
                                        {   
                                            this.state.gallery_preview.map((file, key) => {
                                                return (
                                                    <div key={key} className="col-md-3" style={{marginTop : '20px'}}>
                                                        <img style={{width:'100px', marginLeft : '-1rem', marginTop : '-1rem'}} src={URL.createObjectURL(file)}/>
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div class="col-md-4">
                                        <label for="price-product" class="form-label">Giá</label>
                                        <input type="text" class="form-control" id="price-product" placeholder=""/>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="qty-product" class="form-label">Số Lượng</label>
                                        <input type="number" class="form-control" id="qty-product" placeholder=""/>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="status-product" class="form-label">Trạng Thái</label>
                                        <input type="text" class="form-control" id="status-product" placeholder=""/>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="shortdescription-product" class="form-label">Mô Tả</label>
                                    <textarea class="form-control" id="shortdescription-product" rows="3"></textarea>
                                </div>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-danger" type="submit">Thêm Sản Phẩm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </section>
       )
     }
}export default AddProduct;