import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {getUsers} from "./components/Users";


const render = (data) => {
    ReactDOM.render(
        <React.StrictMode>
            <App data={data} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


getUsers().then((data) => {
    render(data)
})


render([])
