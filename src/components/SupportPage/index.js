/* eslint-disable no-unused-vars */
import React from 'react'
import './index.css'

const SupportPage = () => {
  const handleProductSupport = () => {
    // Handle product support option
  }

  const handleAccountancySupport = () => {
    // Handle accountancy support option
  }

  const handleSalesSupport = () => {
    // Handle sales support option
  }

  const handleCustomSolutionsSupport = () => {
    // Handle custom solutions support option
  }

  return (
    <div>
      <h3>Support</h3>
      <div>
        <button onClick={handleProductSupport}>Product Support</button>
        <button onClick={handleAccountancySupport}>Accountancy Support</button>
        <button onClick={handleSalesSupport}>Sales Support</button>
        <button onClick={handleCustomSolutionsSupport}>
          Custom Solutions Support
        </button>
      </div>
      {/* Implement code for support forms and ticket system */}
    </div>
  )
}

export default SupportPage
