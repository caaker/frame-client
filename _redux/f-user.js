// f-user.js

export const User = (state = { current: false }, action) => {
  switch (action.type) {
    case 'initializeUser':
      const newState = { ...state };
      newState.current = action.current;
      return newState;

    default:
      return state;
  }
};
