import {
  GET_TODOS_LIST
} from '../constants';

import { combineReducers } from 'redux';

const initial_state = {
  data: null,
  error: null,
  loading: false

};

const todosReducer = (state = initial_state, action) => {
  console.log("hello asif" + action.payload);
  
  switch (action.type) {
    case GET_TODOS_LIST:
      console.log("reducer:");
      return {...state,data:action.payload}
    default:
      return state
  }
};

export default combineReducers({
  todosData: todosReducer,
});