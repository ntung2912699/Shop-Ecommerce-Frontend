import React from "react";
import axios from "axios";
import './css/login.css';
import { Link } from "react-router-dom";
import domainApi from "../../../Config/ConfigDomainAPI";

export default function ChangePassword() {
    window.scrollTo(0, 0)
    async function changPasswordHandler(event){
        event.preventDefault();
        const oldpassword = document.getElementById('oldpassword').value
        const newpassword = document.getElementById('newpassword').value
        const loader = document.getElementById('login-loader')
        loader.style.display = 'block'

        const accesstoken = localStorage.getItem('access_token')
        if(accesstoken){
            await axios.post(
                `${domainApi}/api/auth/change-password`,
                {
                    oldpassword: oldpassword,
                    newpassword: newpassword
                },
                {
                    'headers': {
                        'Authorization': 'Bearer ' + accesstoken
                        }
                })
                .then((res) => {
                    window.alert('Thay đổi mật khẩu thành công')
                    window.location.href = '/';
                }).catch((error) => {
                    if(error){
                    console.log(error.response.data);
                    if(error.response.data.newpassword){
                        const message_newpass = error.response.data.newpassword[0]
                        let loader = document.getElementById('login-loader')
                        loader.style.display = 'none'
                        document.getElementById('newpassword').style.borderColor = 'red' 
                        document.getElementById('password_message').innerText = 'Mật khẩu mới phải trên 6 kí tự'
                        document.getElementById('password_message').style.display = 'block'
                    }else{
                        const message = error.response.data
                        let loader = document.getElementById('login-loader')
                        loader.style.display = 'none'
                        document.getElementById('oldpassword').style.borderColor = 'red' 
                        document.getElementById('email_message').innerText = message
                        document.getElementById('email_message').style.display = 'block'
                        }
                    }
                })
            }
        }
    return (
      <section className="container">
            <nav aria-label="breadcrumb" style={{paddingTop : '4rem'}}>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to={`/web/`}>Trang Chủ</Link></li>
                    <li class="breadcrumb-item active">Thay Đổi Mật Khẩu</li>
                </ol>
            </nav>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-5 mx-auto">
                <div className="card border-0 shadow rounded-3">
                  <div className="card-body p-4 p-sm-5">
                    <h2 className="card-title text-center mb-5 fw-light fs-5">Thay Đổi Mật Khẩu</h2>
                    <form onSubmit={changPasswordHandler}>
                        <div class="spinner-border auth-spinner" id="login-loader" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                      <div className="form-floating mb-3">
                        <input type="password" className="form-control" id='oldpassword' placeholder="***********"/>
                        <label htmlFor="oldpassword">Nhập Mật Khẩu Cũ</label>
                        <small id='email_message' className='message_validate' style={{color: 'red'}}></small>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="password" className="form-control" id='newpassword' placeholder="***********"/>
                        <label htmlFor="newpassword">Nhập Mật Khẩu Mới</label>
                        <small id='password_message' className='message_validate' style={{color: 'red'}}></small>
                      </div>
  
                      <div className="d-grid">
                        <button className="btn btn-danger btn-login text-uppercase fw-bold" type="submit">Gửi</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
  }