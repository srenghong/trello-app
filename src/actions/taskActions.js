import { FETCH_TASKS, NEW_TASK } from "./types";

export const fetchTasks = () => dispatch => {
  fetch("http://localhost:3004/tasks")
    .then(res => res.json())
    .then(tasks =>
      dispatch({
        type: FETCH_TASKS,
        payload: tasks
      })
    );
};

export const addTask = taskData => dispatch => {
  fetch("http://localhost:3004/tasks", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(taskData)
  })
    .then(res => res.json())
    .then(task =>
      dispatch({
        type: NEW_TASK,
        payload: task
      })
    );
};
