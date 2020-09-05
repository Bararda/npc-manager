import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import './nav-bar.css';
import PropTypes from 'prop-types';

function NavBar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="blue" variant="dark">
			<Navbar.Brand href="#home">
				<img
					src={require('../../assets/images/blue_wings.png')}
					className="nav-logo"
					alt="dnd"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<NavItem href="npcManager">
						NPC Manager
					</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

function NavItem(props) {
	return <Nav.Link href={''}>{props.children}</Nav.Link>;
}
NavItem.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
};

function NavLogo(props) {
	return (
		<Navbar.Brand className="logo" href={props.href}>
			{props.children}
		</Navbar.Brand>
	);
}


NavLogo.propTypes = {
	href: PropTypes.string,
	children: PropTypes.object,
};

export default NavBar;
