import { connect } from 'react-redux';
import ChannelNav from './channel_nav';
import { getChannels, getChannel } from '../../actions/channel_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
	let currentServerId;
	let joinedChannelIds;
	let joinedChannels = {};
	if (ownProps.currentServerIds) {
		currentServerId = ownProps.currentServerId;
		const serverChannelIds = state.entities.servers[currentServerId].channelIds;
		joinedChannelIds = state.entities.users[state.session.id].joinedChannelIds.filter(id =>
			serverChannelIds.includes(id)
		);
		joinedChannelIds.forEach(id => {
			if (Object.keys(state.entities.channels).includes(id.toString())) {
				joinedChannels[id] = state.entities.servers[id];
			}
		});
	}

	return {
		joinedChannelIds,
		joinedChannels,
		currentServerId,
		currentServerName: state.entities.servers[currentServerId],
		fetchedChannels: state.entities.channels,
		fetchedChannelIds: Object.keys(state.entities.channels)
	};
};

const mdp = dispatch => {
	return {
		getServerChannels: server_id => dispatch(getChannels({ server_id })),
		getChannel: id => dispatch(getChannel(id)),
		openModal: () => dispatch(openModal())
	};
};

export default connect(msp, mdp)(ChannelNav);