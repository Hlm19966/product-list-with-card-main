import './App.css'



const Card = ({cartItems, setCartItems, handelAdd}) => {
    return (
        <>
        <footer>
            <div className='cart-section'>
                <p className='cart-paragraph'>Your cart(0)</p>
                <img src='\images\illustration-empty-cart.svg' alt='Empty card' className='empty-cart-img' />
                <p className='cart-empty-p'>Your added items will appear here</p>
            </div>
        </footer>
        </>
    )
}

export default Card