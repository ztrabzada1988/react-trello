import React from 'react';

import List from './list';

export default function Board(props) {
    // return the following lists to board (which is the main parent)
    return (
        <div className="Board">
            <List title="first list" />
            <List title="2nd list" />
            <List title="3rd list" />
        </div>
    );
}
