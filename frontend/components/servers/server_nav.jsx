import React from 'react';
import { Link } from 'react-router-dom';
import ServerNavItem from './server_nav_item';

import TempLogout from '../temp_logout';

class ServerNav extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getJoinedServers();
	}

	render() {
		const serverLis = Object.keys(this.props.servers).map(serverId => {
			const server = this.props.servers[serverId];
			return <ServerNavItem key={serverId} server={server} />;
		});
		serverLis.splice(1, 0, <li key={0} className="server-nav-separator" />);
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
