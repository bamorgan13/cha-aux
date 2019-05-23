import React from 'react';
import { Link } from 'react-router-dom';
import TempLogout from '../temp_logout';

class ServerNav extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getJoinedServers();
	}

	render() {
		const serverLis = Object.keys(this.props.servers).map(serverId => (
			<li key={serverId}>{this.props.servers[serverId].name}</li>
		));
		return (
			<div className="server-container">
				<nav className="server-nav">
					<ul className="server-nav-list">{serverLis}</ul>
					<Link to="/server-discovery" className="server-nav-create">
						{/*PLACEHOLDER FOR MODAL BUTTON*/}
						server creation modal
					</Link>
					<Link to="/server-discovery" className="server-nav-discovery">
						Server Discovery
					</Link>
				</nav>
				<TempLogout />
			</div>
		);
	}
}

export default ServerNav;
