"use client"; // this page uses client-side interactivity

import { useState } from "react";
import styles from "./mortgage.module.css";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = (e) => {
    e.preventDefault();
    // Parse inputs
    const price = parseFloat(homePrice);
    const down = parseFloat(downPayment);
    const rate = parseFloat(interestRate) / 100 / 12;
    const months = parseInt(loanTerm) * 12;

    if (!price || !down || !rate || !months) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    const principal = price - down;
    // Mortgage payment formula: M = P * r(1+r)^n / ((1+r)^n - 1)
    const payment =
      (principal * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1);
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className={`container ${styles.calculatorContainer}`}>
      <h1>Mortgage Calculator</h1>
      <form onSubmit={calculateMortgage} className={styles.calculatorForm}>
        <div className={styles.formGroup}>
          <label htmlFor="homePrice">Home Price ($)</label>
          <input
            type="number"
            id="homePrice"
            value={homePrice}
            onChange={(e) => setHomePrice(e.target.value)}
            placeholder="e.g., 300000"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="downPayment">Down Payment ($)</label>
          <input
            type="number"
            id="downPayment"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            placeholder="e.g., 60000"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="e.g., 3.5"
            step="0.01"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="loanTerm">Loan Term (years)</label>
          <input
            type="number"
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="e.g., 30"
            required
          />
        </div>
        <button type="submit" className={styles.calculateButton}>
          Calculate
        </button>
      </form>
      {monthlyPayment && (
        <div className={styles.result}>
          <h2>Estimated Monthly Payment:</h2>
          <p>${monthlyPayment}</p>
        </div>
      )}
    </div>
  );
}
