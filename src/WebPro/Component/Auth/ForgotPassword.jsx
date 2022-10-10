import React from "react";
import axios from "axios";
import './css/login.css';
import { Link } from "react-router-dom";
import domainApi from "../../../Config/ConfigDomainAPI";

export default function ForgotPassword() {

    function validateHandler(){
      const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
      
      const email = document.getElementById('emailInput').value
      const email_message = document.getElementById('email_message');
  
      if (validateEmail(email)) {
        document.getElementById('emailInput').style.borderColor = null;
        email_message.style.display = 'none';
        return true
      } else {
        email_message.innerText = 'Email không chính xác ! vui lòng thử lại';
        document.getElementById('emailInput').style.borderColor = 'red' 
        return false
      }
    }
  
    async function forgotpasswordHandler(event){
      event.preventDefault();
      let validate = validateHandler();
      if(validate === true){
        let email = document.getElementById('emailInput').value
        let loader = document.getElementById('login-loader')
        loader.style.display = 'block'

        await axios.post(
          `${domainApi}/api/forgot-password`,
          {
            email: email,
          })
        .then((res) => {
            window.alert("mật khẩu mới được gửi vào email của bạn")
            window.location.href = '/webpro/login'
        }).catch((error) => {
          if(error){
            let loader = document.getElementById('login-loader')
            loader.style.display = 'none'
            window.alert("chúng tôi không tìm thấy email mà bạn cung cấp")
          }
        })
      }
    }
    return (
      <section className="container">
            <nav aria-label="breadcrumb" style={{paddingTop : '4rem'}}>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to={`/webpro/`}>Trang Chủ</Link></li>
                    <li class="breadcrumb-item active">Quên Mật Khẩu</li>
                </ol>
            </nav>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-5 mx-auto">
                <div className="card border-0 shadow rounded-3">
                  <div className="card-body p-4 p-sm-5">
                    <h2 className="card-title text-center mb-5 fw-light fs-5">Quên Mật Khẩu</h2>
                    <form onSubmit={forgotpasswordHandler}>
                        <div class="spinner-border auth-spinner" id="login-loader" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id='emailInput' placeholder="name@example.com"/>
                        <label htmlFor="emailInput">Email address</label>
                        <small id='email_message' className='message_validate' style={{color: 'red'}}></small>
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Gửi</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
  }