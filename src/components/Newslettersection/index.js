import React from 'react'
import './index.css'

const Newsletter = () => {
  const [email, setEmail] = React.useState('')

  const handleInputChange = event => {
    setEmail(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    // Send email to server or API
    console.log(email)
    setEmail('')
  }

  return (
    <div className="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  )
}

export default Newsletter
