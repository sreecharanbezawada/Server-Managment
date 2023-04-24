// eslint-disable-next-line no-unused-vars
import React from 'react'
import './index.css'

const InvoicePage = () => {
  return (
    <div className="invoice-page">
      <div className="overview-section">
        <h2>Overview</h2>
        <table>
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INV-001</td>
              <td>01/01/2023</td>
              <td>$100.00</td>
              <td>Paid</td>
            </tr>
            <tr>
              <td>INV-002</td>
              <td>02/01/2023</td>
              <td>$200.00</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>INV-003</td>
              <td>03/01/2023</td>
              <td>$300.00</td>
              <td>Unpaid</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="credit-balance-section">
        <h2>Credit Balance</h2>
        <p>Your current credit balance is $500.00</p>
        <button>Add Credit</button>
      </div>

      <div className="payment-details-section">
        <h2>Payment Details</h2>
        <table>
          <thead>
            <tr>
              <th>Payment Method</th>
              <th>Card Number</th>
              <th>Expiration Date</th>
              <th>Billing Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Visa</td>
              <td>**** **** **** 1234</td>
              <td>01/25</td>
              <td>123 Main St, Anytown, USA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="payment-policy-section">
        <h2>Payment Policy</h2>
        <p>
          Payment is due upon receipt of invoice. Late payments will incur a 10%
          late fee.
        </p>
      </div>
    </div>
  )
}

export default InvoicePage
