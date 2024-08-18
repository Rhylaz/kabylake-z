import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import '../styles/navBar.css'; // Import the CSS file

export default function AppNavbar() {
  return (
    <Navbar className="custom-navbar" position="fixed">
      <NavbarBrand style={{ border: '1px solid #ccc', padding: '10px', color: 'white' }}>
        <p className="font-bold text-inherit">KABYLAKE</p>
      </NavbarBrand>
      <NavbarContent
        className="navbar-content-center hidden sm:flex gap-4"
        justify="center"
        style={{ border: '1px solid #ccc', padding: '10px', display: 'flex', justifyContent: 'center', color: 'white' }}
      >
        <NavbarItem style={{ border: '1px solid #ccc', padding: '10px', color: 'white' }}>
          <Link color="foreground" href="#">
            Doctrine
          </Link>
        </NavbarItem>
        <NavbarItem style={{ border: '1px solid #ccc', padding: '10px', color: 'white' }}>
          <Link href="#" aria-current="page">
            Systems
          </Link>
        </NavbarItem>
        <NavbarItem style={{ border: '1px solid #ccc', padding: '10px', color: 'white' }}>
          <Link color="foreground" href="#">
            Operations
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}