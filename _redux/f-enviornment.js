const Environment = (state = {online: false, hostname: false}, action) => {
  const newState = { ...state };
  switch(action.type) {
    case 'setOnline':
      newState.online = action.boolean;
      return newState;
    case 'setHostname':
      newState.hostname = action.hostname;
      return newState;
  }
  return state;
};

export default {
  Environment
};
