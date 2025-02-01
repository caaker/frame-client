
const Modal = (state = { on:false, data: {}, config: false }, action) => {
  const newState = { ...state };
  switch(action.type) {
    case 'toggleModalOn':
      newState.on = true;
      if (action.config !== undefined) {
        newState.config = action.config;
      }
      return newState;
    case 'toggleModalOff':
      newState.on = false;
      return newState;
  }
  return state;
};

export default {
  Modal
};
