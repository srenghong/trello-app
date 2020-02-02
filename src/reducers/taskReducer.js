import { FETCH_TASKS, NEW_TASK } from "../actions/types";

const initialState = {
  tasks: [],
  task: {
    name: "",
    description: "",
    status: "todo"
  }
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    case NEW_TASK:
      const { name, description, status, id } = action.payload;
      return {
        ...state,
        task: {
          name: name,
          description: description,
          status: status,
          id: id
        }
      };
    default:
      return state;
  }
}

export default taskReducer;
