import React from 'react';
import ReactDOM from 'react-dom';
// import ReactToolbox from 'react-toolbox';
// import { Select, Button } from 'react-toolbox/lib/button';
import './index.css';
import Challenge from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Challenge role="main" />, 
    document.getElementById('root')
);
registerServiceWorker();
