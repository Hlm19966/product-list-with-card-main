import './App.css'



const Card = ({cartItems, setCartItems, handelAdd}) => {
   
  const handelRemove = (id) => {
    setCartItems (prev => 
        prev.filter((item) => 
        item.id !== id)
    )
  }
    
    return (
        <>
        <footer>
            <section className='cart-section'>
                {cartItems.length === 0 ? (
                 <>
                  <p className='cart-paragraph'>Your cart (0)</p>
                  <img src='\images\illustration-empty-cart.svg' alt='Empty card' className='empty-cart-img' />
                  <p className='cart-empty-p'>Your added items will appear here</p>
                </>
                 ) : (
                    <>
                     <h2 className='p-result'>Your cart  ({cartItems.reduce((total, item) => total + item.quantity, 0)})</h2>
                     <ul aria-live='polite' aria-atomic='true'>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <div className='item-info'>
                                    <p className='item-name'>{item.name}</p>
                                    <p><span className='item-quantity'>{item.quantity}x </span>
                                    <span className='item-price'>${item.price.toFixed(2)}</span>
                                    <span className='item-totall'> 
                                      ${ (item.quantity * item.price).toFixed(2)}
                                    </span>
                                    </p>
                                </div>

                                <div className='remove-section'>
                                    <button
                                     className='remove-btn'
                                     aria-label={`Remove ${item.name} from cart`}
                                     onClick={() =>handelRemove(item.id)}>
                                        <img src='\images\icon-remove-item.svg'
                                        alt='' className='remove-icon'/>
                                    </button>
                                </div>
                            </li>
                        ))}
                     </ul>
                     <div className='totall'>
                        <span className='totall-p'>Order Total</span>
                        <span className='totall-amount'>
                         ${cartItems.reduce((totall, item) => totall + item.quantity * item.price, 0).toFixed(2)}
                        </span>
                     </div>
                     <div className='brand-delivery'>
                        <img src='\images\icon-carbon-neutral.svg'
                         alt='Carbon netural icon'
                         className='brand-icon'/>
                        <span className='brand-delivery-p'>This is a
                        <span className='brand-name'> carbon-neutral </span>delivery
                        </span>
                     </div>
                     <button 
                     className='confirm-order'
                     aria-label='confirm your orders'
                     type='button'
                     >
                        Confirm Order
                     </button>
                    </>
                 )
                }</section>
        </footer>
        </>
    )
}


export default Card