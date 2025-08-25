import './/App.css'
import ProductList from './ProductList'
import Card from './Card'
import { useState } from 'react'



const ProductPage = () => {
    const [cartItem, setCartItems] = useState([]);


    /*add to button*/ 
    
    const handelAdd = (product) => {
        setCartItems((prev) => {
            const existItem = prev.find((item) => item.id === product.id);

            if(existItem) {
            return prev.map((item) =>
                    item.id === product.id
                ? {...item, quantity: item.quantity + 1}
                : item
            );
            } else {
                return [...prev, {...product, quantity:1}]
            }
        })
    }

    /*increase*/ 

    const handelIncrease = (productId) => {
        setCartItems((prev) => 
        prev.map((item) =>
            item.id === productId
        ? { ...item, quantity: item.quantity + 1}
        : item
      )
     )
    }

    
    /*decrease*/ 

    const handelDecrease = (productId) => {
        setCartItems((prev) => 
        prev.map((item) =>
        item.id === productId
        ? {...item, quantity: item.quantity - 1}
        : item
       )
       .filter((item) => item.quantity > 0)
      )
    }

    return (
        <>
        <div className='product-container'>
            <header>
                <h1>Desserts</h1>
            </header>
            <ProductList
              cartItems={cartItem}
              setCartItems={setCartItems}
              handelAdd={handelAdd}
              handelIncrease={handelIncrease}
              handelDecrease={handelDecrease}/>
            <Card 
              cartItems={cartItem}
              setCartItems={setCartItems}/>
        </div>
        </>
    )
}

export default ProductPage