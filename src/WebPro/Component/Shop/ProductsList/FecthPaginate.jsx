import React, { Component } from "react";
import axios from 'axios';
import PaginationComponent from "./ProductsPaginate";
import './css/style.css'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardText,
    MDBCol
  } from 'mdb-react-ui-kit';
  import FormatPrice from "../../FormatData/FormatPrice";
  import { Link } from "react-router-dom";

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            totalRecords:0,
            limit: 6
        }
      }
        
    componentDidMount(){
        this.loadData(1);
    }
    loadData = (page) =>{
        axios
            .get(`${this.props.url}`+page)
            .then(res => {
                const data = res.data;
                const filter_price = document.getElementById('filter-price');
                if(filter_price){
                    filter_price.setAttribute("data-id", 'all');
                }
                this.setState({
                    data: data.data,
                    totalRecords : data.total ? data.total : 0,
                    limit : data.per_page ? data.per_page : 6
                })
            });
    }
    getPaginatedData = page =>{
        this.loadData(page);
    }
    render(){
        const { data, totalRecords, limit } = this.state;
        return(
            <>
                {
                    data && data.length > 0 ?
                    data.map((item,index)=>(
                        <MDBCol className="col-6 col-md-3">
                        <Link to={`/webpro/detail-product/${item.id}`}>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                            src={item.thumbnail}
                            alt='...'
                            position='top'
                            />
                            <MDBCardBody>
                            <MDBCardText class="d-inline-block text-truncate" style={{maxWidth : '100%'}}>{item.name}</MDBCardText>
                            <MDBCardText style={{color : '#dc3545'}}>
                                <FormatPrice price={item.price} />
                            </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        </Link>
                        </MDBCol>
                    )) :
                    <div className="text-center"><h5>không có sản phẩm</h5></div>
                }
                { totalRecords > 6 &&
                    <PaginationComponent
                        getAllData={this.getPaginatedData} 
                        totalRecords={totalRecords}
                        itemsCountPerPage = {limit} />
                }
            </>
        );
    }
}

export default Pagination;