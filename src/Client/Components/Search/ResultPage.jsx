import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import FormatPrice from "../FormatData/FormatPrice";
import {
    MDBRow,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardText,
    MDBCol
  } from 'mdb-react-ui-kit';

export default function ResultPage(){
    const [items, setItems] = useState([]);
    const { key } = useParams();

    useEffect(() => {
        axios.post(
        'https://ecommerce-shop-api-project.herokuapp.com/api/search-products',
        {
            'search': key
        }
        )
        .then(res => {
            const result = res.data;
            setItems({ result })
        })
        .catch( error => console.log(error) )
      }, [key]);

      if (items.result) {
        console.log(items.result.success);
        if (items.result.success[0]) {
            return  <section className="container" style={{paddingBottom : '2rem', paddingTop : '3rem'}}>
                    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                    { items.result.success.map(product => 
                        <MDBCol className="col-6 col-md-3">
                            <Link to={`/detail-product/${product.id}`}>
                            <MDBCard className='h-100'>
                            <MDBCardImage
                                src={product.thumbnail}
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardText style={{maxWidth : '150px'}} className="d-inline-block text-truncate">{product.name}</MDBCardText>
                                <MDBCardText style={{color : '#dc3545'}}>
                                <FormatPrice price={product.price} />
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                            </Link>
                        </MDBCol>
                    )}
                    </MDBRow>
                </section>
            }else{ 
               return <section className="container" style={{paddingBottom : '2rem', paddingTop : '3rem'}}>
                        <div className="text-center">
                            <h6>Không tìm thấy kết quả cho " {key} "</h6>
                        </div>
                    </section>
            }
        } 
}