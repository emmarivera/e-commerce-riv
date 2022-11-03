import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardProduct = ({product}) => {

const navigate = useNavigate()

const handleNavigation = () => {
    navigate(`/product/${product.id}`)
}

const handleAddCart = e => {
    e.stopPropagation()
}

  return (
    <article onClick={handleNavigation} className='product'>
        <header className='product__header'>
            <img src={product.productImgs[0]} alt="" />
        </header>
        <div className='product_body'>
            <h3 className='product__title'>{product.title}</h3>
            <div className='product__price'>
                <span className= 'product__price-label'>Price</span>
                <p className='producto__price-number'>{product.price}</p>
            </div>
            <button onClick={handleAddCart} className='product_icon-container'>
                <i className="product_icon fa-solid fa-cart-shopping"></i>
            </button>

        </div>
    </article>
  )
}

export default CardProduct