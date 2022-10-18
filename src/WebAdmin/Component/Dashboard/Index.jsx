import React from "react";
import './css/style.css';
import { Link } from "react-router-dom";
import axios from "axios";
import FormatPrice from "../../../WebPro/Component/FormatData/FormatPrice";
import domainApi from "../../../Config/ConfigDomainAPI";

class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            total_products : null,
            total_categories : null,
            total_users : null,
            total_money : null,
        }
    }

    async componentDidMount(){
        const accesstoken = localStorage.getItem('access_token')
        if(accesstoken){
            if(! this.state.total_products){
                const loader = document.getElementById('loader-main');
                loader.style.display = 'block';
                await axios.get(`${domainApi}/api/admin/dashboard-product`,
                {
                    'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                    }
                })
                .then(res => {
                const total_products = res.data;
                this.setState({ total_products : total_products });
                loader.style.display = 'none';
                })
                .catch(error => console.log(error));
            }if(! this.state.total_categories){
                const loader = document.getElementById('loader-main');
                loader.style.display = 'block';
                await axios.get(`${domainApi}/api/admin/dashboard-categories`,
                {
                    'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                    }
                })
                .then(res => {
                const total_categories = res.data;
                this.setState({ total_categories : total_categories });
                loader.style.display = 'none';
                })
                .catch(error => console.log(error));
            }if(! this.state.total_users){
                const loader = document.getElementById('loader-main');
                loader.style.display = 'block';
                await axios.get(`${domainApi}/api/admin/dashboard-users`,
                {
                    'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                    }
                })
                .then(res => {
                const total_users = res.data;
                this.setState({ total_users : total_users });
                loader.style.display = 'none';
                })
                .catch(error => console.log(error));
            }
            if(! this.state.total_money){
                const loader = document.getElementById('loader-main');
                loader.style.display = 'block';
                await axios.get(`${domainApi}/api/admin/dashboard-money`,
                {
                    'headers': {
                    'Authorization': 'Bearer ' + accesstoken
                    }
                })
                .then(res => {
                const total_money = res.data;
                this.setState({ total_money : total_money });
                loader.style.display = 'none';
                })
                .catch(error => console.log(error));
            }
        }
    }
    render(){
        if(this.state.total_products && this.state.total_categories && this.state.total_money && this.state.total_users){
            return(
                <>
                 <section style={{paddingTop : '2rem'}}>
                 <div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                 <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                     <h1 className="h2">Dashboard</h1>
                 </div>
                 <div className="container bootstrap snippet">
                     <div className="row">
                         <div className="col-lg-3 col-sm-6">
                             <div className="circle-tile ">
                                 <a href="#"><div className="circle-tile-heading dark-blue"><i className="fa fa-car fa-fw fa-3x"></i></div></a>
                                 <div className="circle-tile-content dark-blue">
                                 <div className="circle-tile-description text-faded"> Tổng Số Xe</div>
                                 <div className="circle-tile-number text-faded ">{this.state.total_products}</div>
                                 <Link className="circle-tile-footer" to={`/admin/products`}>Xem Thông Tin<i className="fa fa-chevron-circle-right"></i></Link>
                                 </div>
                             </div>
                         </div>
     
                         <div className="col-lg-3 col-sm-6">
                             <div className="circle-tile ">
                                 <a href="#"><div className="circle-tile-heading green"><i className="fa fa-trophy fa-fw fa-3x"></i></div></a>
                                 <div className="circle-tile-content green">
                                 <div className="circle-tile-description text-faded"> Tổng Các Hãng</div>
                                 <div className="circle-tile-number text-faded ">{this.state.total_categories}</div>
                                 <Link className="circle-tile-footer" to={`/admin/categories`}>Xem Thông Tin<i className="fa fa-chevron-circle-right"></i></Link>
                                 </div>
                             </div>
                         </div>
                         
                         <div className="col-lg-3 col-sm-6">
                             <div className="circle-tile ">
                                 <a href="#"><div className="circle-tile-heading blue"><i className="fa fa-money fa-fw fa-3x"></i></div></a>
                                 <div className="circle-tile-content blue">
                                 <div className="circle-tile-description text-faded"> Tổng Dòng Tiền</div>
                                 <div className="circle-tile-number text-faded "><FormatPrice price={this.state.total_money}/></div>
                                 <Link className="circle-tile-footer" to={`/admin/products`}>Xem Thông Tin<i className="fa fa-chevron-circle-right"></i></Link>
                                 </div>
                             </div>
                         </div> 
     
                         <div className="col-lg-3 col-sm-6">
                             <div className="circle-tile ">
                                 <a href="#"><div className="circle-tile-heading red"><i className="fa fa-users fa-fw fa-3x"></i></div></a>
                                 <div className="circle-tile-content red">
                                 <div className="circle-tile-description text-faded"> Users</div>
                                 <div className="circle-tile-number text-faded ">{this.state.total_users}</div>
                                 <Link className="circle-tile-footer" to={`/admin/users`}>Xem Thông Tin<i className="fa fa-chevron-circle-right"></i></Link>
                                 </div>
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
export default Dashboard;
