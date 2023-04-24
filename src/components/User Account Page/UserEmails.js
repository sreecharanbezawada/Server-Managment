/* eslint-disable no-unused-vars */
import React from 'react'

const UserEmails = () => {
  return (
    <div className="user-emails">
      <h2>Email Addresses</h2>

      <div className="email-section">
        <h3>Main Email</h3>
        <p>user@example.com</p>
      </div>

      <div className="email-section">
        <h3>Login Email Addresses</h3>
        <ul>
          <li>user@example.com</li>
          <li>team-member1@example.com</li>
          <li>team-member2@example.com</li>
        </ul>
        <button>Add Team Member</button>
      </div>

      <div className="email-section">
        <h3>Invoice Mail</h3>
        <ul>
          <li>user@example.com</li>
          <li>invoice1@example.com</li>
          <li>invoice2@example.com</li>
        </ul>
        <button>Add Email Address</button>
      </div>

      <div className="email-section">
        <h3>Reports</h3>
        <ul>
          <li>user@example.com</li>
          <li>report1@example.com</li>
          <li>report2@example.com</li>
        </ul>
        <button>Add Email Address</button>
      </div>
    </div>
  )
}

export default UserEmails
