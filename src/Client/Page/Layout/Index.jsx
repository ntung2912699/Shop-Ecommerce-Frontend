import React from "react";
import { Outlet } from "react-router-dom";
import Navabar from "./Navabar";
import Footer from "./Footer";
import './css/index.css';


class Index extends React.Component{
    render(){
        return(
            <main>
                <Navabar/>
                    <div style={{minHeight: '50vh', paddingTop :'2.5rem', paddingBottom : '1rem'}}>
                    <Outlet />    
                    </div>
                <Footer/>
            </main>    
        )
    }
}
export default Index;