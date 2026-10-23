import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "Kiki Cares - Happy Babies, Healthy Tomorrows",
  description: "Premium baby care products made for African babies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true} style={{ fontFamily: "'Quicksand', sans-serif" }}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}