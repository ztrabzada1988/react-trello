import React from 'react';

import listContainer from './list-container';

export default function Board(props) {
    // return the following list to board (which is the main parent)
    return (
        <div className="Board">
            <header>{props.title}</header>
            <listContainer />
        </div>
    );
}
