import React, { useContext, useRef, useState } from 'react'
import './navbar.css'

import logo from '../Assets/kayvee-logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/dropdown_icon.png'

const Navbar = () => {

    const [ menu, setMenu ] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <a href="/">
            <img src={logo} alt="" />
            </a>
            <p>KayveeClothing</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={() => {setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to ='/'>Cửa hàng</Link>{menu === "shop" ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("tshirts")}}><Link style={{ textDecoration: 'none'}} to='/tshirts'>T-Shirt</Link>{menu === "tshirts" ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("shirts")}}><Link style={{ textDecoration: 'none'}} to ='/shirts'>Shirts</Link>{menu === "shirts" ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("outwears")}}><Link style={{ textDecoration: 'none'}} to='/outwears'>Outwear</Link>{menu === "outwears" ? <hr/> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='login'><button>Đăng nhập</button></Link>
            <Link to='cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar