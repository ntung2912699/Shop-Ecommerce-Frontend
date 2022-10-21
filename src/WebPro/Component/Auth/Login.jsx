import React from "react";
import axios from "axios";
import './css/login.css';
import { Link } from "react-router-dom";
import domainApi from "../../../Config/ConfigDomainAPI";

export default function Login() {

    function validateHandler(){
      const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
      
      const email = document.getElementById('emailInput').value
      const password = document.getElementById('passwordInput').value
      const email_message = document.getElementById('email_message');
      const password_message = document.getElementById('password_message');
  
      if (validateEmail(email)) {
        document.getElementById('emailInput').style.borderColor = null;
        email_message.style.display = 'none';
        if(password !== ""){
          if(password.length > 6){
            document.getElementById('passwordInput').style.borderColor = null 
            password_message.style.display = 'none';
            return true
          }
          else {
            document.getElementById('passwordInput').style.borderColor = 'red' 
            password_message.innerText = 'Mật khẩu phải lớn hơn 6 ký tự';
            return false
          }
        }
        else {
          document.getElementById('passwordInput').style.borderColor = 'red' 
          password_message.innerText = 'Mật khẩu không được để trống';
          return false
        }
      } else {
        email_message.innerText = 'Email không chính xác ! vui lòng thử lại';
        document.getElementById('emailInput').style.borderColor = 'red' 
        return false
      }
    }
  
    function loginHandler(e){
      e.preventDefault();
      let validate = validateHandler();
      if(validate === true){
        const formData = new FormData();
        const email = document.getElementById('emailInput').value
        const password = document.getElementById('passwordInput').value
        const loader = document.getElementById('login-loader')
        loader.style.display = 'block'
        formData.append("email", email);
        formData.append("password", password);
        axios.post(`${domainApi}/api/auth/login`,formData,
          {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }
          })
        .then((response) => {
          const access_token = response.data.token
          const user_name = response.data.user.name
          const email = response.data.user.email
          const id = response.data.user.id
          window.localStorage.setItem('access_token', access_token)
          window.localStorage.setItem('user_name', user_name)
          window.localStorage.setItem('email', email)
          window.localStorage.setItem('users_id', id)
          window.location.assign('/')
        }).catch((error) => {
          console.log(error);
          if(error){
            const loader = document.getElementById('login-loader')
            loader.style.display = 'none'
            document.getElementById('emailInput').style.borderColor = 'red' 
            document.getElementById('passwordInput').style.borderColor = 'red' 
            document.getElementById('email_message').innerText = "Thông tin đăng nhập không chính xác ! vui lòng thử lại"
            document.getElementById('email_message').style.display = 'block'
            document.getElementById('password_message').innerText = "Thông tin đăng nhập không chính xác ! vui lòng thử lại"
            document.getElementById('password_message').style.display = 'block'
          }
        })
      }
    }
    return (
      <section className="container">
            <div id='message-render'></div>
            <nav aria-label="breadcrumb" style={{paddingTop : '4rem'}}>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to={`/`}>Trang Chủ</Link></li>
                    <li class="breadcrumb-item active">Đăng Nhập</li>
                </ol>
            </nav>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-5 mx-auto">
                <div className="card border-0 shadow rounded-3">
                  <div className="card-body p-4 p-sm-5">
                    <h2 className="card-title text-center mb-5 fw-light fs-5">Đăng Nhập</h2>
                    <form onSubmit={loginHandler}>
                        <div class="spinner-border auth-spinner" id="login-loader" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id='emailInput' placeholder="name@example.com"/>
                        <label htmlFor="emailInput">Email address</label>
                        <small id='email_message' className='message_validate' style={{color: 'red'}}></small>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="password" className="form-control" id='passwordInput' placeholder="Password"/>
                        <label htmlFor="passwordInput">Password</label>
                        <small id='password_message' className='message_validate' style={{color: 'red'}}></small>
                      </div>
  
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                        <label className="form-check-label" htmlFor="rememberPasswordCheck">
                          Remember password
                        </label>
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-danger btn-login text-uppercase fw-bold" type="submit">Đăng Nhập</button>
                      </div>
                      <hr className="my-4"/>
                      {/* <div className="d-grid mb-2">
                        <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                          <i className="fab fa-google me-2"></i> Sign in with Google
                        </button>
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                          <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                        </button>
                      </div> */}
                      <div className="form-check mb-3">
                      <div className="d-grid text-center">
                          <label className="form-check-label" style={{paddingTop: '2rem'}}><Link to={`/forgot-password`} style={{color: '#0d6efd'}}>Quên Mật Khẩu!</Link></label>
                        </div>
                        <div className="d-grid text-center">
                          <label className="form-check-label" style={{paddingTop: '2rem'}}>Bạn chưa có tài khoản <Link to={`/signup`} style={{color: '#0d6efd'}}>Đăng Ký Ngay !</Link></label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
  }