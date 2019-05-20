import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginForm from '../components/session/login_form_container';
import SignupForm from '../components/session/signup_form_container';
import Splash from '../components/splash/splash';

const App = () => {
	return (
		<div className="app">
			<h1>cha-aux</h1>
			<AuthRoute exact path="/" component={Splash} />
			<AuthRoute path="/login" component={LoginForm} />
			<AuthRoute path="/signup" component={SignupForm} />
		</div>
	);
};

export default App;
