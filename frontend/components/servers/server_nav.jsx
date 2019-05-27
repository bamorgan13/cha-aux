import React from 'react';
import { Link } from 'react-router-dom';
import ServerNavItem from './server_nav_item';
import ServerForm from './server_form_container';

import TempLogout from '../temp_logout';

class ServerNav extends React.Component {
	constructor(props) {
		super(props);

		this.handleCreationClick = this.handleCreationClick.bind(this);
	}

	componentDidMount() {
		this.props.getJoinedServers();
	}

	handleCreationClick(e) {
		e.preventDefault();
		this.props.openModal();
	}

	render() {
		const currentServerId = this.props.location.pathname.split('/')[2];
		const serverLis = this.props.servers.map(server => {
			const activeServer = currentServerId === server.id ? 'active' : '';
			return <ServerNavItem key={server.id} server={server} activeServer={activeServer} />;
		});
		serverLis.splice(1, 0, <li key={0} className="server-nav-separator" />);
		return (
			<div className="server-container">
				<nav className="server-nav">
					<ul className="server-nav-list">
						{serverLis}
						<li className="server-nav-li">
							<button className="server-nav-create" onClick={this.handleCreationClick}>
								<div className="server-nav-create-icon" />
							</button>
							<ServerForm />
							<div className="server-name-label-container">
								<div className="server-nav-arrow-left" />
								<span className="server-nav-li-link-name">Add a Server</span>
							</div>
							<div className="server-nav-selector-container">
								<div className="server-nav-selector-indicator" />
							</div>
						</li>
						<li className="server-nav-li">
							<Link to="/server-discovery" className="server-nav-discovery">
								<div className="server-nav-discovery-icon" />
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
