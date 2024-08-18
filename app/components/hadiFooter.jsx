import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function AppFooter() {
  return (
    <Navbar position="fixed" style={{ bottom: 0, width: '100%', backgroundColor: '#000' }}>
      <NavbarBrand style={{ border: '1px solid #ccc', padding: '10px', color: 'white' }}>
        <p className="font-bold text-inherit">KABYLAKE</p>
      </NavbarBrand>
      <NavbarContent
        justify="center"
        style={{ border: '1px solid #ccc', padding: '10px', display: 'flex', justifyContent: 'center', color: 'white' }}
      >
        <NavbarItem style={{ border: '1px solid #ccc', padding: '10px', color: 'white' }}>
          <Link color="foreground" href="#">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem style={{ border: '1px solid #ccc', padding: '10px', color: 'white' }}>
          <Link href="#">
            Privacy Policy
          </Link>
        </NavbarItem>
        <NavbarItem style={{ border: '1px solid #ccc', padding: '10px', color: 'white' }}>
          <Link color="foreground" href="#">
            Terms of Service
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}