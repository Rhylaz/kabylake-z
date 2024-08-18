import { Inter } from "next/font/google";
import "../globals.css";
import AppNavbar from "../components/hadiNavbar"; // Import the Navbar component
import AppFooter from "../components/hadiFooter";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ padding: 0 }}> {/* Removed padding */}
        <div style={{ border: "1px solid white" }}>
          <AppNavbar />
        </div>
        {children}
        <div style={{ marginTop: '20px' }}> {/* Added margin above the footer */}
          <AppFooter />
        </div>
      </body>
    </html>
  );
}