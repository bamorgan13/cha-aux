import React from 'react';
import { Link } from 'react-router-dom';
import ServerNavItem from './server_nav_item';
import ServerForm from './server_form_container';

import TempLogout from '../temp_logout';
import ServerIndex from './server_index_container';

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
		const currentServerId = parseInt(this.props.location.pathname.split('/')[2]);
		const discoveryPage = this.props.location.pathname.split('/')[1] === 'server-discovery';
		let serverIndex;
		let discoveryNavIndicatorClass = 'server-nav-selector-indicator';
		let discoveryNavIconClass = 'server-nav-discovery-icon';
		if (discoveryPage) {
			serverIndex = <ServerIndex />;
			discoveryNavIndicatorClass = discoveryNavIndicatorClass.concat(' active');
			discoveryNavIconClass = discoveryNavIconClass.concat(' active');
		}
		let serverLis;
		serverLis = this.props.servers.map(server => {
			const activeServer = currentServerId === server.id ? 'active' : '';
			return <ServerNavItem key={server.id} server={server} activeServer={activeServer} />;
		});
		serverLis.splice(1, 0, <li key={0} className="server-nav-separator" />);
		// if (!discoveryPage && !this.props.joinedServerIds.includes(currentServerId)) {
		// 	debugger;
		// 	if (!this.props.fetchedServerIds.includes(currentServerId.toString())) {
		// 		debugger;
		// 		this.props.getServer(currentServerId);
		// 	} else {
		// 		debugger;
		// 		serverLis.splice(
		// 			1,
		// 			0,
		// 			<ServerNavItem
		// 				key={currentServerId}
		// 				server={this.props.servers[currentServerId]}
		// 				activeServer="active"
		// 			/>
		// 		);
		// 	}
		// }
		return (
			<div className="server-container">
				<nav className="server-nav">
					<ul className="server-nav-list">
						{serverLis}
						<li className="server-nav-li">
							<button className="server-nav-create" onClick={this.handleCreationClick}>
								<div className="server-nav-create-icon" />
							</button>
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
								<div className={discoveryNavIconClass} />
							</Link>
							<div className="server-name-label-container">
								<div className="server-nav-arrow-left" />
								<span className="server-nav-li-link-name">Server Discovery</span>
							</div>
							<div className="server-nav-selector-container">
								<div className={discoveryNavIndicatorClass} />
							</div>
						</li>
					</ul>
					<TempLogout />
				</nav>
				{serverIndex}
				<ServerForm />
			</div>
		);
	}
}

export default ServerNav;
