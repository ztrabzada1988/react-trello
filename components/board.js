import React from 'react';

import List from './list';

export default function Board(props) {
    // return the following lists to board
    return (
        <div className="Board">
            <List title="first list" />
            <List title="2nd list" />
            <List title="3rd list" />
        </div>
    );
}
