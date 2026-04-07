// a-people.js

export const People = (state = { people: false }, action) => {
  let newState = { ...state };
  switch (action.type) {
    case 'initializePeople':
      newState.people = action.people;
      return newState;

    case 'addMessage':
      // logic for addMessage would go here
      return newState;

    default:
      return state;
  }
};

export const PeopleInput = (state = { current: '' }, action) => {
  const newState = { ...state };
  switch (action.type) {
    // called along with addMessage
    case 'updatePeopleInput':
      newState.current = action.current;
      return newState;

    default:
      return state;
  }
};