import "./global.css";
import Link from "next/link";

export const metadata = {
  title: "Better.com Replica",
  description: "A replica of Better.com pages built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="container">
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/mortgage-calculator">Mortgage Calculator</Link>
              <Link href="/start">Start</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Better.com Replica. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
