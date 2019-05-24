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
		const currentServerId = this.props.location.pathname.split('/')[2];
		const serverLis = Object.keys(this.props.servers).map(serverId => {
			const server = this.props.servers[serverId];
			const activeServer = currentServerId === serverId ? 'active' : '';
			// console.log(activeServer);
			// debugger;
			return <ServerNavItem key={serverId} server={server} activeServer={activeServer} />;
		});
		serverLis.splice(1, 0, <li key={0} className="server-nav-separator" />);
		return (
			<div className="server-container">
				<nav className="server-nav">
					<ul className="server-nav-list">
						{serverLis}
						<li className="server-nav-li">
							<Link to={`/servers/${currentServerId}/create`} className="server-nav-create">
								{/*PLACEHOLDER FOR MODAL BUTTON*/}
								server creation modal
							</Link>
							<div className="server-name-label-container">
								<div className="server-nav-arrow-left" />
								<span className="server-nav-li-link-name">Add a Server</span>
							</div>
							<div className="server-nav-selector-container">
								<div className={`server-nav-selector-indicator`} />
							</div>
						</li>
						<li className="server-nav-li">
							<Link to="/server-discovery" className="server-nav-discovery">
								Server Discovery
							</Link>
							<div className="server-name-label-container">
								<div className="server-nav-arrow-left" />
								<span className="server-nav-li-link-name">Server Discovery</span>
							</div>
							<div className="server-nav-selector-container">
								<div className={`server-nav-selector-indicator`} />
							</div>
						</li>
					</ul>
				</nav>
				<TempLogout />
			</div>
		);
	}
}

export default ServerNav;
