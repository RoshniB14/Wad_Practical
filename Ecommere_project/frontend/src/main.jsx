
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from "./Pages/CartContext.jsx";  //
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';



createRoot(document.getElementById('root')).render(

 
    <CartProvider>  
    <App />
  </CartProvider>
 
)
