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
		if (this.props.currentServerId) {
			this.props.getServerChannels(this.props.currentServerId);
		}
		if (this.props.joinedChannelIds && this.props.joinedChannelIds.length > 0 && !this.state.currentChannelId) {
			this.setState({ currentChannelId: this.props.joinedChannelIds.first });
		}
	}

	render() {
		const currentChannelId = this.state.currentChannelId;
		let channelLis;
		if (this.props.joinedChannels) {
			channelLis = Object.values(this.props.joinedChannels).map(channel => {
				const activeChannel = currentChannelId === channel.id ? 'active' : '';
				return <ChannelNavItem key={channel.id} channel={channel} activeChannel={activeChannel} />;
			});
		}
		return (
			<nav className="channel-nav">
				<h3 className="channel-nav-header">{this.props.currentServerName}</h3>
				<ul className="channel-nav-list">{channelLis}</ul>
				<TempLogout />
			</nav>
		);
	}
}

export default ChannelNav;
