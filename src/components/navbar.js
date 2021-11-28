import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const ProjectsDropDown = () => {
    return (
        <NavDropdown alignRight title="Projetos" id="basic-nav-dropdown" >
        <LinkContainer to="/pidecor">
           <NavDropdown.Item className="navbar-dropdown-item">Pidecor</NavDropdown.Item>
       </LinkContainer>
       <NavDropdown.Divider />
       <LinkContainer to="/mvcad">
           <NavDropdown.Item className="navbar-dropdown-item">Maria vai com as dev's</NavDropdown.Item>
       </LinkContainer>
     </NavDropdown>
    )
}

const ChatbotDropDown = () => {
    return (
        <NavDropdown alignRight title="Chatbots" id="basic-nav-dropdown">
         <LinkContainer to="/kiki-bot">
            <NavDropdown.Item className="navbar-dropdown-item">Kiki</NavDropdown.Item>
        </LinkContainer>
        <NavDropdown.Divider />
        <LinkContainer to="/joke-bot">
            <NavDropdown.Item  className="navbar-dropdown-item">Joke bot</NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>
    )
}

const About  = () => {
    return (
        <LinkContainer to="/about">
        <Nav.Link>Sobre</Nav.Link>
        </LinkContainer>
    )
}

const Blog  = () => {
    return (
        <LinkContainer to="/blog">
        <Nav.Link>Blog</Nav.Link>
        </LinkContainer>
    )
}




class NavBar extends Component {


    render (){
        return (
            <Navbar sticky="top" expand="lg" className="header-big header-component">
            <LinkContainer to="/">
                <Navbar.Brand className='nav-brand'> A lini ;)</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
            <Navbar.Collapse className="navbar-custon" id="basic-navbar-nav">
                <Nav className="ml-auto navbar-custon">
                <About />
                <Blog />
                <ChatbotDropDown />
                <ProjectsDropDown />
                </Nav>
                
            </Navbar.Collapse>
            </Navbar>
        )
    }

}


export default NavBar

