import { connect } from 'react-redux';
import ServerNav from './server_nav';
import { getServers, getServer } from '../../actions/server_actions';

const msp = state => {
	return {
		joinedServerIds: state.entities.users[state.session.id].joinedServerIds,
		servers: state.entities.servers
	};
};

const mdp = dispatch => {
	return {
		getJoinedServers: () => dispatch(getServers({ joined: true })),
		getAllServers: () => dispatch(getServers()),
		getServer: id => dispatch(getServer(id))
	};
};

export default connect(msp, mdp)(ServerNav);
