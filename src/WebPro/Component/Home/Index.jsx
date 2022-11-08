import React from "react";
import Carousel from "../../Page/Layout/Carousel";
import FetchCategories from "./HomeComponent/CategoriesList/FetchCategories";
import FetchProducts from "./HomeComponent/ProductsList/FetchProducts";

class HomePage extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }
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