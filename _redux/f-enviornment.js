const Environment = (state = { online: false, hostname: false }, action) => {
  switch (action.type) {
    case 'setOnline':
      return { ...state, online: action.boolean };

    case 'setHostname':
      return { ...state, hostname: action.hostname };

    default:
      return state;
  }
};

export default Environment;