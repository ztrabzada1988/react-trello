require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(<Board title="Board 1" /> , document.getElementById('app'));
});

