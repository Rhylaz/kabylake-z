import { Inter } from "next/font/google";
import "../globals.css";
import AppNavbar from "../components/hadiNavbar"; // Import the Navbar component

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
      </body>
    </html>
  );
}