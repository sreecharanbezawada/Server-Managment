import React from 'react'
import './index.css'

const OrderingPage = () => {
  const [cart, setCart] = React.useState([])

  const handleAddToCart = item => {
    setCart([...cart, item])
  }

  const handleCheckout = () => {
    // implement code for redirecting to checkout page
  }

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}

      <h2>Popular Servers</h2>
      {/* Implement code for showing popular servers */}
    </div>
  )
}

export default OrderingPage
