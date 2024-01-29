import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import store from './store/index'
import Home from "./pages/Home";
import Login from "./pages/Login";
import  CreateTodo from "./pages/CreateTodo";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import {useSelector} from "react-redux";


function App (){

    const user = useSelector((state) => state.user)

    return (
        <>
            <Router>
            { user.loggedIn && <Navbar/>}
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/create" element={<CreateTodo/>} />
            </Routes>
            </Router>
        </>
        );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

