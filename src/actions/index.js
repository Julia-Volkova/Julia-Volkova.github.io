// @ts-check

import axios from "axios";
import { createAction } from "redux-actions";

import routes from "../routes.js";

export const fetchTasksRequest = createAction("TASKS_FETCH_REQUEST");
export const fetchTasksSuccess = createAction("TASKS_FETCH_SUCCESS");
export const fetchTasksFailure = createAction("TASKS_FETCH_FAILURE");

export const removeTaskRequest = createAction("TASK_REMOVE_REQUEST");
export const removeTaskSuccess = createAction("TASK_REMOVE_SUCCESS");
export const removeTaskFailure = createAction("TASK_REMOVE_FAILURE");

// BEGIN (write your solution here)
export const addTaskRequest = createAction("TASK_ADD_REQUEST");
export const addTaskSuccess = createAction("TASK_ADD_SUCCESS");
export const addTaskFailure = createAction("TASK_ADD_FAILURE");

export const addTask = (text) => async (dispatch) => {
  dispatch(addTaskRequest());
  try {
    const url = routes.tasksUrl();
    // const response = await axios.post(url, { task: {text} });
    const response = {
      data: {
        id: "4",
        text: "task4",
      },
    };
    dispatch(addTaskSuccess({ task: response.data }));
  } catch (e) {
    dispatch(addTaskFailure(e));
    throw e;
  }
};

export const removeTask = (task) => async (dispatch) => {
  dispatch(removeTaskRequest);
  try {
    const url = routes.taskUrl(task.id);
    // await axios.delete(url);
    dispatch(removeTaskSuccess(task));
  } catch (e) {
    dispatch(removeTaskFailure(e));
    throw e;
  }
};
// END

export const fetchTasks = () => async (dispatch) => {
  dispatch(fetchTasksRequest());
  try {
    const url = routes.tasksUrl();
    // const response = await axios.get(url);
    const response = {
      data: [
        {
          id: "1",
          text: "task1",
        },
        {
          id: "2",
          text: "task2",
        },
        {
          id: "3",
          text: "task3",
        },
      ],
    };
    dispatch(fetchTasksSuccess({ tasks: response.data }));
  } catch (e) {
    dispatch(fetchTasksFailure(e));
    throw e;
  }
};
