function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      const i = action.index;
      return [
        ...state.slice(0, i),
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1),

      ]
    case 'REQUEST_POSTS' :
      return state;
    case 'RECEIVE_POSTS' :
      return [...action.posts].sort((a, b) => a.id - b.id);

    // debugger
    //   return Object.assign({}, state, {
    //     posts: action.posts
    //   });
    default:
      return state;
  }

  return state;
}

export default posts;
