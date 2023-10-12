import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { NavLink as ReactLink } from "react-router-dom";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar color="info" dark expand="md" fixed="">
      <NavbarBrand tag={ReactLink} to="/Home">
        MyBlog
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={ReactLink} to="/Home">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/About">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/Login">
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/Signup">
              Signup
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              More
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Services</DropdownItem>
              <DropdownItem>Contact us</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Youtube</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Collapse>
    </Navbar>
  );
};
export default CustomNavbar;
