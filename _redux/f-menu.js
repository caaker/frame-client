import config             from      '../F1Customize/config_all.js';

const MenuPage = (state = {current: config.start_page, on: false}, action) => {
  const newState = { ...state };
  switch(action.type) {
    
    case 'updateMenuPage':
      newState.current = action.current;
      return newState;
    
    case 'toggleMenuPageOff':
      if(newState.on === true) {
        newState.on = false;
        return newState;
      }
      return state;
    
    case 'toggleMenuPage':
      newState.on = !state.on;
      return newState;
  }
  return state;
};

export default {
  MenuPage
};
