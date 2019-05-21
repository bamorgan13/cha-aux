import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const msp = state => {
	return {
		username: state.entities.users[state.session.id].username
	};
};

const mdp = dispatch => {
	return {
		logout: () => dispatch(logout())
	};
};

const Logout = props => <button onClick={() => props.logout()}>Logout {props.username}</button>;

export default connect(msp, mdp)(Logout);
