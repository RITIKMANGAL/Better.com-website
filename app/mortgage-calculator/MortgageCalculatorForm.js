// app/mortgage-calculator/MortgageCalculatorForm.js
'use client';
import { useState } from 'react';

export default function MortgageCalculatorForm({ defaultTaxes, defaultZip }) {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [taxes, setTaxes] = useState(defaultTaxes);
  const [zip, setZip] = useState(defaultZip);
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculatePayment = (e) => {
    e.preventDefault();
    // Convert annual interest rate to monthly and compute total number of payments
    const monthlyInterest = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;

    // Mortgage payment formula: M = P * (r(1+r)^n / ((1+r)^n - 1))
    const payment = loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments) /
      (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

    // Adding monthly taxes to the calculated payment
    const totalPayment = payment + parseFloat(taxes);

    setMonthlyPayment(totalPayment.toFixed(2));
  };

  return (
    <form onSubmit={calculatePayment} className="calculator-form">
      <div className="form-group">
        <label>Loan Amount ($):</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
          required
        />
      </div>
      <div className="form-group">
        <label>Interest Rate (%):</label>
        <input
          type="number"
          step="0.01"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          required
        />
      </div>
      <div className="form-group">
        <label>Loan Term (Years):</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(parseInt(e.target.value))}
          required
        />
      </div>
      <div className="form-group">
        <label>Monthly Taxes ($):</label>
        <input
          type="number"
          step="0.01"
          value={taxes}
          onChange={(e) => setTaxes(parseFloat(e.target.value))}
          required
        />
      </div>
      <div className="form-group">
        <label>Zip Code:</label>
        <input
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </div>
      <button type="submit" className="btn">Calculate</button>
      {monthlyPayment && (
        <div className="result">
          <h2>Estimated Monthly Payment: ${monthlyPayment}</h2>
        </div>
      )}
      <style jsx>{`
        .calculator-form {
          max-width: 500px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }
        .form-group {
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
        }
        label {
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        input {
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .btn {
          padding: 0.75rem;
          background-color: #0070f3;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }
        .btn:hover {
          background-color: #005bb5;
        }
        .result {
          margin-top: 1.5rem;
          text-align: center;
        }
      `}</style>
    </form>
  );
}
