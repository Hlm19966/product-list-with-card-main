import AddToCardButtton from './AddToCardButton'
import './App.css'



const ProductItem = ({product, cartItems, setCartItems})=> {
    return (
        <>
        <section>
            <picture>
                <source media='(min-width: 768px)' srcSet={product.image.desktop} />
                <img src={product.image.mobile} alt= {'Photo of ${product.name}'} />
            </picture>
            <AddToCardButtton
             product={product}
             cartItems={cartItems}
             setCartItems={setCartItems} />
            <article>
               <p className='dessert-category'>{product.category}</p>
               <h2>{product.name}</h2>
               <p className='price'>${product.price.toFixed(2)}</p>
            </article>
        </section>
        </>
    )
}


export default ProductItem