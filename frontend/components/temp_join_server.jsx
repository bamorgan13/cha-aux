import React from 'react';
import { connect } from 'react-redux';
import { updateServer } from '../actions/server_actions';

const msp = (state, ownProps) => {
	return {
		currentUserId: state.session.id,
		server: ownProps.server
	};
};

const mdp = dispatch => {
	return {
		joinServer: (server, newMemberId) => dispatch(updateServer(server, newMemberId))
	};
};

const JoinServer = ({ currentUserId, joinServer, server }) => {
	return (
		<button className="server-join-button" onClick={() => joinServer(server, currentUserId)}>
			<p>Join {server.name}</p>
			<p>(Temp Button)</p>
			<img className="server-join-icon" src={server.icon_image} alt={`${server.name}_server_icon_image`} />
		</button>
	);
};

export default connect(msp, mdp)(JoinServer);
