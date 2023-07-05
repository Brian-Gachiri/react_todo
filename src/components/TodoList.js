import React from 'react';
import Todo from "./Todo";

export default function TodoList(props){
    const todos = props.todos
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