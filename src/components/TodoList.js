import React from 'react';
import Todo from "./Todo";
import {useSelector} from "react-redux";
import emptyStateImage from "../images/empty.svg";

export default function TodoList(){
    // const todos = props.todos //Using props and useState
    const todos = useSelector((state) => state.todos.todoList)
    const todo_list = todos.map((todo) => (<Todo todo={todo} key={todo.id}></Todo>))

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-8'>
                    <div className='card border-0'>
                        <div className='card-body text-center'>
                            {todos.length === 0 ? (
                            <>
                            <img src={emptyStateImage} alt='Empty State' className='img-fluid w-50'/>
                            <p className='text-center fw-bold'>There are no Tasks yet.</p>
                            </>
                            ) :  
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {todo_list}
                                </tbody>
                            </table>
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}