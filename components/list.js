import React from 'react';

import Card from './card';

export default function List(props) {

    return (
        <div className="list">
            <div className="title">{props.title}</div>
            <Card text="I am card 1" />
            <Card text="I am card 2" />
            <Card text="I am card 3" />
        </div>
    );
}
