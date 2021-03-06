import { useState } from "react"
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
    NavbarLink,
    NavbarLinkExtended,
    OpenLinksButton
} from "./StyledComponents/StyledNavLink"



function NavBar() {
    const [extendNavbar, setExtendNavbar] =useState(false)
  return <NavbarContainer>
      {""}
      <NavbarInnerContainer>
      <LeftContainer>
          <NavbarLinkContainer extendNavbar={extendNavbar}>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/employeeList">Employee List</NavbarLink>
            <NavbarLink to="/dayView">Schedule Day View</NavbarLink>
            <OpenLinksButton onClick={() => {
                setExtendNavbar((curr) => !curr);
            }}
            >
            
             {extendNavbar ? <> &#10005;</> : <> &#8801;</>} 
            </OpenLinksButton>
          </NavbarLinkContainer>
      </LeftContainer>

      <RightContainer></RightContainer>
      </NavbarInnerContainer>
        {extendNavbar && (
            <NavbarExtendedContainer>
                <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
                <NavbarLinkExtended to="/employeeList">Employee List</NavbarLinkExtended>
                <NavbarLinkExtended to="/dayView">Schedule Day View</NavbarLinkExtended>
            </NavbarExtendedContainer>
        )}
  </NavbarContainer>
}

export default NavBar
