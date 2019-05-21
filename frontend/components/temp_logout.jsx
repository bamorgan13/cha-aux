import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const mdp = dispatch => {
	return {
		logout: () => dispatch(logout())
	};
};

const Logout = props => <button onClick={() => props.logout()}>Logout</button>;

export default connect(null, mdp)(Logout);

// import React from 'react';
// import { connect } from 'react-redux';
// import PostForm from './post_form';
// import { fetchPost, updatePost } from '../../actions/post_actions';

// class EditPostForm extends React.Component {
//   componentDidMount() {
//     this.props.fetchPost(this.props.match.params.postId);
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.match.params.postId != this.props.match.params.postId) {
//       this.props.fetchPost(this.props.match.params.postId);
//     }
//   }

//   render() {
//     const { action, formType, post } = this.props;
//     return <PostForm action={action} formType={formType} post={post} />;
//   }
// }

// const msp = (state, ownProps) => {
//   return {
//     post: state.posts[ownProps.match.params.postId]
//   };
// };

// const mdp = (dispatch, ownProps) => {
//   return {
//     fetchPost: id => dispatch(fetchPost(id)),
//     action: post => dispatch(updatePost(post))
//   };
// };

// export default connect(msp, mdp)(EditPostForm);
