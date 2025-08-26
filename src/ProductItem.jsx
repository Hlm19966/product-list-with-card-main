import AddToCardButtton from './AddToCardButton'
import './App.css'



const ProductItem = ({product, cartItems, setCartItems, handelAdd, handelIncrease, handelDecrease})=> {
    
    const itemInCart = cartItems.find((item) => item.id === product.id);
    const quantity = itemInCart ? itemInCart.quantity : 0
    
    return (
        <>
        <section>
            <picture>
                <source media='(min-width: 768px)' srcSet={product.image.desktop} />
                <img src={product.image.mobile} alt= {'Photo of ${product.name}'} 
                className={`product-img ${quantity > 0 ? "active" : ""}`}/>
            </picture>
            <AddToCardButtton
             product={product}
             cartItems={cartItems}
             setCartItems={setCartItems}
             handelAdd={handelAdd}
             handelIncrease={handelIncrease}
             handelDecrease={handelDecrease} />
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