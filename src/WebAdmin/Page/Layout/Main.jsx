import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import './css/index.css';

class AdminLayOut extends React.Component{
    render(){
        return(
           <>
           <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow" style={{minHeight: '3rem'}}>
            <div className="container">
                <div className="col-md-12 text-center">
                <img src="https://static.wixstatic.com/media/6f1180_ab3dc37dd898402d8e20a625a6a3bec2~mv2.png/v1/crop/x_0,y_309,w_3508,h_1402/fill/w_905,h_362,al_c,usm_0.66_1.00_0.01,enc_auto/autosmart%20logo%20stoke.png"
                        height="50"/>
                </div>
                <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            </header>

                <div class="">
                <div class="row">
                    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div class="position-sticky pt-3 sidebar-sticky">
                        <ul class="nav flex-column">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to={'/admin'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home align-text-bottom" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            Dashboard
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={'/admin/categories'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file align-text-bottom" aria-hidden="true"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                            Danh Mục
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={'/admin/products'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart align-text-bottom" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                            Sản Phẩm
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={'/admin/attribute-products'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers align-text-bottom" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                            Thuộc Tính
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={'/admin/users'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users align-text-bottom" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            Users
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={'/'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2 align-text-bottom" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                            Site WebProd
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </nav>

                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                        <div className="container">
                            <div class="shadow-lg p-3 mb-5 bg-body rounded alert-message-success" id="message-success">
                                <div class="card">
                                <div class="card-body text-center">
                                    <h5 class="card-title" style={{fontSize : '100px', color : 'green'}}><i class="fa fa-check" aria-hidden="true"></i></h5>
                                    <p class="card-text">Thành Công</p>
                                </div>
                                </div>
                            </div>
                            <div class="shadow-lg p-3 mb-5 bg-body rounded alert-message-error" id="message-error">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <h5 class="card-title" style={{fontSize : '100px', color : 'red'}}><i class="fa fa-exclamation" aria-hidden="true"></i></h5>
                                        <p class="card-text">Vui Lòng Thử Lại</p>
                                    </div>
                                </div>
                            </div>
                            <div class="spinner-border loader-main-spinner" id="loader-main" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <Outlet/>
                        </div>
                    </main>
                </div>
                </div>
           </>
        )
    }
}
export default AdminLayOut;
