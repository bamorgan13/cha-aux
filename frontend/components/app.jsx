import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginForm from '../components/session/login_form_container';
import SignupForm from '../components/session/signup_form_container';
import Splash from '../components/splash/splash';

import TempLogout from '../components/temp_logout';

const App = () => {
	return (
		<div className="app">
			<ProtectedRoute path="/server-discovery" component={TempLogout} />
			<AuthRoute exact path="/" component={Splash} />
			<AuthRoute path="/login" component={LoginForm} />
			<AuthRoute path="/signup" component={SignupForm} />
		</div>
	);
};

export default App;
