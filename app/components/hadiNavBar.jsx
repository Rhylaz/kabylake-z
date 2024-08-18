import { Navbar, NavbarBrand } from "@nextui-org/react";

export default function AppNavbar() {
  const navbarStyle = {
    height: '80px',
    display: 'flex',
    width: '100%',
    backdropFilter: 'none',
    borderBottom: '1px solid #ccc',
    backgroundColor: 'transparent',
    zIndex: 15,
    position: 'fixed'
  };

  const navbarBrandStyle = {
    padding: '10px',
    color: 'white'
  };

  const textStyle = {
    letterSpacing: '0.2em'
  };

  return (
    <Navbar style={navbarStyle}>
      <NavbarBrand style={navbarBrandStyle}>
        <p className="font-bold text-inherit text-4xl" style={textStyle}>KABYLAKE</p> 
      </NavbarBrand>
    </Navbar>
  );
}