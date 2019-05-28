import React from 'react';

class ServerIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getAllServers();
	}

	render() {
		const serverLis = this.props.servers
			? this.props.servers.map(server => {
					return (
						<li key={server.id}>
							{server.name}
							{server.id}
						</li>
					);
				})
			: null;
		return (
			<div className="server-index-container">
				<h1 className="server-index-header">Find new communities on Discord</h1>
				<h5 className="server-index-group-header">Popular servers and communities</h5>
				<ul className="server-index-list">{serverLis}</ul>
			</div>
		);
	}
}

export default ServerIndex;
