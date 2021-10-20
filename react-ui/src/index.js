import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RecoilRoot } from "recoil";

const client = new ApolloClient( {
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache()
  });


ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            < RecoilRoot>
                <App />
            </RecoilRoot>
        </ApolloProvider>
    </React.StrictMode>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
