import sessionErrorsReducer from './session_errors_reducer';
import serverErrorsReducer from './server_errors_reducer';
import { combineReducers } from 'redux';

const errorsReducer = combineReducers({
	session: sessionErrorsReducer,
	server: serverErrorsReducer
});

export default errorsReducer;
