import './App.css'
import { useState } from 'react'




const AddToCardButtton = ( {product} )=> {
    const[quantity, setQuantity] = useState(0);

    function handelAdd() {
        setQuantity(1);
    }

    function handelIncrease() {
        setQuantity(quantity + 1);
    }

    function handelDecrease() {
        setQuantity(quantity - 1);
    }
    return (
        <>
        <div className='card-info'>
        {quantity === 0 ? (
           
            <button 
             className='card-btn'
             aria-label={'Add ${product.name} to cart'}
             onClick={handelAdd}
            >
            <img src='/images/icon-add-to-cart.svg' alt='The image of cart'
            aria-hidden="true" className='card-image'/>
            Add to Cart
            </button>
           
        ) : (
            <div 
             className='card-btn active'
             role='group'
             aria-label={`${product.name} quantity controls`}
            >
             <button
              type='button'
              className='decrease-button'
              onClick={handelDecrease} 
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
              onClick={handelIncrease} 
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