import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jitendra Bisht | Full-Stack Developer Portfolio",
  description: "Explore the personal portfolio of Jitendra Bisht — a passionate full-stack developer skilled in React, Python, and modern web technologies. View projects, skills, and contact information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hydrated">
      <meta property="og:title" content="Jitendra | Full-Stack Developer" />
      <meta property="og:description" content="Portfolio of Jitendra - Full-Stack Developer skilled in React, Python, MongoDB, and modern web technologies." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourdomain.com" />
      <meta property="og:image" content="/preview.png" />
      <meta name="twitter:card" content="summary_large_image" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="container">
          {children}

        </div>
        <Footer />
      </body>
    </html>
  );
}

