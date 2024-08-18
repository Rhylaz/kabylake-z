import { Navbar, NavbarBrand } from "@nextui-org/react";
import '../styles/navBar.css'; // Import the CSS file

export default function AppNavbar() {
  return (
    <Navbar className="custom-navbar" position="fixed">
      <NavbarBrand style={{ padding: '10px', color: 'white' }}>
      <p className="font-bold text-inherit text-4xl" style={{ letterSpacing: '0.2em' }}>KABYLAKE</p> 
      </NavbarBrand>
    </Navbar>
  );
}