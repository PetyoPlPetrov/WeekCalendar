import { combineReducers } from "redux";

const initialState = { events: {},loading:false }
const eventsReducer = (state = initialState, actions) => {

  switch (actions.type) {
    case "LOAD_START": {
      return { ...state, loading: true };
    }
    case "LOAD_END": {
    
      return {
        ...state,
        loading:false,
        events: {
          ...state.events,
          [actions.value.startDate]: actions.value.data
        }
      };
    }
    case "LOAD_FAIL": {
      return { ...state,        loading:false,
        error: actions.error };
    }
    default: {
      return state;
    }
  }
};

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    events: eventsReducer
  });

  return rootReducer;
}
