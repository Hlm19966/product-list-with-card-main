import './/App.css'
import ProductList from './ProductList'
import Card from './Card'





const ProductPage = () => {
    return (
        <>
        <div className='product-container'>
            <header>
                <h1>Desserts</h1>
            </header>
            <ProductList />
            <Card />
        </div>
        </>
    )
}

export default ProductPage