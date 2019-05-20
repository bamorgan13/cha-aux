import React from 'react';
import { Link } from 'react-router-dom';

const SplashNav = () => {
	return (
		<header className="splash-header">
			<nav className="splash-header-nav">
				<div className="splash-nav-logo">(logo_icon)</div>
				<Link to="/login">Login</Link>
			</nav>
		</header>
	);
};

export default SplashNav;
