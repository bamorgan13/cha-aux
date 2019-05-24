import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const msp = state => {
	return {
		username: state.entities.users[state.session.id].username,
		iconUrl: state.entities.users[state.session.id].icon_image
	};
};

const mdp = dispatch => {
	return {
		logout: () => dispatch(logout())
	};
};

const Logout = props => (
	<button style={{ background: 'red', height: 80 }} onClick={() => props.logout()}>
		<p>Logout {props.username}</p>
		<p>(Temp Button)</p>
		<img className="user-icon" src={props.iconUrl} alt={`${props.username}_user_icon_image`} />
	</button>
);

export default connect(msp, mdp)(Logout);
