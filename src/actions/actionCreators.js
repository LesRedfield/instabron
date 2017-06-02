export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}

export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
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
