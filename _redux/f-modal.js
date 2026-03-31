const defaults = { on: false, data: { }, config: false };

// spread operator creates a new state object
const Modal = (state = defaults , action) => {
  switch(action.type) {
    
    case 'toggleModalOn':
      return { ...state, on: true, config: action.config }
    
    case 'toggleModalOff':
      return { ...state, on: false };
  
    default:
      return state;
  }
};

export default {
  Modal
};
