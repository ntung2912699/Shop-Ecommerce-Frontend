import React from "react";
import Carousel from "../../Page/Layout/Carousel";
import FetchCategories from "./HomeComponent/CategoriesList/FetchCategories";
import FetchProducts from "./HomeComponent/ProductsList/FetchProducts";

class HomePage extends React.Component{
    render(){
        return (
            <>
                <Carousel />
                <FetchCategories />
                <FetchProducts />
            </>
        )
    }
}
export default HomePage;