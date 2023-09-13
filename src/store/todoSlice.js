import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState : {
        todoList : []
    },
    reducers: {
        addTask: (state,action) => {
            const new_id = state.todoList.length + 1;
            const new_todo = {
                id: new_id,
                text: action.payload.text,
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

        }

    }
})

export const {addTask, removeTask, markAsComplete} = todoSlice.actions
export default todoSlice.reducer