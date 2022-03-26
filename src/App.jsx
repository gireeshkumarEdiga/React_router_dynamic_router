import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Products } from "./Components/Products";
import { ProductsDetails } from "./Components/ProductsDetails";
import { Home } from "./Components/Home";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/products" element={<Products />}></Route>
       <Route path="/products/:id" element={<ProductsDetails />}></Route>
       <Route path="*" element={<div>page not found</div>}></Route>
     </Routes>
    </div>
  );
}

export default App;
