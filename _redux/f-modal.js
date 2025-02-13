
const defaults = { on: false, data: { }, config: false };

const Modal = (state = defaults , action) => {

  const newState = { ...state };

  switch(action.type) {
    
    // called on clicking or add or edit, which updates config
    case 'toggleModalOn':
      newState.on = true;
      newState.config = action.config;
      return newState;
    
    // called on submission or clicking away from the modal, does not effect config
    case 'toggleModalOff':
      newState.on = false;
      return newState;
  }
  return state;
};

export default {
  Modal
};
