import axios from 'axios';


export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}

export function addComment(postId, author, comment) {
  console.log('1');
  debugger
  const request = axios.post('/api/comments', {
    postId: postId,
    author: author,
    comment: comment
  });

  return {
    type: 'ADD_COMMENT',
    payload: request
  };
}

export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  };
}

export function requestPosts() {
  return {
    type: 'REQUEST_POSTS',
  }
}

export function receivePosts(json) {
  return {
    type: 'RECEIVE_POSTS',
    posts: json
  }
}

export function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(`/api/posts`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}

// export function requestAddComment(author, text) {
//   return {
//     type: 'REQUEST_ADD_COMMENT',
//     author,
//     text
//   }
// }
//
export function addCommentSuccess(comments) {
  return {
    type: 'RECEIVE_COMMENTS',
    comments
  }
}



// export function fetchComments(author, text) {
//   return dispatch => {
//     dispatch(requestAddComment(author, text));
//
//     $.ajax({
//       type: 'POST',
//       url: '/api/comments',
//       data: { author, text } })
//       .then(response => response.json())
//       .then(json => dispatch(receiveComments(json)))
//   }
// }
