import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

fetch('/api/symbol/AAPL').then(response => {
    console.log(response.json());
})  


ReactDOM.render(<AppRouter />, document.getElementById('index'));