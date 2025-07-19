import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar_design/navBar";
import { CartProvider } from "./selectitemCont";
import FooterSection from "./_components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aisha Store",
  description:
    "Welcome to Aisha Store, your one-stop shop for the latest fashion trends and timeless classics. Explore our curated collection of clothing, accessories, and more, designed to elevate your style and express your individuality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <CartProvider>
      <body className={`${inter.className} space-y-6 `}>
      
      <nav  className="sticky top-0">
        <Navbar/>
      </nav>
      <main className="py-4 px-2">
        {children}
      </main>

        <footer>
            <FooterSection/>
        </footer>
        
      </body>
      </CartProvider>
    </html>
  );
}
