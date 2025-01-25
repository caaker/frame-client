const Bookmarks = (state = {bookmarks: false}, action) => {
  let newState = { ...state };
  switch(action.type) {

    // called on initial page load by Data component
    case 'initializeBookmarks':
      newState.bookmarks = action.bookmarks;
      return newState;
  }

  return state;
};

export default {
  Bookmarks
};
