import React, { useContext, useState } from 'react'
import './cartitems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);
    

    
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Sản Phẩm</p>
            <p>Tên Sản Phẩm</p>
            <p>Giá</p>
            <p>Số Lượng</p>
            <p>Tổng cộng</p>
            <p>Xóa</p>
        </div>
        <hr />
        {all_product.map((e) => { 
            if(cartItems[e.id] > 0 )
            { 
                return <div>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon'/>
                                <p>{e.name}</p>
                                <p>{e.new_price} VND</p>                              
                                    <button 
                                        className='cartitems-quantity'>                               
                                        {cartItems[e.id]}
                                    </button>                                 
                                <p>{e.new_price*cartItems[e.id]} VND</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr />
                        </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>{getTotalCartAmount()} VND</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>{getTotalCartAmount()} VND</h3>
                    </div>
                </div>
                <button>Thanh toán</button>
            </div>
            <div className="cartitems-promocode">
                <p>Nhập số thẻ thanh toán ở đây</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='Nhập' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems