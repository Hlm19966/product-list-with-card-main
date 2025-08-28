import './App.css'





const AddToCardButtton = ( {product,cartItems, setCartItems, handelAdd, handelIncrease, handelDecrease} )=> {

    const itemInCart = cartItems.find((item) => 
    item.id === product.id);
    const quantity = itemInCart ? itemInCart.quantity : 0;


    const handelKeyIncrease = (e) => {
        if(e.key === "ArrowUp" || e.key === "ArrowRight") handelIncrease();
    }

    const handelKeydecrease = (e) => {
        if(e.key === "ArrowDown" || e.key === "ArrowLeft") handelDecrease();
    }


    return (
        <>
        <div className='card-info'>
        {quantity === 0 ? (
           
            <button 
             className='card-btn'
             type='button'
             aria-label={'Add ${product.name} to cart'}
             onClick={() => handelAdd(product)}
            >
            <img src='/images/icon-add-to-cart.svg' alt='The image of cart'
            aria-hidden="true" className='card-image'/>
            Add to Cart
            </button>
           
        ) : (
            <div 
             className='card-btn active'
             role='soinbutton'
             aria-valuemin={quantity}
             tabIndex="0"
             aria-label={`${product.name} quantity controls`}
            >
             <button
              type='button'
              className='decrease-button'
              onClick={() => handelDecrease(product.id)} 
              onKeyDown={handelKeydecrease}
              aria-label={`Decreas ${product.name} quantity`}
             >
               <img src='images\icon-decrement-quantity.svg' alt='decrease icon' aria-hidden="true" className='decrease-icon'/>
             </button>

             <output className='quantity-number' aria-live='polite' aria-atomic='true'>
                {quantity}
             </output>

             <button
              type='button'
              className='increase-button'
              onClick={() => handelIncrease(product.id)} 
              onKeyDown={handelKeyIncrease}
              aria-label={`Inecreas ${product.name} quantity`}
             >
                <img src='images\icon-increment-quantity.svg' alt='increase icon' aria-hidden="true" className='increase-icon'/>
             </button>
            </div>
        )
        }
        </div>
        </>
    )
}


export default AddToCardButtton 