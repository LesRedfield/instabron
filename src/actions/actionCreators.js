import axios from 'axios';


export function increment(id) {
  return {
    type: 'INCREMENT_LIKES',
    id
  };
}

export function addComment(props) {
  return {
    type: 'ADD_COMMENT',
    props
  };
}

export function removeComment(id) {
  return {
    type: 'REMOVE_COMMENT',
    id
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
    // return fetch(`/api/posts`)
    // return axios.get('/api/posts')
    return axios.get('/db')
      .then(response => response.data)
      .then(json => dispatch(receivePosts(json)))
  }
}

export function createComment(props) {
  return dispatch => {
    dispatch(addComment(props))
    return axios.post('/api/comments', props)
      .then(json => dispatch(fetchPosts()))
  }
}

export function deleteComment(id) {
  return dispatch => {
    dispatch(removeComment(id))
    return axios.delete(`/api/comment/${id}`)
      .then(json => dispatch(fetchPosts()))
  }
}

export function incrementLikes(id) {
  return dispatch => {
    dispatch(increment(id))
    return axios.put(`/api/post/${id}`)
      .then(json => dispatch(fetchPosts()))
  }
}
