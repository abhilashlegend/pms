import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">PMS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Dashboard</Nav.Link>
                     <Nav.Link as={NavLink} to="/users" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Users</Nav.Link>
                    <Nav.Link href="#link" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</Nav.Link>
                    <Nav.Link href="#link" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Tasks</Nav.Link>
                    <Nav.Link href="#link" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Issues</Nav.Link>
                    <Nav.Link href="#link" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Messages</Nav.Link>
                    <Nav.Link href="#link" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Favorites</Nav.Link>

                    <NavDropdown title="User" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.2">
                        Settings
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                       Logout
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}