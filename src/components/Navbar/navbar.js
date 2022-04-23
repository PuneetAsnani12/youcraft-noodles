import {Navbar, Container, NavbarBrand} from "react-bootstrap"
import logo from "../../logo.svg"
function NavBarHeader() {
  return <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Noodle Wiki
      </Navbar.Brand>
    </Container>
  </Navbar>
}

export default NavBarHeader;