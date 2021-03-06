import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';

const msp = state => ({
	errors: state.errors.session,
	formType: 'login'
});

const mdp = dispatch => ({
	processForm: user => dispatch(login(user)),
	clearErrors: () => dispatch(clearErrors()),
	demoLogin: user => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);
