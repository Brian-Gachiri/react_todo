import {getTasks, startGetTasks, getTasksFailed, addTask} from "./todoSlice";
import {getData, postData} from "../adapters/axios-index"


export const fetchTasks = () => async (dispatch) => {
    dispatch(startGetTasks());
    try {
      const res = await getData('tasks');
   
      dispatch(getTasks(res.data));
    } catch (err) {
      dispatch(getTasksFailed(err.message));
    }
   };

export const createTask = (data) => async (dispatch) => {
    dispatch(startGetTasks());
    try {
      const res = await postData('tasks', data);
   
      dispatch(addTask(res.data));
    } catch (err) {
      dispatch(getTasksFailed(err.message));
    }
   };