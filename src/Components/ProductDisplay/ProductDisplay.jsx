import React, { useContext } from 'react'
import './productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img className='list-item' src={product.image} alt="" />
                <img className='list-item' src={product.image} alt="" />
                <img className='list-item' src={product.image} alt="" />
                <img className='list-item' src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(99+)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">{product.old_price} VND</div>
                <div className="productdisplay-right-price-new">{product.new_price} VND</div>
            </div>
            <div className="productdisplay-right-description">
            Hãy sở hữu một sản phẩm rực lửa khác từ thương hiệu dẫn đầu dạo phố, MAVERIK Studio. Chiếc áo này có đồ họa in ấn tượng đại diện cho thương hiệu bạn yêu thích, trễ vai mang lại vẻ ngoài thoải mái và cổ tròn có gân để cực kỳ thoải mái.
            </div>
            <div className="productdisplay-right-size">
                <h1>Chọn Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>THÊM VÀO GIỎ</button>
            <p className='productdisplay-right-category'><span>Category :</span>T-Shirt, Maverik, SS2024</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Maverik, 2024, New</p>
        </div>
    </div>
  )
}

export default ProductDisplay