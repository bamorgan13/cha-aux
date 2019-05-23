import * as APIUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';

const receiveServers = servers => {
	return {
		type: RECEIVE_SERVERS,
		servers
	};
};

const receiveServer = server => {
	return {
		type: RECEIVE_SERVER,
		server
	};
};

const receiveServerErrors = errors => {
	return {
		type: RECEIVE_SERVER_ERRORS,
		errors
	};
};

export const getServers = filters => dispatch => {
	return APIUtil.getServers(filters).then(servers =>
		dispatch(receiveServers(servers), errors => dispatch(receiveServerErrors(errors)))
	);
};

export const getServer = id => dispatch => {
	return APIUtil.getServer(id).then(server =>
		dispatch(receiveServer(server), errors => dispatch(receiveServerErrors(errors)))
	);
};

export const createServer = server => dispatch => {
	return APIUtil.createServer(server).then(server =>
		dispatch(receiveServer(server), errors => dispatch(receiveServerErrors(errors)))
	);
};

export const updateServer = server => dispatch => {
	return APIUtil.updateServer(server).then(server =>
		dispatch(receiveServer(server), errors => dispatch(receiveServerErrors(errors)))
	);
};

export const deleteServer = id => dispatch => {
	return APIUtil.deleteServer(id).then(servers =>
		dispatch(receiveServers(servers), errors => dispatch(receiveServerErrors(errors)))
	);
};
