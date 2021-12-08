import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Counter from "./components/counter";

const App = ()=>{
    return  <Counter />
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

