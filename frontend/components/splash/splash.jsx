import React from 'react';
import { Link } from 'react-router-dom';
import SplashNav from './splash_nav';
import SplashFooter from './splash_footer';

const Splash = () => {
	return (
		<div className="splash">
			<SplashNav />
			<h1>It's time to ditch Skype and TeamSpeak.</h1>
			<p>
				All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone.
			</p>
			<p>Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</p>
			<Link to="/login">Open Cha-aux in your browser</Link>
			<SplashFooter />
		</div>
	);
};

export default Splash;
