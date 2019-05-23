import React from 'react';
import { NavLink } from 'react-router-dom';

const ServerNavItem = ({ server }) => {
	const imageUrl = server.icon_image;
	const serverName = server.name;
	const serverId = server.id;

	return (
		<li>
			<NavLink to={`/server-discovery/${serverId}`}>
				<img className="server-icon" src={imageUrl} alt={`${serverName}_server_icon_image`} />
			</NavLink>
		</li>
	);
};

export default ServerNavItem;
