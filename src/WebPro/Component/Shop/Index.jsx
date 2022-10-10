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
            return (
                <>
                     <section className="container">
                        <div style={{marginTop : '4rem'}}>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to={`/webpro/`}>Trang Chủ</Link></li>
                                <li class="breadcrumb-item active">Cửa Hàng</li>
                            </ol>
                        </nav>
                            <div className="row">
                              <div className="col-md-3">
                              <div class="flex-shrink-0 bg-white navbar-expand-lg">
                                    <button class="navbar-toggler"
                                        style={{width : '100%'}}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent2"
                                        aria-controls="navbarSupportedContent2"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                        >
                                        <i class="fa fa-cogs" aria-hidden="true"></i><small style={{paddingLeft: '5px'}}> Tác Vụ</small>
                                    </button>
                                    <a class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"></a>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent2">
                                      <ul class="list-unstyled ps-0" style={{width : '100%'}}>
                                          <label><i class="fa fa-car" aria-hidden="true"></i> <b>Hãng Xe</b></label>
                                          <li class="mb-1">
                                              <FetchCategories/>
                                          </li>
                                          <li class="mb-1">
                                           <label><b>
                                            <i class="fa fa-filter" aria-hidden="true"></i> Bộ lọc
                                            </b></label>
                                            <form id="form-filter-price">
                                              <ul class="list-unstyled ps-0">
                                                <li class="mb-1">
                                                  <label>Giá</label>
                                                  <select class="form-select form-select-sm" id="filter-price" data-id='all' onChange={this.handleClick} aria-label=".form-select-sm example">
                                                      <option data-id="op0">Chọn Khoảng Giá</option>
                                                      <option data-id="op1" data-min="200000000" data-max="400000000">200tr - 400tr</option>
                                                      <option data-id="op2" data-min="400000000" data-max="600000000">400tr - 600tr</option>
                                                      <option data-id="op2" data-min="600000000" data-max="800000000">600tr - 800tr</option>
                                                      <option data-id="op3" data-min="800000000" data-max="1000000000">800tr - 1 Tỷ</option>
                                                      <option data-id="op4" data-min="1000000000" data-max="10000000000">Trên 1 Tỷ</option>
                                                    </select>
                                                </li>
                                              </ul>
                                                <div class="d-grid gap-2" style={{paddingTop: '1rem'}}>
                                                    <button id="btn-filter" class="btn btn-outline-danger btn-sm" disabled type="button">
                                                      <Link style={{color : '#dc3545'}} to={`fillter-price/${this.state.price_min}/${this.state.price_max}/${this.state.id_category}`}>
                                                        <div className="text-center" style={{width : '100%'}}>Áp Dụng</div>
                                                      </Link>
                                                    </button>
                                                </div>
                                            </form>
                                          </li>
                                      </ul>
                                    </div>
                                </div>
                              </div>
                              <div className="col-md-9">
                                <Outlet />
                                <div className="text-center">
                                    <Link to={'/webpro/shop/all-shop'}>
                                      <button type="button" class="btn btn-outline-danger btn-sm">
                                        <i class="fa fa-angle-double-left" aria-hidden="true"></i> Cửa Hàng
                                      </button>
                                    </Link>
                                  </div>
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