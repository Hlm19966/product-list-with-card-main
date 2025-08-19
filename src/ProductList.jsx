import './App.css'
import products from './data.json'
import ProductItem from './ProductItem'




function ProductList({cartItems, setCartItems}) {
    return (
        <>
            <main>
                {products.map((product)=> (
                    <ProductItem key={product.id}
                     product={product}
                     cartItems={cartItems}
                     setCartItems={setCartItems}/>  
                ))}  
                
            </main>
        </>
    )
}


export default ProductList