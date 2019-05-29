import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { UPDATE_JOINED_SERVERS } from '../actions/server_actions';

const usersReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_CURRENT_USER:
			return merge({}, state, { [action.currentUser.id]: action.currentUser });
		case UPDATE_JOINED_SERVERS:
			const currentUserId = action.server.newMemberId || action.server.owner_id;
			const currentUser = state[currentUserId];
			const newJoinedServerIds = currentUser.joinedServerIds.concat(action.server.id);
			const newUser = merge({}, currentUser, { joinedServerIds: newJoinedServerIds });
			return merge({}, state, { [currentUserId]: newUser });
		default:
			return state;
	}
};

export default usersReducer;
