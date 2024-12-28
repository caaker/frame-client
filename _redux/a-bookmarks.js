const Bookmarks = (state = {bookmarks: false}, action) => {
  let newState = { ...state };
  switch(action.type) {

    // called by initial page load by Data component
    case 'initializeBookmarks':
      newState.bookmarks = action.bookmarks;
      return newState;

  }

  // no change, return the previous state
  return state;

};

export default {
  Bookmarks
};
