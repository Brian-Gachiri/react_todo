import React, {useEffect} from 'react';
import Todo from "./Todo";
import {useSelector} from "react-redux";
import emptyStateImage from "../images/empty.svg";
import {useDispatch} from "react-redux";
import {fetchTasks} from "../store/todoActions";

export default function TodoList(){
    // const todos = props.todos //Using props and useState
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todoList)
    const loading = useSelector((state) => state.todos.loading);
    const error = useSelector((state) => state.todos.error);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const todo_list = todos.map((todo) => (<Todo todo={todo} key={todo._id}></Todo>))

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