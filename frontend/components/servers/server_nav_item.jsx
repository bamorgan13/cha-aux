import React from 'react';
import { NavLink } from 'react-router-dom';

const ServerNavItem = ({ server }) => {
	const imageUrl = server.icon_image;
	const serverName = server.name;
	const serverId = server.id;

	return (
		<li className="server-nav-li">
			<NavLink className="server-nav-li-link" to={`/servers/${serverId}`}>
				<img className="server-icon" src={imageUrl} alt={`${serverName}_server_icon_image`} />
			</NavLink>
			<span className="server-nav-li-link-name">{serverName}</span>
		</li>
	);
};

export default ServerNavItem;
