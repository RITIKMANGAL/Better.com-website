import styles from "./start.module.css";

export default function StartPage() {
  return (
    <div className={`container ${styles.startContainer}`}>
      <h1>Get Started with Your Home Financing</h1>
      <p>
        Begin your journey towards a new home. Explore options, calculate your mortgage, and get expert advice
        along the way.
      </p>
      <div className={styles.steps}>
        <div className={styles.step}>
          <h2>Step 1</h2>
          <p>Learn about your options and find the right home for you.</p>
        </div>
        <div className={styles.step}>
          <h2>Step 2</h2>
          <p>Use our interactive mortgage calculator to estimate your monthly payments.</p>
        </div>
        <div className={styles.step}>
          <h2>Step 3</h2>
          <p>Connect with our experts to secure the best financing option.</p>
        </div>
      </div>
      <a href="/mortgage-calculator" className={styles.ctaButton}>
        Try the Mortgage Calculator
      </a>
    </div>
  );
}
