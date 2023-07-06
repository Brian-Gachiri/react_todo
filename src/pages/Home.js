import React from 'react';
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";


export default function Home() {
    //Using useState
    // const [todos, setTodos] = useState([])
    // function updateTodos(todo){
    //     setTodos([
    //         ...todos,
    //         todo
    //     ])
    // }

    return (
        <>
            <Header/>
            <h1 className={'text-center mt-4 fw-bold heading'}>Manage Your Tasks Like A Pro!</h1>
            {/*Using Usestate and passing props*/}
            {/*<AddTodo updateList={updateTodos} totalTodos={todos.length}/>*/}
            <AddTodo/>
            <TodoList/>
        </>
    );
}