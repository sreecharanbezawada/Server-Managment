/* eslint-disable no-unused-vars */
import React from 'react'
import './index.css'

const HistoryPage = () => {
  const handleSubmit = event => {
    event.preventDefault()
    // Implement code for filtering the history records
  }

  const handleReset = () => {
    // Implement code for resetting the filter fields
  }

  return (
    <div>
      <h3>Filter</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Applications/Services:
          <input type="text" name="service" />
        </label>
        <label>
          Server Type:
          <select name="serverType">
            <option value="vps">VPS</option>
            <option value="dedicated">Dedicated</option>
          </select>
        </label>
        <label>
          Module:
          <input type="text" name="module" />
        </label>
        <label>
          From Date:
          <input type="date" name="fromDate" />
        </label>
        <label>
          To Date:
          <input type="date" name="toDate" />
        </label>
        <label>
          Status:
          <select name="status">
            <option value="onHold">On Hold</option>
            <option value="success">Success</option>
            <option value="failed">Failed</option>
          </select>
        </label>
        <label>
          IP Address:
          <input type="text" name="ipAddress" />
        </label>
        <div>
          <button type="submit">Search</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      <h3>Logs</h3>
      {/* Implement code for showing the logs of changes in account */}
    </div>
  )
}

export default HistoryPage
