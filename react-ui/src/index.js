import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from "recoil";

ReactDOM.render(
    <React.StrictMode>
            < RecoilRoot>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <App />
                </React.Suspense>
            </RecoilRoot>
    </React.StrictMode>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
