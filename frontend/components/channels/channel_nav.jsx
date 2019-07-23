import React from 'react';
import { Link } from 'react-router-dom';
import ChannelNavItem from './channel_nav_item';

import TempLogout from '../temp_logout';

class ChannelNav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentChannelId: null
		};
	}

	componentDidMount() {}

	componentDidUpdate(prevProps) {
		if (this.props.currentServerId && this.props.currentServerId != prevProps.currentServerId) {
			this.props.getServerChannels(this.props.currentServerId);
		}
		if (this.props.joinedChannelIds && this.props.joinedChannelIds.length > 0 && !this.state.currentChannelId) {
			this.setState({ currentChannelId: this.props.joinedChannelIds[0] });
		}
	}

	render() {
		const currentChannelId = this.state.currentChannelId;
		let channelLis;
		if (this.props.joinedChannels) {
			channelLis = Object.values(this.props.joinedChannels).map(channel => {
				const activeChannel = currentChannelId === channel.id ? 'active' : '';
				return (
					<ChannelNavItem
						key={channel.id}
						serverId={this.props.currentServerId}
						channel={channel}
						activeChannel={activeChannel}
					/>
				);
			});
			channelLis.unshift(
				<div className="channels-header-container" key="header">
					<h5 className="channels-header">Text Channels</h5>
					<button className="create-channel-button">
						<div className="create-channel-label-container">
							<p className="create-channel-label">Create Channel</p>
						</div>
						<div className="create-channel-arrow-down" />
						+
					</button>
				</div>
			);
		}
		let serverHeader = this.props.currentServerName ? this.props.currentServerName.name : '';
		return (
			<nav className="channel-nav">
				<div className="server-dropdown-container">
					<button className="server-dropdown-button">
						<h3 className="server-nav-header">{serverHeader}</h3>
						<p className="dropdown-indicator">∨</p>
						<p className="dropdown-close hidden">✕</p>
					</button>
					<div className="server-dropdown hidden">
						<button className="leave-server-button">Leave Server</button>
					</div>
				</div>
				<ul className="channel-nav-list">{channelLis}</ul>
				<TempLogout />
			</nav>
		);
	}
}

export default ChannelNav;
