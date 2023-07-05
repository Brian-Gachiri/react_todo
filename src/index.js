import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function Welcome (){

    const [todos, setTodos] = useState([])

    function updateTodos(todo){
        setTodos([
            ...todos,
            todo
        ])
    }

    return (
            <>
                <Header/>
                <h1 className={'text-center mt-4 fw-bold heading'}>Manage Your Tasks Like A Pro!</h1>
                <AddTodo updateList={updateTodos} totalTodos={todos.length}/>
                <TodoList todos={todos}/>
            </>
        );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Welcome />)

