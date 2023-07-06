import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import store from './store/index'
import Home from "./pages/Home";

function App (){

    return (
            <>
                <Home/>
            </>
        );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

