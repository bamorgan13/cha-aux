import React from 'react';
import { Link } from 'react-router-dom';

class ServerNav extends React.Component {
	render() {
		return (
			<nav className="server-nav">
				<Link to="/server-discovery" className="server-nav-create">
					{/*PLACEHOLDER FOR MODAL BUTTON*/}
					server creation modal
				</Link>

				<Link to="/server-discovery" className="server-nav-discovery">
					Login
				</Link>
			</nav>
		);
	}
}

export default ServerNav;
