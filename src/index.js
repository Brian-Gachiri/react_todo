import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import store from './store/index'
import Home from "./pages/Home";
import Header from "./components/Header";
import  CreateTodo from "./pages/CreateTodo";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App (){

    return (
        <>
        
            <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
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

