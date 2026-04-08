export const SearchInput = (state = { current: '' }, action) => {
  switch (action.type) {
    case 'updateSearchInput':
      return { ...state, current: action.current };
    default:
      return state;
  }
};