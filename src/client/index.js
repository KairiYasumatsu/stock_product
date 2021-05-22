import React from 'react';
import ReactDOM from 'react-dom';

fetch('/api/symbol/AAPL').then(response => {
    console.log(response.json());
})  

const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById('index'));