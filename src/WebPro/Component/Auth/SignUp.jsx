import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import domainApi from '../../../Config/ConfigDomainAPI';

export default function SignUn() {

  function validateHandler(){
    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };
    
    const name_message = document.getElementById('name_message');
    const email_message = document.getElementById('email_message');
    const password_message = document.getElementById('password_message');
    const password_confirm_message = document.getElementById('password_confirm_message');
    const email = document.getElementById('emailInput').value
    const name = document.getElementById('nameInput').value
    const password = document.getElementById('passwordInput').value
    const passwordConfirm = document.getElementById('password_confirmationInput').value

    if(name !== ""){
      document.getElementById('nameInput').style.borderColor = null 
      name_message.style.display = 'none';
      if (validateEmail(email)) {
        document.getElementById('emailInput').style.borderColor = null 
        email_message.style.display = 'none';
        if(password !== ""){
          if(password.length > 6){
            if(passwordConfirm !== "" && passwordConfirm === password){
              document.getElementById('passwordInput').style.borderColor = null
              password_message.style.display = 'none';
              password_confirm_message.style.display = 'none';
              return true
            }
            else{
              document.getElementById('password_confirmationInput').style.borderColor = 'red' 
              password_message.style.display = 'none';
              password_confirm_message.innerText = 'Mật khẩu không khớp ! vui lòng thử lại';
            }
          }
          else{
            document.getElementById('passwordInput').style.borderColor = 'red' 
            password_message.innerText = 'Mật khẩu phải có ít nhất 6 kí tự';
          }
        }
        else {
          document.getElementById('passwordInput').style.borderColor = 'red' 
          password_message.innerText = 'Mật khẩu không được để trống';
        }
      } else {
        email_message.innerText = 'Email không đúng ! vui lòng thử lại';
        document.getElementById('emailInput').style.borderColor = 'red' 
      }
    }else{
          document.getElementById('nameInput').style.borderColor = 'red' 
          name_message.innerText = 'Tên không được để trống';
    }
    return false;
  }

  function signInHandler(event) {
    event.preventDefault();
    let validate = validateHandler();

    if(validate === true){
      let name = document.getElementById('nameInput').value
      let email = document.getElementById('emailInput').value
      let password = document.getElementById('passwordInput').value
      let password_confirmation = document.getElementById('password_confirmationInput').value
      let loader = document.getElementById('login-loader')
      loader.style.display = 'block'

    try {
      axios.post(
        `${domainApi}/api/auth/register`,
        {
            name : name,
            email: email,
            password: password,
            password_confirmation : password_confirmation,
        })
      .then((res) => {
        window.location.href = '/login';
      })
    } catch (error) {
      if(error){
        let loader = document.getElementById('login-loader')
        loader.style.display = 'none'
        document.getElementById('message_fail').innerText = 'Xin lỗi ! đăng ký không thành công. Vui lòng thử lại sau'
      }
    }
    }
  }


  return (
    <section className="container">
      <nav aria-label="breadcrumb" style={{paddingTop : '3rem'}}>
          <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link to={`/`}>Trang Chủ</Link></li>
              <li class="breadcrumb-item active">Đăng Ký</li>
          </ol>
      </nav>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3">
            <div className="card-body p-4 p-sm-5">
              <h2 className="card-title text-center mb-5 fw-light fs-5">Đăng Ký Tài Khoản</h2>
              <form onSubmit={signInHandler}>
                <div class="spinner-border auth-spinner" id="login-loader" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <small id='message_fail' style={{color: 'red'}}></small>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id='nameInput' placeholder="name"/>
                  <label htmlFor="nameInput">Tên</label>
                  <small id='name_message' className='message_validate' style={{color: 'red'}}></small>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id='emailInput' placeholder="name@example.com"/>
                  <label htmlFor="emailInput">Email</label>
                  <small id='email_message' className='message_validate' style={{color: 'red'}}></small>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id='passwordInput' placeholder="Password"/>
                  <label htmlFor="passwordInput">Mật Khẩu</label>
                  <small id='password_message' className='message_validate' style={{color: 'red'}}></small>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control"  id='password_confirmationInput' placeholder="Password confirm"/>
                  <label htmlFor="passwordInput">Nhập Lại Mật Khẩu</label>
                  <small id='password_confirm_message' className='message_validate' style={{color: 'red'}}></small>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary btn-login text-uppercase fw-bold" type='submit'>Đăng Ký</button>
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
                    <label className="form-check-label" style={{paddingTop: '2rem'}}>Bạn đã có tài khoản <a href='/login' style={{color: '#0d6efd'}}>Đăng Nhập Ngay !</a></label>
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