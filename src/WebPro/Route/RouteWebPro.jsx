import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WebProLayOut from "../Page/Layout/Index";
import Logout from '../Component/Auth/Logout';
import Login from '../Component/Auth/Login';
import SignUp from '../Component/Auth/SignUp';
import HomePage from '../Component/Home/Index';
import DetailPage from '../Component/Detail/Index';
import ResultPage from '../Component/Search/ResultPage';
import Shop from '../Component/Shop/Index';
import Filterbycategories from '../Component/Shop/FilterProduct/Filterbycategory';
import Policy from '../Component/Contact/Policy';
import Introduce from '../Component/Contact/Introduce';
import FetchProducts from "../Component/Shop/ProductsList/FetchProducts";
import FilterAttributeProducts from "../Component/Shop/FilterProduct/FilterAttributeProducts";
import ChangePassword from "../Component/Auth/Changepassword";
import ForgotPassword from "../Component/Auth/ForgotPassword";

class RouteWebPro extends React.Component{
    render(){
        return(
            <Routes>
                <Route path='/' element={<WebProLayOut />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/change-password" element={<ChangePassword />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/detail-product/:id" element={<DetailPage />}/>
                    <Route path="/shop/*" element={<Shop />}>
                        <Route path="all-shop" element={<FetchProducts />} />
                        <Route path=":id" element={<Filterbycategories />}/>
                        <Route path="fillter-price/:min/:max/:id_category" element={<FilterAttributeProducts />}/>
                    </Route>
                    <Route path="/search/:key" element={<ResultPage />} />
                    <Route path="/policy" element={<Policy />} />
                    <Route path="/introduce" element={<Introduce />} />
                </Route>
            </Routes>
        )
    }
}
export default RouteWebPro;