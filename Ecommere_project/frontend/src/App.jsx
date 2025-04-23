
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import SignIn from "./Pages/Signin";
import SignUp from "./Pages/Signup";
import Cart from "./Pages/cart";
import Order from "./Pages/Orderpage";
import ProductPage from "./Pages/Productpage";
import AdminPanel from"./Pages/AdminPanel";
import Payment from "./Pages/Payment";
import OrderPage from "./Pages/Orderpage";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/adminpanel"element={<AdminPanel/>}/>
        <Route path="/Payment" element={<Payment />} /> 
        <Route path="/Orderpage"element={<OrderPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

