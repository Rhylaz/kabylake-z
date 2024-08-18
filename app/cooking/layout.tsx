import { Inter } from "next/font/google";
import "../globals.css";
import AppNavbar from "../components/navbar"; // Import the Navbar component

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div style={{ border: "1px solid red" }}>
            <AppNavbar />
          </div>
        {children}
      </body>
    </html>
  );
}