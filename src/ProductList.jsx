import './App.css'
import products from './data.json'
import ProductItem from './ProductItem'




function ProductList() {
    return (
        <>
            <main>
                {products.map((product, index)=> (
                    <ProductItem key={index} product={product}/>  
                ))}  
                
            </main>
        </>
    )
}


export default ProductList