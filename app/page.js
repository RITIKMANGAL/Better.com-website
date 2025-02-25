export default function HomePage() {
  return (
    <div className="container">
      <section style={{ textAlign: "center", padding: "4rem 0" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Welcome to Better.com Replica
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Experience a clean, intuitive design inspired by Better.com.
        </p>
        <a href="/start" style={{
          display: "inline-block",
          backgroundColor: "#0070f3",
          color: "#fff",
          padding: "1rem 2rem",
          borderRadius: "5px",
          fontSize: "1rem"
        }}>
          Get Started
        </a>
      </section>
    </div>
  );
}
