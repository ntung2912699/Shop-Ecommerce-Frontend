import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './Client/Page/Layout/Index';
import Login from './Client/Components/Auth/Login';
import Signup from './Client/Components/Auth/SignUp';
import Logout from './Client/Components/Auth/Logout';
import HomePage from './Client/Components/Home/Index';
import DetailPage from './Client/Components/Detail/Index';
import CartPage from './Client/Components/Cart/CartPage';
import CheckOutPage from './Client/Components/CheckOut/CheckoutPage/CheckOutPage';
import ResultPage from './Client/Components/Search/ResultPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail-product/:id" element={<DetailPage />}/>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/check-out" element={<CheckOutPage />} />
        <Route path="/search/:key" element={<ResultPage />} />
        {/* <Route path="/" element={<HomePage />} />
        <Route path='/error' element={<PageNotFound />}/>
        <Route path="/login" element={<LoginClient />} />
        <Route path="/signin" element={<SignInClient />} />
        <Route path="/logout" element={<LogoutClient />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/check-out" element={<CheckOutPage />} />
        <Route path="/detail-product/:id" element={<DetailPage />}/>
        <Route path="/shop-page/:categoriesId" element={<ShopPageComponent />}/> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
