import React from 'react';
import ReactDOM from 'react-dom';
import './containers/index.css';
import Dictionary from './containers/Dictionary'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Dictionary />, document.getElementById('root'));
serviceWorker.unregister();