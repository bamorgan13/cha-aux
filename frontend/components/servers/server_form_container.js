import { connect } from 'react-redux';
import ServerForm from './server_form';
import { createServer } from '../../actions/server_actions';
import { clearErrors } from '../../actions/session_actions';

const msp = state => {
	return {
		errors: state.errors.server
	};
};

const mdp = dispatch => {
	return {
		createServer: server => dispatch(createServer(server)),
		clearErrors: () => dispatch(clearErrors())
	};
};

export default connect(msp, mdp)(ServerForm);
