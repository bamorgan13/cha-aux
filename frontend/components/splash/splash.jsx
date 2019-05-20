import React from 'react';
import SplashNav from './splash_nav';
import SplashFooter from './splash_footer';

const Splash = () => {
	return (
		<div className="splash">
			<SplashNav />
			Splash
			<SplashFooter />
		</div>
	);
};

export default Splash;
