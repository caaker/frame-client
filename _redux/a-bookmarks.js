// a-bookmarks.js

export const Bookmarks = (state = { bookmarks: false }, action) => {
  let newState = { ...state };
  
  switch (action.type) {
    case 'initializeBookmarks':
      newState.bookmarks = action.bookmarks;
      return newState;

    default:
      return state;
  }
};
