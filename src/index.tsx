import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./bll/store";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={'TrackingCryptocurrencies'}>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
