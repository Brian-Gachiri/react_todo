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
                    <div className='card border-0'>
                        <div className='card-body'> 
                            <table className='table table-striped'>
                                <thead>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </thead>
                                <tbody>
                                {todo_list}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}