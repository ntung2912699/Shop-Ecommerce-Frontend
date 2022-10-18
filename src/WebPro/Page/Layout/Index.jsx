import React from "react";
import { Outlet } from "react-router-dom";
import Navabar from "./Navabar";
import Footer from "./Footer";
import './css/index.css';


class WebProLayOut extends React.Component{
    render(){
        return(
            <main>
                <Navabar/>
                    <div style={{minHeight: '50vh', paddingTop :'2.5rem', paddingBottom : '1rem'}}>
                        <div className="spinner-border" id="products-shop-loader" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <Outlet />    
                    </div>
                <Footer/>
            </main>    
        )
    }
}
export default WebProLayOut;