import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const mdp = dispatch => {
	return {
		logout: () => dispatch(logout())
	};
};

const Logout = props => <button onClick={() => props.logout()}>Logout</button>;

export default connect(null, mdp)(Logout);
