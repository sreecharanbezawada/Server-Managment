/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import StorageBoxPopup from './StorageBoxPopup'
import './index.css'

const StorageBox = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleBuyBox = () => {
    setShowPopup(true)
  }

  const handleTransferBox = () => {
    // Implement code to transfer storage box
  }

  return (
    <div>
      <h2>Storage Box</h2>
      {showPopup ? (
        <StorageBoxPopup setShowPopup={setShowPopup} />
      ) : (
        <div>
          <button onClick={handleBuyBox}>Buy A Storage Box</button>
          <button onClick={handleTransferBox}>Storage Box Transfer</button>
        </div>
      )}
    </div>
  )
}

export default StorageBox
