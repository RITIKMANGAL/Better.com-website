import styles from "./about.module.css";

export default function AboutUsPage() {
  return (
    <div className={`container ${styles.aboutContainer}`}>
      <h1>About Us</h1>
      <p>
        We are a team of dedicated professionals working to simplify the home financing process.
        Our mission is to help you make informed decisions with ease and transparency.
      </p>
      <div className={styles.historySection}>
        <h2>Our History</h2>
        <p>
          Founded with a vision to revolutionize home finance, we have grown into a trusted partner for thousands
          of homeowners.
        </p>
      </div>
    </div>
  );
}
