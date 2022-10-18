import React from "react";
import FetchCategories from "./CategoriesList/FetchCategories";
import { Link } from "react-router-dom";
import './css/main.css'
import { Outlet } from "react-router-dom";

class Shop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          price_min: null,
          price_max: null,
          id_category : null
      }
      this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
      window.scrollTo(0, 0)
    }

    handleClick() {
      const selection = document.getElementById('filter-price')
      const id_category = selection.getAttribute("data-id")
      const min = selection.selectedOptions[0].getAttribute("data-min")
      const max = selection.selectedOptions[0].getAttribute("data-max")
      const btn = document.getElementById('btn-filter')
      if(btn){
        btn.removeAttribute('disabled')
      }
      this.setState({
        price_min : min,
        price_max : max,
        id_category : id_category
      });
    }

    render(){
        if(!this.props.product){
          function openNav() {
            document.getElementById("mySidenav").style.width = "55%";
            document.getElementById("main").style.marginLeft = "55%";
            document.getElementById("open-btn").style.display = 'none';
          }
          
          function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft= "0";
            document.getElementById("open-btn").style.display = 'block';
          }
            return (
                <>
                     <section className="container">
                        <div style={{marginTop : '4rem'}}>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to={`/`}>Trang Chủ</Link></li>
                                <li class="breadcrumb-item active">Cửa Hàng</li>
                            </ol>
                        </nav>
                        <div className="row">
                          <div className="col-md-3">
                            <div id="mySidenav" class="sidenav">
                              <a id="close-btn" href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                              <ul class="list-unstyled ps-0" style={{width : '100%', margin : '5px 5px 5px 5px'}}>
                                <label><i class="fa fa-car" aria-hidden="true"></i> <b>Hãng Xe</b></label>
                                <li class="mb-1">
                                    <FetchCategories/>
                                </li>
                                <li class="mb-1">
                                  <ul class="list-unstyled ps-0" id="form-price">
                                    <li class="mb-1">
                                      <label><b>
                                      <i class="fa fa-filter" aria-hidden="true"></i> Bộ lọc </b></label>
                                        <form id="form-filter-price">
                                          <label>Giá</label>
                                            <select class="form-select form-select-sm" id="filter-price" data-id='all' onChange={this.handleClick} aria-label=".form-select-sm example">
                                              <option data-id="op0">Chọn Khoảng Giá</option>
                                              <option data-id="op1" data-min="200000000" data-max="400000000">200tr - 400tr</option>
                                              <option data-id="op2" data-min="400000000" data-max="600000000">400tr - 600tr</option>
                                              <option data-id="op2" data-min="600000000" data-max="800000000">600tr - 800tr</option>
                                              <option data-id="op3" data-min="800000000" data-max="1000000000">800tr - 1 Tỷ</option>
                                              <option data-id="op4" data-min="1000000000" data-max="10000000000">Trên 1 Tỷ</option>
                                            </select>
                                    
                                            <div class="d-grid gap-2" style={{paddingTop: '1rem'}}>
                                              <button id="btn-filter" class="btn btn-danger btn-sm" disabled type="button">
                                                <Link style={{color : '#fff'}} to={`fillter-price/${this.state.price_min}/${this.state.price_max}/${this.state.id_category}`}>
                                                  <div className="text-center">Áp Dụng</div>
                                                </Link>
                                              </button>
                                          </div>
                                        </form>
                                      </li>
                                  </ul>
                                </li>
                            </ul>
                            </div>

                            <div id="main">
                              <span id='open-btn' onClick={openNav}>&#9776; Bộ Lọc</span>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <Outlet />
                          </div>
                        </div>
                        </div>
                    </section>
                </>
            )
        }
    }
}
export default Shop;