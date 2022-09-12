import React from "react";
import axios from "axios";
import './css/login.css';

export default function LoginClient() {

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
  
    async function loginHandler(event){
      event.preventDefault();
      let validate = validateHandler();
      if(validate === true){
        let email = document.getElementById('emailInput').value
        let password = document.getElementById('passwordInput').value
        let loader = document.getElementById('login-loader')
        loader.style.display = 'block'

        await axios.post(
          'https://ecommerce-shop-api-project.herokuapp.com/api/auth/login',
          {
            email: email,
            password: password
          })
        .then((res) => {
          let access_token = res.data.token
          let user_name = res.data.user.name
          let email = res.data.user.email
          let id = res.data.user.id
          localStorage.setItem('access_token', access_token)
          localStorage.setItem('user_name', user_name)
          localStorage.setItem('email', email)
          localStorage.setItem('users_id', id)
          window.location.href = '/';
        }).catch((error) => {
          if(error){
            let loader = document.getElementById('login-loader')
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
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-5 mx-auto">
                <div className="card border-0 shadow rounded-3 my-5">
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
                        <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Đăng Nhập</button>
                      </div>
                      <hr className="my-4"/>
                      <div className="d-grid mb-2">
                        <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                          <i className="fab fa-google me-2"></i> Sign in with Google
                        </button>
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                          <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                        </button>
                      </div>
                      <div className="form-check mb-3">
                        <div className="d-grid text-center">
                          <label className="form-check-label" style={{paddingTop: '2rem'}}>Bạn chưa có tài khoản <a href='/signup' style={{color: '#0d6efd'}}>Đăng Ký Ngay !</a></label>
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