import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import tshirt_banner from './Components/Assets/banner-tshirt.png'
import shirts_banner from './Components/Assets/banner-shirts.png'
import outwear_banner from './Components/Assets/banner-outwear.png'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/tshirts' element={<ShopCategory banner={tshirt_banner} category="tshirts" />}/>
            <Route path='/shirts' element={<ShopCategory banner={shirts_banner} category="shirts"/>}/>
            <Route path='/outwears' element={<ShopCategory banner={outwear_banner} category="outwears"/>}/>
            <Route path="/product" element={<Product/>}>
                <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
