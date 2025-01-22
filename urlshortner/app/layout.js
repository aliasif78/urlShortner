// Components
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Dependancies
import { ToastContainer } from "react-toastify";

import "./globals.css";

export const metadata = {
  title: "Bit Links",
  description: "A URL shortner in Next.js 15.1.5.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
