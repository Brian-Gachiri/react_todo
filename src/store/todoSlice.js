import { createSlice} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todos',
    initialState : {
        todoList : [],
        status: 'idle',
        error: null
    },
    reducers: {
        getTasks:(state,action) => {
            state.status = 'success'
            state.todoList = action.payload
        },
        addTask: (state,action) => {
            const new_id = state.todoList.length + 1;
            const new_todo = {
                id: new_id,
                text: action.payload.text,
                description: action.payload.description,
                date: action.payload.date,
                status: false,
                priority: action.payload.priority,
            }
            state.todoList =
                [
                    ...state.todoList,
                    new_todo
                ]
        },
        removeTask:(state) => {

        },
        markAsComplete: (state) => {

        },
        getTasksFailed: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        startGetTasks: (state) => {
            state.status = 'loading'
        }

    }
})

export const {addTask, removeTask, markAsComplete, getTasks, getTasksFailed, startGetTasks} = todoSlice.actions

export default todoSlice.reducer