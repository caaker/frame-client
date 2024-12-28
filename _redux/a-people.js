const People = (state = {people: false}, action) => {
  let newState = { ...state };
  switch(action.type) {
    case 'initializePeople':
      newState.people = action.people;
      return newState;

    // called along with updatePeopleInput
    case 'addMessage':

      // this is a bug, why are you adding a person on a message update
      // const clone = [...newState.people];
      // clone.push(action.message);
      // newState.people = clone;
      // return newState;
  }
  return state;
};

const PeopleInput = (state = {current: ''}, action) => {
  const newState = { ...state };
  switch(action.type) {

    // called along with addMessage
    case 'updatePeopleInput':
      newState.current = action.current;
      return newState;
  }
  return state;
};

export default {
  People,
  PeopleInput
};

