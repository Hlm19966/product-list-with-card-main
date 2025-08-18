import './/App.css'
import ProductList from './ProductList'
import Card from './Card'
import { useState } from 'react'





const ProductPage = () => {
    const [cartItems, setCartItems] = useState([]);
    return (
        <>
        <div className='product-container'>
            <header>
                <h1>Desserts</h1>
            </header>
            <ProductList
              cartItems={cartItems} 
              setCartItems={setCartItems}/>
            <Card />
        </div>
        </>
    )
}

export default ProductPage