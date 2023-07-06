import React from 'react';
import Todo from "./Todo";
import {useSelector} from "react-redux";

export default function TodoList(){
    // const todos = props.todos //Using props and useState
    const todos = useSelector((state) => state.todos.todoList)
    const todo_list = todos.map((todo) => (<Todo text={todo.text} date={todo.date} key={todo.id}></Todo>))
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    {todo_list}
                </div>
            </div>
        </div>
    )
}