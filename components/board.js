import React from 'react';
import ListContainer from './ListContainer';

export default function Board(props)  {

    return(
        <div className="board" title={props.title}>
            <header>{props.title}</header>
        <ListContainer />
        <ListContainer />
        </div>
    );
}
