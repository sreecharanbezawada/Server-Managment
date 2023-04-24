/* eslint-disable no-unused-vars */
import React from 'react'
import './index.css'

const StorageBoxPopup = ({setShowPopup}) => {
  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <div>
      <h3>Buy a Storage Box</h3>
      {/* Implement code for buying a storage box */}
      <button onClick={handleClosePopup}>Close</button>
    </div>
  )
}

export default StorageBoxPopup
