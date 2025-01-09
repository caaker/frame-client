
const Modal = (state = { on:false, data: false, config: false }, action) => {
  const newState = { ...state };
  switch(action.type) {
    case 'toggleModalOn':
      newState.on = true;
      return newState;
    case 'toggleModalOff':
      newState.on = false;
      return newState;
    case 'toggleConfig':
      newState.config = !newState.config;
      return newState;
  }
  return state;
};

export default {
  Modal
};
