import { v4 as uuidv4 } from 'uuid';

const ADD_TODO = 'todos/ADD_TODO'
const DELETE_TODO = 'todos/DELETE_TODO'
const SWITCH_TODO = 'todos/SWITCH_TODO'

const initialState = [
  {
    id: uuidv4(),
    title: "test",
    body: "",
    isDone: false,
  },
];

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  }
}

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload
  }
}

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload
  }
}

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);

    case SWITCH_TODO:
      return (
        state.map((item) => {
        return item.id === action.payload 
        ? {...item, isDone: !item.isDone}
        : item;
      }))

    default:
      return state;
  }
};

export default todos;
