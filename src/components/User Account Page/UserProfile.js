/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.css'

const UserProfile = () => {
  return (
    <div className="user-profile">
      <h2>Contact Details</h2>
      <form>
        <label htmlFor="client-id">Client ID (Unique)</label>
        <input type="text" id="client-id" />

        <label htmlFor="client-type">Client Type</label>
        <select id="client-type">
          <option value="individual">Individual</option>
          <option value="business">Business</option>
        </select>

        <label htmlFor="title">Title</label>
        <input type="text" id="title" />

        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="vat">VAT</label>
        <input type="text" id="vat" />

        <label htmlFor="street-add">Street Address</label>
        <input type="text" id="street-add" />

        <label htmlFor="postal-code">Postal Code</label>
        <input type="text" id="postal-code" />

        <label htmlFor="city">City</label>
        <input type="text" id="city" />

        <label htmlFor="country">Country</label>
        <input type="text" id="country" />

        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" />

        <label htmlFor="fax">Fax</label>
        <input type="text" id="fax" />

        <label htmlFor="mobile-number">Mobile Number</label>
        <input type="text" id="mobile-number" />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  )
}

export default UserProfile
