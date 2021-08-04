import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navigator = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>
					<Link to="/">Astronaut</Link>
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link as={Link} to="/menshoes">
						Men's Shoes
					</Nav.Link>
					<Nav.Link as={Link} to="womenshoes">
						Woman's Shoes
					</Nav.Link>
					<Nav.Link as={Link} to="/about">
						About
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};
export default Navigator;
