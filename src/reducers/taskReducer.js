import { FETCH_TASKS, NEW_TASK, REMOVE_TASK } from "../actions/types";

const initialState = {
  tasks: [],
  task: {
    name: "",
    description: "",
    status: "todo"
  },
  deleteTaskId: null
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
    case REMOVE_TASK:
      console.log(action.payload.id);
      return {
        ...state,
        deleteTaskId: action.payload.id
      };
    default:
      return state;
  }
};

export default taskReducer;
