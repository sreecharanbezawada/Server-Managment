/* eslint-disable no-unused-vars */
import React from 'react'
import './styles.css'

const SettingPage = () => {
  return (
    <div className="setting-page">
      <h2>Password</h2>
      <form>
        <label htmlFor="current-password">Current Password</label>
        <input type="password" id="current-password" />

        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" />

        <label htmlFor="confirm-password">Confirm New Password</label>
        <input type="password" id="confirm-password" />

        <button type="submit">Save Changes</button>
      </form>

      <h2>Two Factor Authentication</h2>
      <div className="two-factor-authentication">
        <div className="authentication-method">
          <h3>Mobile OTP</h3>
          <button>Enable</button>
        </div>

        <div className="authentication-method">
          <h3>Email OTP</h3>
          <button>Enable</button>
        </div>

        <div className="authentication-method">
          <h3>Google Authenticator</h3>
          <button>Enable</button>
        </div>
      </div>

      <h2>Add Users</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="role">Role</label>
        <select id="role">
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <button type="submit">Add User</button>
      </form>
    </div>
  )
}

export default SettingPage
