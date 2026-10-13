import "./globals.css";

export const metadata = {
  title: "Kiki Cares® — Trusted Baby Care",
  description: "Premium baby care for Nigerian families. Hypoallergenic, dermatologist tested nappies and wipes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}