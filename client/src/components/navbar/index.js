import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { FormBtn } from '../Form';
const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`


export const NavigationBar = ({ logout }) => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Navbar.Brand href="/">Home</Navbar.Brand>
                        <Navbar.Brand href="/discussions">Discussion</Navbar.Brand>
                        <Navbar.Brand href="/profile">Profile</Navbar.Brand>
                        <FormBtn
                            text="Logout"
                            onClick={logout}
                            classes="btn-primary logoutBtn"
                        />
                    </Nav.Item>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    </Styles>
)


export default NavigationBar;

