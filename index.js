import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/Board';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Board title="MyBoard" />, document.getElementById('app'));
});
