import './App.css'
import products from './data.json'
import ProductItem from './ProductItem'




function ProductList({cartItems, setCartItems, handelAdd, handelIncrease, handelDecrease}) {
    return (
        <>
            <main id='main'>
                {products.map((product)=> (
                    <ProductItem key={product.id}
                     product={product}
                     cartItems={cartItems}
                     setCartItems={setCartItems}
                     handelAdd={handelAdd}
                     handelIncrease={handelIncrease}
                     handelDecrease={handelDecrease}/>  
                ))}  
                
            </main>
        </>
    )
}


export default ProductList