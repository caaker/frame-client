const MenuLeft = (state = { on: false }, action) => {
  switch (action.type) {
    case 'toggleMenuLeftOff':
      return { on: false };

    case 'toggleMenuLeft':
      return { on: !state.on };

    default:
      return state;
  }
};

export default {
  MenuLeft
};

